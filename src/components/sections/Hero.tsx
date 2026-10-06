"use client";

import { CornerDownLeft } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import StatusLine from "@/components/StatusLine";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

export default function Hero() {
  const { dict } = useI18n();
  const t = dict.hero;

  return (
    <section id="hero">
      <div className="hero-halo hero-halo--violet" aria-hidden="true" />
      <div className="hero-halo hero-halo--orange" aria-hidden="true" />

      <div className="w hero-layout">
        <div className="hero-content">
          {/* sur mobile, cette ligne est dans la barre du haut (Nav) */}
          <StatusLine className="hero-status--desktop" />

          <div className="hero-heading">
            <h1 className="hero-title">
              Safidy
              <br />
              Nasoavina
            </h1>
            <p className="hero-tagline">{t.promise}</p>
          </div>

          <p className="hero-sub">{t.sub}</p>

          <div className="hero-actions">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span className="btn-label">{t.cta}</span>
              <kbd className="btn-key" aria-hidden="true">
                <CornerDownLeft size={15} strokeWidth={2.8} />
              </kbd>
            </a>
            <a href="#services" className="btn-ghost">
              <span className="btn-label">{t.secondary}</span>
            </a>
          </div>
        </div>

        <div className="hero-visual photo-guides">
          <div className="hero-media">
            <img src="/pro-nas.jpg" alt={t.photoAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}
