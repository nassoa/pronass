export const pricingOptions = [
  {
    id: "discovery",
    title: "Prise de RDV",
    description:
      "30 min, pour comprendre le besoin et voir si on est faits pour travailler ensemble.",
    tag: "Gratuit",
  },
  {
    id: "audit",
    title: "Audit / mission courte",
    description: "Forfait fixe, défini après le cadrage.",
    tag: "Forfait",
  },
  {
    id: "monthly",
    title: "Accompagnement mensuel",
    description:
      "Lead technique / CTO partiel, forfait mensuel, engagement flexible.",
    tag: "Mensuel",
  },
  {
    id: "project",
    title: "Projet au forfait",
    description: "Développement complet d'un produit, devis sur mesure.",
    tag: "Sur mesure",
  },
  {
    id: "daily",
    title: "Mission ponctuelle",
    description: "TJM sur demande.",
    tag: "TJM",
  },
] as const;
