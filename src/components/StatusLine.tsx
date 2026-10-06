"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

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

// « Disponible · Antananarivo · heure locale » : dans le hero sur grand
// écran, dans la barre du haut sur mobile.
export default function StatusLine({ className }: { className: string }) {
  const { dict } = useI18n();
  const t = dict.hero;
  const time = useLocalTime(t.timeLocale);

  return (
    <p className={`hero-status ${className}`}>
      <span className="hero-status-badge">{t.available}</span>
      <span>
        {t.city}
        <span className="hero-time">
          {time ? ` · ${time}` : ""}
          <span className="hero-utc"> (UTC+3)</span>
        </span>
      </span>
    </p>
  );
}
