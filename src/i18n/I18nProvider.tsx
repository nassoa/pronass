"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import fr from "./locales/fr.json";
import en from "./locales/en.json";

/* ─────────────────────────────────────────────
   LANGUES
   Tous les textes du site sont dans locales/fr.json et locales/en.json,
   avec la même structure (TypeScript vérifie que en.json a bien toutes
   les clés de fr.json). Les composants lisent leurs textes via useI18n().
───────────────────────────────────────────────── */

export type Locale = "fr" | "en";
export type Dictionary = typeof fr;

// L'anglais complète le français : tout texte absent (ou de forme différente)
// dans en.json s'affiche en français. Le site reste utilisable pendant que la
// version anglaise est mise à jour après la version française.
function withFallback(base: unknown, override: unknown): unknown {
  if (Array.isArray(base)) {
    return Array.isArray(override) && override.length === base.length
      ? base.map((item, i) => withFallback(item, override[i]))
      : base;
  }
  if (base && typeof base === "object") {
    const over =
      override && typeof override === "object" && !Array.isArray(override)
        ? (override as Record<string, unknown>)
        : {};
    return Object.fromEntries(
      Object.entries(base).map(([key, value]) => [
        key,
        withFallback(value, over[key]),
      ]),
    );
  }
  return typeof override === typeof base ? override : base;
}

const dictionaries: Record<Locale, Dictionary> = {
  fr,
  en: withFallback(fr, en) as Dictionary,
};
const STORAGE_KEY = "lang";
// durée du fondu de sortie avant de changer les textes (cf. globals.css)
const FADE_MS = 180;

type I18nValue = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (next: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  // le rendu serveur se fait en français ; la langue enregistrée (ou celle
  // du navigateur) est appliquée au montage
  const [locale, setLocaleState] = useState<Locale>("fr");
  const timer = useRef(0);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    const initial: Locale =
      stored === "fr" || stored === "en"
        ? stored
        : navigator.language.toLowerCase().startsWith("fr")
          ? "fr"
          : "en";
    setLocaleState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Changement de langue : les textes s'effacent, changent, puis réapparaissent
  const setLocale = useCallback((next: Locale) => {
    const root = document.documentElement;
    window.clearTimeout(timer.current);
    root.classList.add("lang-anim", "lang-fading");
    timer.current = window.setTimeout(() => {
      setLocaleState(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      // laisse React afficher les nouveaux textes (encore invisibles), puis
      // les fait réapparaître ; un délai plutôt que requestAnimationFrame,
      // qui ne tourne pas quand l'onglet est en arrière-plan
      timer.current = window.setTimeout(() => {
        root.classList.remove("lang-fading");
        // fin du fondu d'entrée : les éléments retrouvent leurs transitions
        timer.current = window.setTimeout(
          () => root.classList.remove("lang-anim"),
          FADE_MS + 20,
        );
      }, 30);
    }, FADE_MS);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <I18nContext.Provider
      value={{ locale, dict: dictionaries[locale], setLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n doit être utilisé dans <I18nProvider>");
  return value;
}

// Remplace les {variables} d'un texte : format("Voir {company}", { company })
export function format(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}
