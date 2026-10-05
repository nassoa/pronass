"use client";

// logos pleins (Font Awesome via react-icons), pas les pictos au trait de lucide
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manitriniaina-safidy-nasoavina/",
    icon: FaLinkedin,
  },
  { label: "GitHub", href: "https://github.com/nassoa", icon: FaGithub },
];

export default function Nav() {
  return (
    <nav id="nav" aria-label="Navigation principale">
      <div className="w">
        <div className="nav-i">
          <ul className="nav-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#parcours">Parcours</a>
            </li>
            <li>
              <a href="#tarifs">Tarifs</a>
            </li>
            <li>
              <a href="#apropos">À propos</a>
            </li>
          </ul>
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
