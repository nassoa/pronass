// Sections de la page, dans l'ordre d'affichage. Source unique pour le menu
// du haut et la navigation latérale : leurs libellés sont dans les fichiers
// de langue (side.<id>), donc les deux menus affichent toujours les mêmes
// entrées, dans le même ordre.
export const sectionIds = [
  "hero",
  "services",
  "methode",
  "formules",
  "partenariats",
  "apropos",
  "parcours",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

// Ancre affichée dans l'URL pour chaque section, selon la langue de la page
// (les id du DOM restent ceux du français). L'accueil n'a pas d'ancre.
const slugs: Record<"fr" | "en", Record<SectionId, string>> = {
  fr: {
    hero: "",
    services: "services",
    methode: "methode",
    formules: "formules",
    partenariats: "partenariats",
    apropos: "apropos",
    parcours: "parcours",
    contact: "contact",
  },
  en: {
    hero: "",
    services: "services",
    methode: "approach",
    formules: "engagements",
    partenariats: "partnerships",
    apropos: "about",
    parcours: "background",
    contact: "contact",
  },
};

export function sectionHash(id: string, lang: string): string {
  const table = slugs[lang === "en" ? "en" : "fr"];
  const slug = table[id as SectionId];
  return slug ? `#${slug}` : "";
}

// Section correspondant à une ancre, quelle que soit sa langue
// (« #about » comme « #apropos » mènent à À propos).
export function sectionFromHash(hash: string): SectionId | null {
  const slug = decodeURIComponent(hash.replace(/^#/, ""));
  if (!slug) return null;
  for (const table of Object.values(slugs)) {
    const id = (Object.keys(table) as SectionId[]).find((k) => table[k] === slug);
    if (id) return id;
  }
  return null;
}
