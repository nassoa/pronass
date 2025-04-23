"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Orthoflow - Correcteur d'orthographe et de grammaire",
      description:
        "Application web de correction et d'optimisation de textes en français",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      link: "https://orthoflow-nine.vercel.app/",
    },
    {
      title: "SEO-Analyzer – Analyseur SEO de sites web",
      description:
        "Application web permettant d'analyser les éléments SEO de sites web et d'obtenir des recommandations concrètes pour améliorer leur référencement. Elle permet également la comparaison de plusieurs sites afin d’identifier leurs forces et faiblesses en matière de SEO.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Cheerio",
        "Chart.js",
        "Recharts",
        "PageSpeed Insights API",
      ],
      link: "https://seoanalyzer-two.vercel.app/",
    },
    {
      title: "GitSkreen - Dashboard client-side d'analyse de repositories",
      description:
        "Dashboard Next.js 100% frontend analysant les repositories GitHub via leur API, avec visualisations interactives",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Recharts",
        "Chart.js",
        "GitHub API",
      ],
      link: "https://gitskreen.vercel.app/",
    },
    {
      title: "Devisio - Générateur de devis pour Développeurs front-end",
      description:
        "Application web automatisant la génération de devis web (PDF) avec calculs dynamiques, validation type-safe et interface accessible pour freelances/professionnels",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Génération PDF",
        "Zod",
      ],
      link: "https://devisio.vercel.app/",
    },
    {
      title: "GlobalConverter - Convertisseur de Devises Universel",
      description:
        "Application web de conversion monétaire temps réel avec support des cryptomonnaies. Interface offrant des conversions instantanées entre devises traditionnelles avec gestion des préférences utilisateur.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "ExchangeRate-API",
        "Crypto-monnaies",
        "SPA",
      ],
      link: "https://globalconverter.vercel.app/",
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          isHovering={hoveredIndex !== null && hoveredIndex !== index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
}
