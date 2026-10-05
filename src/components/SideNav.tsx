"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

const items = [
  { id: "hero", label: "Accueil" },
  { id: "services", label: "Services" },
  { id: "methode", label: "Méthode" },
  { id: "parcours", label: "Parcours" },
  { id: "tarifs", label: "Tarifs" },
  { id: "apropos", label: "À propos" },
  { id: "contact", label: "Contact" },
];

// Navigation latérale : prend le relais du menu du haut, qui s'efface dès
// qu'on quitte le haut de page. Un trait par section (orange pour la section
// courante, avec son libellé) ; les autres libellés n'apparaissent qu'au
// survol de leur trait.
export default function SideNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setVisible(window.scrollY > 24);
      const line = window.innerHeight * 0.4;
      let current = items[0].id;
      items.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      className={`side-nav${visible ? " is-visible" : ""}`}
      aria-label="Navigation par section"
      aria-hidden={!visible}
    >
      <ol className="side-nav-list">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={id === active ? "on" : undefined}
              aria-current={id === active ? "location" : undefined}
              tabIndex={visible ? undefined : -1}
            >
              <span className="side-nav-label">{label}</span>
              <span className="side-nav-tick" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
      <a
        href={CAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="side-nav-cta"
        tabIndex={visible ? undefined : -1}
      >
        <span className="side-nav-label">Prendre RDV</span>
        <span className="side-nav-cta-icon" aria-hidden="true">
          <CalendarDays size={17} strokeWidth={2} />
        </span>
      </a>
    </nav>
  );
}
