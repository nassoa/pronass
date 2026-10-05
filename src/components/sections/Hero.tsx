"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

function useLocalTime(locale: string) {
  // null au premier rendu pour éviter un écart d'hydratation serveur / client
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Indian/Antananarivo",
      }).format(new Date());
    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, [locale]);

  return time;
}

export default function Hero() {
  const { dict } = useI18n();
  const t = dict.hero;
  const time = useLocalTime(t.timeLocale);

  return (
    <section id="hero">
      <div className="hero-halo hero-halo--violet" aria-hidden="true" />
      <div className="hero-halo hero-halo--orange" aria-hidden="true" />

      <div className="w hero-layout">
        <div className="hero-content">
          <p className="hero-status">
            <span className="hero-status-badge">{t.available}</span>
            <span>
              {t.city}
              <span className="hero-time">
                {time ? ` · ${time}` : ""}
                <span className="hero-utc"> (UTC+3)</span>
              </span>
            </span>
          </p>

          <div className="hero-heading">
            <h1 className="hero-title">
              Safidy
              <br />
              Nasoavina
            </h1>
            <p className="hero-tagline">
              {t.promise}
            </p>
          </div>

          <p className="hero-sub">
            {t.sub}
          </p>

          <div className="hero-actions">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span className="btn-label">{t.cta}</span>
              <span className="chip" aria-hidden="true">
                <ArrowRight size={16} strokeWidth={2.2} />
              </span>
            </a>
            <a href="#services" className="btn-ghost">
              <span className="btn-label">{t.secondary}</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-media">
            <img
              src="/pro-nas.jpg"
              alt={t.photoAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
