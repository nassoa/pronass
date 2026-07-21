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
      nav?.classList.toggle("on", window.scrollY > 30);
    };
    window.addEventListener("scroll", handleNavScroll, { passive: true });

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
      navObs.disconnect();
      revealObs.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return null;
}
