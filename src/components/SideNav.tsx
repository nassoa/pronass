"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import LangSwitch from "@/components/LangSwitch";
import { sectionIds as items } from "@/lib/sections";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

// Navigation latérale : prend le relais du menu du haut, qui s'efface dès
// qu'on quitte le haut de page. Un trait par section (orange pour la section
// courante, avec son libellé) ; les autres libellés n'apparaissent qu'au
// survol de leur trait. Sur le même bord droit : la langue en haut, le
// bouton de rendez-vous en bas.
export default function SideNav() {
  const { dict } = useI18n();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setVisible(window.scrollY > 24);
      const line = window.innerHeight * 0.4;
      let current: string = items[0];
      items.forEach((id) => {
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
    <>
      <nav
        className={`side-nav${visible ? " is-visible" : ""}`}
        aria-label={dict.side.aria}
        aria-hidden={!visible}
      >
        <ol className="side-nav-list">
          {items.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={id === active ? "on" : undefined}
                aria-current={id === active ? "location" : undefined}
                tabIndex={visible ? undefined : -1}
              >
                <span className="side-nav-label">
                  <span className="lang-text">{dict.side[id]}</span>
                </span>
                <span className="side-nav-tick" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </nav>
      {/* langue en haut à droite, dans l'alignement des traits */}
      <LangSwitch
        className={`side-lang${visible ? " is-visible" : ""}`}
        hidden={!visible}
      />
      {/* bouton de rendez-vous rond, seul en bas à droite (hors du <nav> :
          son translate ferait du bouton fixe un enfant positionné) */}
      <a
        href={CAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`side-cta${visible ? " is-visible" : ""}`}
        aria-label={dict.side.cta}
        aria-hidden={!visible}
        tabIndex={visible ? undefined : -1}
      >
        <span className="side-cta-label" aria-hidden="true">
          <span className="lang-text">{dict.side.cta}</span>
        </span>
        <span className="side-cta-icon" aria-hidden="true">
          <CalendarDays size={18} strokeWidth={2} />
        </span>
      </a>
    </>
  );
}
