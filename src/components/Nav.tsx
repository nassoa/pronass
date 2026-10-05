"use client";

import { ArrowRight } from "lucide-react";

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
          <a
            href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm"
          >
            Prendre RDV
            <span className="chip" aria-hidden="true">
              <ArrowRight size={15} strokeWidth={2.2} />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
