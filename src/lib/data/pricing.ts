// Section Tarifs : le visiteur choisit sa situation, on lui indique la
// formule adaptée (maquette « Tarifs H — mix D + G, plein écran »).
export type Situation = {
  /** La situation, telle que le visiteur la formulerait */
  question: string;
  /** Formule conseillée */
  formula: string;
  /** Mode de facturation */
  billing: string;
  why: string;
  includes: string[];
};

export const situations: Situation[] = [
  {
    question: "Finaliser un prototype IA",
    formula: "Audit / mission courte",
    billing: "Forfait",
    why: "Vous avez avancé avec Cursor, v0 ou Claude. Je reprends le code, je le sécurise et je le mets en production.",
    includes: [
      "Revue du code existant",
      "Sécurité, erreurs, tests essentiels",
      "Mise en production",
    ],
  },
  {
    question: "Lancer un nouveau produit",
    formula: "Projet au forfait",
    billing: "Sur devis",
    why: "Je prends le produit du cadrage jusqu'à la mise en ligne, sur un périmètre clair.",
    includes: [
      "Cadrage et choix de stack",
      "Développement web ou mobile",
      "Intégrations et mise en production",
    ],
  },
  {
    question: "Reprendre un projet en difficulté",
    formula: "Audit / mission courte",
    billing: "Forfait",
    why: "Projet en retard ou code difficile à maintenir : un audit pour comprendre ce qui bloque, puis une remise à plat.",
    includes: [
      "Audit technique",
      "Plan de remise à plat",
      "Recommandations priorisées",
    ],
  },
  {
    question: "Avoir un CTO à temps partiel",
    formula: "Accompagnement mensuel",
    billing: "Au mois",
    why: "Je tiens le rôle de lead technique : architecture, priorités, et pilotage d'une petite équipe si besoin.",
    includes: [
      "Choix techniques et architecture",
      "Priorisation avec vous",
      "Engagement flexible",
    ],
  },
  {
    question: "Un renfort ponctuel",
    formula: "Mission ponctuelle",
    billing: "TJM",
    why: "Je rejoins votre équipe sur une période donnée, en régie, à la journée.",
    includes: [
      "Intégration rapide à votre équipe",
      "Facturation à la journée",
      "Durée selon votre besoin",
    ],
  },
];
