"use client";

import { useEffect, useState } from "react";
import { useI18n, type Locale } from "@/i18n/I18nProvider";

// Interrupteur FR / EN (menu du haut et navigation latérale).
export default function LangSwitch({
  className = "",
  hidden = false,
}: {
  className?: string;
  /** retiré de la navigation au clavier quand il n'est pas visible */
  hidden?: boolean;
}) {
  const { dict, locale, setLocale } = useI18n();
  // position affichée : bascule tout de suite au clic, sans attendre la fin
  // du fondu des textes
  const [shown, setShown] = useState<Locale>(locale);
  useEffect(() => setShown(locale), [locale]);

  const toggle = () => {
    const next = shown === "fr" ? "en" : "fr";
    setShown(next);
    setLocale(next);
  };

  return (
    <button
      type="button"
      role="switch"
      className={`nav-lang is-${shown} ${className}`}
      aria-checked={shown === "en"}
      aria-label={dict.meta.switchLabel}
      tabIndex={hidden ? -1 : undefined}
      onClick={toggle}
    >
      <span className="nav-lang-track" aria-hidden="true">
        <span className="nav-lang-knob" />
        <span className="nav-lang-opt nav-lang-fr">FR</span>
        <span className="nav-lang-opt nav-lang-en">EN</span>
      </span>
    </button>
  );
}
