"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

function useLocalTime() {
  // null au premier rendu pour éviter un écart d'hydratation serveur / client
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Indian/Antananarivo",
      }).format(new Date());
    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export default function Hero() {
  const time = useLocalTime();

  return (
    <section id="hero">
      <div className="hero-halo hero-halo--violet" aria-hidden="true" />
      <div className="hero-halo hero-halo--orange" aria-hidden="true" />

      <div className="w hero-layout">
        <div className="hero-content">
          <p className="hero-status">
            <span className="hero-status-badge">Disponible</span>
            <span>
              Antananarivo{time ? ` · ${time}` : ""} (UTC+3)
            </span>
          </p>

          <div className="hero-heading">
            <h1 className="hero-title">
              Safidy
              <br />
              Nasoavina
            </h1>
            <p className="hero-tagline">
              10 ans à livrer des produits qui doivent{" "}
              <strong>tenir en production.</strong>
            </p>
          </div>

          <p className="hero-sub">
            Lead technique et développeur full-stack indépendant. Du brief à la
            mise en ligne, web et mobile. Basé à Madagascar, en remote avec
            l&apos;Europe et le Canada.
          </p>

          <div className="hero-actions">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Prendre RDV · 30 min
              <span className="chip" aria-hidden="true">
                <ArrowRight size={16} strokeWidth={2.2} />
              </span>
            </a>
            <a href="#services" className="btn-ghost">
              Voir les services
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-media">
            <img
              src="/pro-nas.jpg"
              alt="Safidy Nasoavina, lead technique indépendant"
            />
          </div>
          <div className="hero-deploy" aria-hidden="true">
            <div>
              <span className="ok">✓</span> build passed
            </div>
            <div>
              <span className="ok">✓</span> deployed to <b>production</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
