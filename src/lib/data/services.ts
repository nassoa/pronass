export type Service = {
  id: "ai-ship" | "product" | "cto" | "audit" | "mobile";
  label: string;
  title: string;
  description: string;
  featured?: boolean;
};

// L'ordre correspond à la grille : IA (large) + Produit, puis Architecture, Audit, Mobile.
export const services: Service[] = [
  {
    id: "ai-ship",
    label: "IA & livraison",
    title: "Accompagnement « shipper avec l'IA »",
    description:
      "Vous avez avancé avec Cursor, v0 ou Claude, mais la mise en production ou la sécurité bloque. Je prends le relais pour finaliser.",
    featured: true,
  },
  {
    id: "product",
    label: "Parcours produit",
    title: "Développement produit de A à Z",
    description:
      "Cadrage, développement et intégrations (paiement, API tierces, automatisations), jusqu'à la mise en production.",
  },
  {
    id: "cto",
    label: "Architecture",
    title: "Lead technique / CTO à temps partiel",
    description:
      "Choix de stack, architecture et priorités techniques. Si le projet grossit, je peux monter et piloter une petite équipe.",
  },
  {
    id: "audit",
    label: "Audit",
    title: "Audit & remise en état",
    description:
      "Projet en retard ou code devenu difficile à maintenir : audit, remise à plat et recommandations claires sur la suite.",
  },
  {
    id: "mobile",
    label: "Mobile",
    title: "Apps React Native / Expo",
    description:
      "De la conception jusqu'au Play Store et TestFlight, certificats, builds et validation Apple / Google compris.",
  },
];

export const aiShipChecks = [
  "Sécurité & secrets",
  "Auth & paiements",
  "Gestion des erreurs",
  "Tests essentiels",
  "CI/CD & déploiement",
  "Performance",
];
