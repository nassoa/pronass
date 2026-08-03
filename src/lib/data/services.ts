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
      "Du cadrage à la mise en production, vous n'avez qu'une seule personne à briefer et à qui demander des comptes.",
  },
  {
    id: "cto",
    number: "02",
    title: "Lead technique / CTO à temps partiel",
    description:
      "Architecture, choix de stack, priorités : je deviens le référent technique du projet, sans que vous ayez à embaucher un CTO à temps plein.",
  },
  {
    id: "audit",
    number: "03",
    title: "Audit & remise en état de projets existants",
    description:
      "Code généré par IA mal structuré, dette technique accumulée, projet repris d'un ancien freelance : j'audite, je sécurise, je remets à plat.",
  },
  {
    id: "ai-ship",
    number: "04",
    title: 'Accompagnement "shipper avec l\'IA"',
    description:
      "Vous avez déjà avancé avec Cursor, v0 ou Claude, mais vous bloquez sur la mise en prod ou la sécurité ? Je prends le relais pour finir le travail proprement.",
    featured: true,
  },
  {
    id: "integrations",
    number: "05",
    title: "Intégrations & automatisations",
    description:
      "Paiements, API tierces, automatisation de workflows métier, pour connecter votre produit au reste.",
  },
  {
    id: "mobile",
    number: "06",
    title: "Applications mobiles (React Native / Expo)",
    description:
      "De la conception jusqu'à la mise en ligne sur TestFlight et le Play Store, de bout en bout.",
  },
  {
    id: "team",
    number: "07",
    title: "Montage et supervision de petite équipe",
    description:
      "Pour les projets qui ont besoin de plusieurs profils : je monte et supervise, en restant l'interlocuteur unique.",
  },
];
