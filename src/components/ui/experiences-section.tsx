"use client";

import { useState } from "react";
import { ExperienceCard } from "@/components/experience-card";

export function ExperiencesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      date: "2022 - 2024",
      title: "Développeur Front-End - Feelin / Neoshore",
      description:
        "Conception d'interfaces dynamiques avec React.js, couplées à GraphQL pour une communication front-end/backend fluide (requêtes, mutations). Gestion d'état optimisée via Redux et GraphQL, assurant une synchronisation fiable des données. Performance renforcée par chargement différé, mise en cache et réduction des temps de chargement, pour une UX réactive. Engagement sur l'accessibilité, garantissant une application inclusive conforme aux normes en vigueur.",
      tags: [
        "React.js",
        "TypeScript",
        "Redux",
        "GraphQL (Apollo)",
        "Material UI",
        "Webpack",
        "React Hook Form",
        "React Router",
        "Jest",
        "Git",
        "CI/CD",
      ],
      link: "https://neoshore.eu/",
    },
    {
      date: "2021 - 2022",
      title: "Développeur Front-End - CtrlWeb",
      description:
        "En tant que Développeur Front-End chez Ctrlweb, j'ai conçu et intégré des interfaces responsive et optimisées pour le SEO, en utilisant WordPress et les solutions web internes de l'agence. Collaboration étroite avec les équipes transverses (design, back-end) et respect des bonnes pratiques (HTML5 sémantique, Sass modulaire, JavaScript ES6+) en environnement agile",
      tags: [
        "HTML5/CSS3",
        "Front-End",
        "Responsive Design",
        "WordPress",
        "CtrlWeb Solutions",
        "SEO",
        "Accessibilité",
        "Git",
      ],
      link: "https://ctrlweb.ca/",
    },
    {
      date: "2017 - 2021",
      title: "Développeur Front-End - Freelance",
      description:
        "Intégration de maquettes responsive et mobile-first, en respectant les standards web. Développement d'applications React.js/Redux avec Gatsby.js pour des solutions performantes (JAMstack) et SEO-friendly, incluant la création de blogs dynamiques via GraphQL. Expertise en optimisation technique et accessibilité, alignée aux besoins clients pour des livrables sur mesure.",
      tags: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Sass/CSS3",
        "Redux",
        "GraphQL",
        "Gatsby.js",
        "JAMstack",
        "Git",
      ],
      link: "#",
    },
    {
      date: "2016 - 2017",
      title: "Développeur Front-End - Medialibs",
      description:
        "Conception et développement de sites web sous WordPress et solutions CMS sur mesure (medialibs), avec intégration front-end en HTML/CSS/JS/jQuery. Maintenance technique, optimisation continue et garantie de bon fonctionnement des plateformes",
      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "PHP",
        "WordPress",
        "Responsive Design",
        "Medialibs Solutions",
        "Webo-facto",
      ],
      link: "https://www.medialibs.com/",
    },
  ];

  return (
    <div>
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          {...exp}
          isHovering={hoveredIndex !== null && hoveredIndex !== index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
}
