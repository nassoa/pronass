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
// qu'on quitte le haut de page. Un trait par section, le libellé de la
// section courante reste visible, les autres apparaissent au survol.
export default function SideNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("hero");
  // Après un clic, on replie les libellés tout de suite (le survol les
  // gardait affichés) ; ils pourront réapparaître une fois la souris sortie.
  const [collapsed, setCollapsed] = useState(false);

  const onItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setCollapsed(true);
    // clic souris : on retire le focus pour que :focus-within ne les réaffiche pas
    if (event.detail > 0) event.currentTarget.blur();
  };

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
      className={`side-nav${visible ? " is-visible" : ""}${
        collapsed ? " is-collapsed" : ""
      }`}
      aria-label="Navigation par section"
      onMouseLeave={() => setCollapsed(false)}
      aria-hidden={!visible}
    >
      <ol className="side-nav-list">
        {items.map(({ id, label }, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={id === active ? "on" : undefined}
              aria-current={id === active ? "location" : undefined}
              tabIndex={visible ? undefined : -1}
              onClick={onItemClick}
            >
              <span className="side-nav-label">
                <span className="side-nav-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </span>
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
