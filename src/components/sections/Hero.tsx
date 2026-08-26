"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="shell hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="hero-kicker-dot" aria-hidden="true" />
            Disponible en remote et en mission
          </p>

          <p className="hero-brand">Safidy Nasoavina</p>

          <h1 className="hero-title">
            <span className="hero-line">
              10 ans à livrer des produits qui doivent tenir en production.
            </span>
          </h1>

          <p className="hero-sub">
            Lead technique et développeur full-stack indépendant. Du brief à la
            mise en ligne. Basé à Madagascar, en remote.
          </p>

          <div className="hero-actions">
            <a
              href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Prendre RDV (30 min)
            </a>
            <a href="#services" className="btn btn-link">
              Voir les services
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" aria-hidden="true" />
          <div className="hero-media">
            <img
              src="/pro-nas.jpg"
              alt="Safidy Nasoavina, lead technique indépendant"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
