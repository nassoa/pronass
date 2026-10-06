"use client";

// logos pleins (Font Awesome via react-icons), pas les pictos au trait de lucide
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useI18n } from "@/i18n/I18nProvider";
import LangSwitch from "@/components/LangSwitch";
import { sectionIds } from "@/lib/sections";
import StatusLine from "@/components/StatusLine";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manitriniaina-safidy-nasoavina/",
    icon: FaLinkedin,
  },
  { label: "GitHub", href: "https://github.com/nassoa", icon: FaGithub },
];

export default function Nav() {
  const { dict } = useI18n();
  return (
    <nav id="nav" aria-label={dict.nav.aria}>
      <div className="w">
        <div className="nav-i">
          <ul className="nav-links">
            {/* mêmes entrées que la navigation latérale, sans l'accueil
                (le menu du haut n'est visible qu'en haut de page) */}
            {sectionIds
              .filter((id) => id !== "hero")
              .map((id) => (
                <li key={id}>
                  <a href={`#${id}`}>{dict.side[id]}</a>
                </li>
              ))}
          </ul>
          {/* mobile uniquement : « Disponible · Antananarivo » */}
          <StatusLine className="nav-status" />
          <LangSwitch />
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
