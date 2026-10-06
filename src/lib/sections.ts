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
  "parcours",
  "apropos",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
