export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "product",
    number: "01",
    title: "Développement produit de A à Z",
    description:
      "Cadrage, développement et intégrations (paiement, API tierces, automatisations), jusqu'à la mise en production.",
  },
  {
    id: "cto",
    number: "02",
    title: "Lead technique / CTO à temps partiel",
    description:
      "Choix de stack, architecture et priorités techniques. Si le projet grossit, possibilité de monter et piloter une petite équipe.",
  },
  {
    id: "audit",
    number: "03",
    title: "Audit & remise en état de projets existants",
    description:
      "Pour un projet en retard ou un code devenu difficile à maintenir : audit, remise à plat, et recommandations claires sur la suite.",
  },
  {
    id: "ai-ship",
    number: "04",
    title: 'Accompagnement "shipper avec l\'IA"',
    description:
      "Vous avez avancé avec Cursor, v0 ou Claude, mais la mise en production ou la sécurité bloque. Je peux prendre le relais pour finaliser.",
    featured: true,
  },
  {
    id: "mobile",
    number: "05",
    title: "Applications mobiles (React Native / Expo)",
    description:
      "React Native / Expo, de la conception jusqu'au Play Store et TestFlight, y compris certificats, builds et validation Apple/Google.",
  },
];
