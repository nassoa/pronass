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
       entier. Grand écran uniquement ; sur mobile et si
       les animations sont désactivées, scroll classique.
    ───────────────────────────────────────────── */
    const blocks = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );
    const fullpage = window.matchMedia(
      "(min-width: 900px) and (hover: hover) and (prefers-reduced-motion: no-preference)",
    ).matches;
    document.documentElement.classList.add("fullpage");

    const OUT_MS = 320; // durée du fondu de sortie (cf. globals.css)
    const LOCK_MS = 900; // pas de nouveau changement avant ce délai
    const GESTURE_GAP_MS = 220; // pause qui sépare deux gestes de scroll
    const EDGE_PX = 24; // un reste plus petit compte comme « au bord »
    let busy = false;
    let lockedUntil = 0;
    let lastWheel = 0;
    let gestureFromEdge = false;
    let outTimer = 0;

    const jumpTo = (top: number) =>
      window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
    const topOf = (el: HTMLElement) =>
      el.getBoundingClientRect().top + window.scrollY;
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
        delete from.dataset.fp;
        const top = topOf(to); // mesuré avant le décalage d'entrée
        jumpTo(dir > 0 ? top : top + to.offsetHeight - window.innerHeight);
        to.dataset.fp = dir > 0 ? "enter-down" : "enter-up";
        to.getBoundingClientRect(); // applique l'état de départ avant le fondu
        outTimer = window.setTimeout(() => {
          delete to.dataset.fp;
          busy = false;
          lockedUntil = performance.now() + LOCK_MS - OUT_MS;
        }, 20);
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
      if (step(delta)) goToSection(currentIndex() + dir, dir);
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

    if (fullpage) {
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
    });

    /* ─────────────────────────────────────────────
       CLEANUP
    ───────────────────────────────────────────── */
    return () => {
      window.removeEventListener("scroll", handleNavScroll);
      window.removeEventListener("resize", handleNavScroll);
      navObs.disconnect();
      window.clearTimeout(outTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onAnchorClick);
      document.documentElement.classList.remove("fullpage");
      revealObs.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return null;
}
