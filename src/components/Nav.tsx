"use client";

export default function Nav() {
  return (
    <nav id="nav">
      <div className="shell nav-i">
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#experience">Parcours</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
        </ul>
        <a
          href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Prendre RDV
        </a>
      </div>
    </nav>
  );
}
