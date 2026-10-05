export type Service = {
  id: "ai-ship" | "product" | "cto" | "audit" | "mobile";
  label: string;
  /** Intitulé court, pour la liste de la section sur grand écran */
  short: string;
  title: string;
  description: string;
  /** Ce qui est couvert concrètement (liste avec icônes) */
  points: string[];
  featured?: boolean;
};

// L'ordre correspond à la grille : IA (large) + Produit, puis Architecture, Audit, Mobile.
export const services: Service[] = [
  {
    id: "ai-ship",
    label: "IA & livraison",
    short: "Shipper avec l'IA",
    title: "Accompagnement « shipper avec l'IA »",
    description:
      "Vous avez avancé avec Cursor, v0 ou Claude, mais la mise en production ou la sécurité bloque. Je prends le relais pour finaliser.",
    points: [
      "Sécurité & secrets",
      "Auth & paiements",
      "Gestion des erreurs",
      "Tests essentiels",
      "CI/CD & déploiement",
      "Performance",
    ],
    featured: true,
  },
  {
    id: "product",
    label: "Parcours produit",
    short: "Produit de A à Z",
    title: "Développement produit de A à Z",
    description:
      "Cadrage, développement et intégrations (paiement, API tierces, automatisations), jusqu'à la mise en production.",
    points: [
      "Cadrage & spécifications",
      "Paiements (Stripe)",
      "API & intégrations",
      "Mise en production",
    ],
  },
  {
    id: "cto",
    label: "Architecture",
    short: "Lead technique / CTO",
    title: "Lead technique / CTO à temps partiel",
    description:
      "Choix de stack, architecture et priorités techniques. Si le projet grossit, je peux monter et piloter une petite équipe.",
    points: [
      "Choix de stack",
      "Architecture & revues de code",
      "Priorités techniques",
      "Recrutement & pilotage",
    ],
  },
  {
    id: "audit",
    label: "Audit",
    short: "Audit & remise en état",
    title: "Audit & remise en état",
    description:
      "Projet en retard ou code devenu difficile à maintenir : audit, remise à plat et recommandations claires sur la suite.",
    points: [
      "Audit du code",
      "Sécurité & performance",
      "Plan d'action priorisé",
      "Remise à plat",
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    short: "Apps React Native",
    title: "Apps React Native / Expo",
    description:
      "De la conception jusqu'au Play Store et TestFlight, certificats, builds et validation Apple / Google compris.",
    points: [
      "iOS & Android",
      "Builds EAS",
      "TestFlight & Play Store",
      "Validation Apple / Google",
    ],
  },
];
