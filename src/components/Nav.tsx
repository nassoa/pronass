"use client";

// logos pleins (Font Awesome via react-icons), pas les pictos au trait de lucide
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useI18n, type Locale } from "@/i18n/I18nProvider";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manitriniaina-safidy-nasoavina/",
    icon: FaLinkedin,
  },
  { label: "GitHub", href: "https://github.com/nassoa", icon: FaGithub },
];

export default function Nav() {
  const { dict, locale, setLocale } = useI18n();
  // position affichée de l'interrupteur : bascule tout de suite au clic,
  // sans attendre la fin du fondu des textes
  const [shown, setShown] = useState<Locale>(locale);
  useEffect(() => setShown(locale), [locale]);
  const toggle = () => {
    const next = shown === "fr" ? "en" : "fr";
    setShown(next);
    setLocale(next);
  };
  return (
    <nav id="nav" aria-label={dict.nav.aria}>
      <div className="w">
        <div className="nav-i">
          <ul className="nav-links">
            <li>
              <a href="#services">{dict.nav.services}</a>
            </li>
            <li>
              <a href="#formules">{dict.nav.formules}</a>
            </li>
            <li>
              <a href="#partenariats">{dict.nav.partenariats}</a>
            </li>
            <li>
              <a href="#apropos">{dict.nav.apropos}</a>
            </li>
          </ul>
          <button
            type="button"
            role="switch"
            className={`nav-lang is-${shown}`}
            aria-checked={shown === "en"}
            aria-label={dict.meta.switchLabel}
            onClick={toggle}
          >
            <span className="nav-lang-track" aria-hidden="true">
              <span className="nav-lang-knob" />
              <span className="nav-lang-opt nav-lang-fr">FR</span>
              <span className="nav-lang-opt nav-lang-en">EN</span>
            </span>
          </button>
          <ul className="nav-social">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={19} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
