"use client";

import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    /* ─────────────────────────────────────────────
       CURSOR CUSTOM
       Désactivé - géré par le composant Cursor.tsx
    ───────────────────────────────────────────── */

    /* ─────────────────────────────────────────────
       NAV : sticky blur au scroll
    ───────────────────────────────────────────── */
    const nav = document.getElementById("nav");
    const handleNavScroll = () => {
      nav?.classList.toggle("on", window.scrollY > 24);
    };
    handleNavScroll();
    window.addEventListener("scroll", handleNavScroll, { passive: true });
    window.addEventListener("resize", handleNavScroll, { passive: true });

    /* ─────────────────────────────────────────────
       NAV ACTIVE LINK
    ───────────────────────────────────────────── */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("on"));
            const active = document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`,
            );
            active?.classList.add("on");
          }
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((sec) => navObs.observe(sec));

    /* ─────────────────────────────────────────────
       SECTION PAR SECTION (plein écran)
       Une seule section à l'écran : au bout d'une section,
       le scroll fait disparaître son contenu en fondu et
       fait apparaître la suivante. Une section plus haute
       que l'écran (Services, Parcours) se lit d'abord en
       entier. Molette et clavier sur ordinateur, glisser
       du doigt sur mobile ; scroll classique si les
       animations sont désactivées.
    ───────────────────────────────────────────── */
    const blocks = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );
    const fullpage = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    ).matches;
    if (fullpage) document.documentElement.classList.add("fullpage");

    const OUT_MS = 320; // durée du fondu de sortie (cf. globals.css)
    const LOCK_MS = 900; // pas de nouveau changement avant ce délai
    const GESTURE_GAP_MS = 220; // pause qui sépare deux gestes de scroll
    const EDGE_PX = 24; // un reste plus petit compte comme « au bord »
    let busy = false;
    let lockedUntil = 0;
    let lastWheel = 0;
    let gestureFromEdge = false;
    let outTimer = 0;

    // Saut immédiat : le scroll-behavior: smooth du CSS est coupé le temps du
    // saut, sinon certains navigateurs défilent en douceur à travers toutes
    // les sections intermédiaires
    const root = document.documentElement;
    const jumpTo = (top: number) => {
      root.style.scrollBehavior = "auto";
      window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
      root.style.scrollBehavior = "";
    };
    // Position dans la page d'après la mise en page (offsetTop), pas
    // d'après l'affichage : le décalage du fondu (translate) ne la fausse pas
    const topOf = (el: HTMLElement) => {
      let top = 0;
      for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) {
        top += n.offsetTop;
      }
      return top;
    };
    const currentIndex = () => {
      const y = window.scrollY + 2;
      let index = 0;
      blocks.forEach((block, i) => {
        if (topOf(block) <= y) index = i;
      });
      return index;
    };
    // Reste à lire dans la section courante, vers le bas / vers le haut
    const room = (index: number) => {
      const block = blocks[index];
      const top = topOf(block);
      const bottom = top + block.offsetHeight - window.innerHeight;
      return {
        down: Math.max(0, bottom - window.scrollY),
        up: Math.max(0, window.scrollY - top),
      };
    };

    // dir = 1 : on arrive par le haut de la section ; -1 : par le bas
    const goToSection = (index: number, dir: 1 | -1) => {
      const from = blocks[currentIndex()];
      const to = blocks[index];
      if (!to || busy || from === to) return;
      busy = true;
      from.dataset.fp = dir > 0 ? "out-down" : "out-up";
      outTimer = window.setTimeout(() => {
        const top = topOf(to); // mesuré avant le décalage d'entrée
        // pendant le saut, toutes les sections sont masquées : même si le
        // navigateur traverse la page, aucune section intermédiaire ne s'affiche
        root.classList.add("fp-jumping");
        to.dataset.fp = dir > 0 ? "enter-down" : "enter-up";
        delete from.dataset.fp;
        // borné à ce que la page permet (sinon « arrivé » n'est jamais vrai)
        const maxY = root.scrollHeight - window.innerHeight;
        const target = Math.min(
          maxY,
          Math.max(0, dir > 0 ? top : top + to.offsetHeight - window.innerHeight),
        );
        jumpTo(target);
        to.getBoundingClientRect(); // applique l'état de départ avant le fondu
        // on attend que la page soit vraiment arrivée (au plus 1,5 s) avant de
        // faire apparaître la section d'arrivée et de réafficher les autres
        const started = performance.now();
        const settle = () => {
          const arrived = Math.abs(window.scrollY - target) < 2;
          if (!arrived && performance.now() - started < 1500) {
            outTimer = window.setTimeout(settle, 30);
            return;
          }
          root.classList.remove("fp-jumping");
          delete to.dataset.fp;
          busy = false;
          lockedUntil = performance.now() + LOCK_MS - OUT_MS;
        };
        outTimer = window.setTimeout(settle, 20);
      }, OUT_MS);
    };

    const step = (delta: number) => {
      const index = currentIndex();
      const left = room(index);
      if (delta > 0 && left.down > EDGE_PX) {
        jumpTo(window.scrollY + Math.min(delta, left.down));
        return false;
      }
      if (delta < 0 && left.up > EDGE_PX) {
        jumpTo(window.scrollY - Math.min(-delta, left.up));
        return false;
      }
      return true; // au bord de la section
    };

    // Section « à étapes » (data-steps, ex. Parcours) : chaque geste avance
    // d'exactement une étape, au lieu de défiler de quelques pixels (il
    // fallait parfois deux gestes pour changer d'expérience).
    // Retourne "moved", "edge" (déjà à la première / dernière étape) ou null
    // si la section courante n'a pas d'étapes.
    const STEP_LOCK_MS = 650;
    const stepped = (dir: 1 | -1): "moved" | "edge" | null => {
      const block = blocks[currentIndex()];
      const count = Number(block.dataset.steps) || 0;
      if (count < 2) return null;
      const top = topOf(block);
      const scrollable = block.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return null;
      const position = (i: number) => top + (i / (count - 1)) * scrollable;
      const current = Math.round(
        ((window.scrollY - top) / scrollable) * (count - 1),
      );
      const next = current + dir;
      if (next < 0 || next > count - 1) return "edge";
      window.scrollTo({ top: position(next), behavior: "smooth" });
      lockedUntil = performance.now() + STEP_LOCK_MS;
      return "moved";
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return; // zoom
      event.preventDefault();
      const now = performance.now();
      const newGesture = now - lastWheel > GESTURE_GAP_MS;
      lastWheel = now;
      if (busy || now < lockedUntil || !event.deltaY) return;
      const delta =
        event.deltaMode === 1 ? event.deltaY * 40 : event.deltaY;
      const dir: 1 | -1 = delta > 0 ? 1 : -1;
      if (newGesture) {
        const left = room(currentIndex());
        gestureFromEdge = dir > 0 ? left.down <= EDGE_PX : left.up <= EDGE_PX;
        const result = stepped(dir);
        if (result === "moved") return;
        if (result === "edge") {
          goToSection(currentIndex() + dir, dir);
          return;
        }
      } else if (blocks[currentIndex()].dataset.steps) {
        return; // suite (élan) d'un geste déjà utilisé pour une étape
      }
      const atEdge = step(delta);
      // L'élan d'un geste qui finit de lire une section ne doit pas
      // enchaîner sur la suivante : il faut un nouveau geste.
      if (atEdge && gestureFromEdge) goToSection(currentIndex() + dir, dir);
    };

    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("input, textarea, select, [contenteditable]")) return;
      const page = window.innerHeight * 0.85;
      const deltas: Record<string, number> = {
        ArrowDown: 80,
        ArrowUp: -80,
        PageDown: page,
        PageUp: -page,
        " ": event.shiftKey ? -page : page,
      };
      if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        const index = event.key === "Home" ? 0 : blocks.length - 1;
        goToSection(index, index > currentIndex() ? 1 : -1);
        return;
      }
      const delta = deltas[event.key];
      if (!delta) return;
      event.preventDefault();
      if (busy || performance.now() < lockedUntil) return;
      const dir: 1 | -1 = delta > 0 ? 1 : -1;
      const result = stepped(dir);
      if (result === "moved") return;
      if (result === "edge" || step(delta)) {
        goToSection(currentIndex() + dir, dir);
      }
    };

    // Les liens du menu passent eux aussi par le fondu
    const onAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const id = link?.getAttribute("href")?.slice(1);
      const target = id ? document.getElementById(id) : null;
      const index = target ? blocks.indexOf(target) : -1;
      if (index === -1) return;
      event.preventDefault();
      goToSection(index, index > currentIndex() ? 1 : -1);
      history.replaceState(null, "", `#${id}`);
    };

    /* Tactile : on fait défiler la section nous-mêmes (avec un élan qui
       s'arrête au bord de la section) ; un glissement entamé au bord
       passe à la section suivante. Les glissements horizontaux restent
       natifs (carrousels). */
    const SWIPE_PX = 50; // distance minimale pour changer de section
    let touch: {
      startX: number;
      startY: number;
      lastY: number;
      lastT: number;
      velocity: number; // px/ms, positif = vers le bas de la page
      axis: "x" | "y" | null;
      fromEdgeDown: boolean;
      fromEdgeUp: boolean;
    } | null = null;
    let glideFrame = 0;

    const stopGlide = () => {
      cancelAnimationFrame(glideFrame);
      glideFrame = 0;
    };
    // Élan après le lâcher, freiné et borné à la section courante
    const glide = (velocity: number) => {
      let v = velocity;
      let last = performance.now();
      const frame = (now: number) => {
        const dt = Math.min(32, now - last);
        last = now;
        const left = room(currentIndex());
        const delta = v * dt;
        const allowed = delta > 0 ? Math.min(delta, left.down) : -Math.min(-delta, left.up);
        if (allowed) jumpTo(window.scrollY + allowed);
        v *= Math.pow(0.95, dt / 16);
        glideFrame =
          Math.abs(v) > 0.02 && allowed === delta ? requestAnimationFrame(frame) : 0;
      };
      glideFrame = requestAnimationFrame(frame);
    };

    const onTouchStart = (event: TouchEvent) => {
      stopGlide();
      if (event.touches.length !== 1) {
        touch = null;
        return;
      }
      const t = event.touches[0];
      const left = room(currentIndex());
      touch = {
        startX: t.clientX,
        startY: t.clientY,
        lastY: t.clientY,
        lastT: performance.now(),
        velocity: 0,
        axis: null,
        fromEdgeDown: left.down <= EDGE_PX,
        fromEdgeUp: left.up <= EDGE_PX,
      };
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!touch) return;
      const t = event.touches[0];
      if (!touch.axis) {
        const dx = Math.abs(t.clientX - touch.startX);
        const dy = Math.abs(t.clientY - touch.startY);
        if (Math.max(dx, dy) < 6) return;
        touch.axis = dx > dy ? "x" : "y";
      }
      if (touch.axis === "x") return;
      event.preventDefault();
      if (busy) return;
      const now = performance.now();
      const delta = touch.lastY - t.clientY;
      const left = room(currentIndex());
      const allowed = delta > 0 ? Math.min(delta, left.down) : -Math.min(-delta, left.up);
      if (allowed) jumpTo(window.scrollY + allowed);
      const dt = Math.max(1, now - touch.lastT);
      touch.velocity = touch.velocity * 0.6 + (delta / dt) * 0.4;
      touch.lastY = t.clientY;
      touch.lastT = now;
    };

    const onTouchEnd = () => {
      const current = touch;
      touch = null;
      if (!current || current.axis !== "y" || busy) return;
      const total = current.startY - current.lastY;
      const dir: 1 | -1 = total > 0 ? 1 : -1;
      const fromEdge = dir > 0 ? current.fromEdgeDown : current.fromEdgeUp;
      if (Math.abs(total) > SWIPE_PX && fromEdge) {
        goToSection(currentIndex() + dir, dir);
        return;
      }
      // doigt resté immobile avant le lâcher : pas d'élan
      if (performance.now() - current.lastT < 80) glide(current.velocity);
    };

    if (fullpage) {
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onTouchEnd);
      window.addEventListener("touchcancel", onTouchEnd);
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("keydown", onKey);
      document.addEventListener("click", onAnchorClick);
    }

    /* ─────────────────────────────────────────────
       SCROLL REVEAL
       IMPORTANT : on utilise un MutationObserver en plus
       pour observer les éléments ajoutés dynamiquement
       (Next.js peut rendre les composants après useEffect)
    ───────────────────────────────────────────── */
    const REVEAL_CLASSES = [".rv", ".rv-left", ".rv-scale"];
    const REVEAL_SELECTOR = REVEAL_CLASSES.join(", ");

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    // Fonction pour observer tous les éléments reveal présents
    const observeAll = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        // Ne pas ré-observer un élément déjà visible
        if (!el.classList.contains("show")) {
          revealObs.observe(el);
        }
      });
    };

    // Observer les éléments déjà présents
    observeAll();

    // MutationObserver : surveille l'ajout de nouveaux noeuds dans le DOM
    // Nécessaire car Next.js peut hydrater / rendre les sections après le premier useEffect
    const mutObs = new MutationObserver(() => {
      observeAll();
    });

    mutObs.observe(document.body, {
      childList: true, // surveille l'ajout/suppression d'enfants directs
      subtree: true, // et de tous les descendants
      // un composant peut aussi ajouter .rv après coup sur un élément
      // existant (ex. la liste du Parcours en mode étapes)
      attributes: true,
      attributeFilter: ["class"],
    });

    /* ─────────────────────────────────────────────
       CLEANUP
    ───────────────────────────────────────────── */
    return () => {
      window.removeEventListener("scroll", handleNavScroll);
      window.removeEventListener("resize", handleNavScroll);
      navObs.disconnect();
      window.clearTimeout(outTimer);
      stopGlide();
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onAnchorClick);
      document.documentElement.classList.remove("fullpage", "fp-jumping");
      revealObs.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return null;
}
