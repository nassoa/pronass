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
      "Du cadrage à la mise en production, en passant par les intégrations nécessaires — paiements, API tierces, automatisation de workflows.",
  },
  {
    id: "cto",
    number: "02",
    title: "Lead technique / CTO à temps partiel",
    description:
      "Architecture, choix de stack, priorités techniques — et, si besoin, montage et supervision d'une petite équipe autour du projet.",
  },
  {
    id: "audit",
    number: "03",
    title: "Audit & remise en état de projets existants",
    description:
      "Un projet technique qui a pris du retard, du code devenu difficile à maintenir : j'interviens pour auditer, sécuriser et remettre à plat.",
  },
  {
    id: "ai-ship",
    number: "04",
    title: 'Accompagnement "shipper avec l\'IA"',
    description:
      "Pour les porteurs de projet qui avancent avec des outils comme Cursor, v0 ou Claude, mais bloquent sur la mise en prod ou la sécurité. Je prends le relais pour finir le travail proprement.",
    featured: true,
  },
  {
    id: "mobile",
    number: "05",
    title: "Applications mobiles (React Native / Expo)",
    description:
      "De la conception jusqu'à la mise en ligne sur TestFlight et le Play Store, de bout en bout.",
  },
];
