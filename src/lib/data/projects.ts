export const projects = [
  {
    id: "devisio",
    url: "https://devisio.vercel.app/",
    type: "SaaS · Freelance Tool",
    name: "Devisio — Générateur de devis PDF",
    desc: "Automatise la génération de devis pour développeurs freelance avec templates modernes et calcul automatique des TVA.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Radix UI", "Zod", "PDF Gen"],
    wide: true, // ← grid-column: span 2
    illustration: "devisio", // ← nom du composant SVG
  },
  {
    id: "orthoflow",
    url: "https://orthoflow.vercel.app/",
    type: "SaaS Medical",
    name: "Orthoflow — Cabinet d'orthodontie",
    desc: "Gestion complète de cabinet orthodontique avec planning patients et suivi des traitements.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "NextAuth"],
    wide: false,
    illustration: "orthoflow",
  },
  {
    id: "gitskreen",
    url: "https://gitskreen.vercel.app/",
    type: "DevTool",
    name: "GitSkreen — GitHub Analytics",
    desc: "Tableau de bord analytique pour repositories GitHub avec statistiques avancées et graphiques interactifs.",
    tags: ["Next.js", "GitHub API", "Chart.js", "TypeScript"],
    wide: false,
    illustration: "gitskreen",
  },
  {
    id: "seo-analyzer",
    url: "https://seo-analyzer.vercel.app/",
    type: "SEO Tool",
    name: "SEO Analyzer — Audit technique",
    desc: "Outil d'audit SEO complet avec analyse des méta-données, performance et accessibilité.",
    tags: ["Next.js", "Lighthouse", "Puppeteer", "Tailwind"],
    wide: false,
    illustration: "seo-analyzer",
  },
  {
    id: "ai-cover",
    url: "https://ai-cover.vercel.app/",
    type: "AI Tool",
    name: "AI Cover — Générateur de couvertures",
    desc: "Génération de couvertures de livres et articles avec IA et styles personnalisables.",
    tags: ["Next.js", "OpenAI API", "Vercel AI", "TypeScript"],
    wide: false,
    illustration: "ai-cover",
  },
  {
    id: "globalconverter",
    url: "https://globalconverter.vercel.app/",
    type: "FinTech",
    name: "GlobalConverter — Convertisseur de devises",
    desc: "Convertisseur de devises en temps réel avec graphiques historiques et taux API.",
    tags: ["Next.js", "Exchange API", "Chart.js", "Tailwind"],
    wide: true, // ← grid-column: span 2
    illustration: "globalconverter",
  },
  {
    id: "moviesprint",
    url: "https://moviesprint.vercel.app/",
    type: "Entertainment",
    name: "MovieSprint — Base de données films",
    desc: "Base de données complète de films avec fiches détaillées, critiques et notations.",
    tags: ["Next.js", "TMDB API", "TypeScript", "Tailwind"],
    wide: false,
    illustration: "moviesprint",
  },
];

/* Le layout bento :
 * Row 1 : DEVISIO (wide ×2) + ORTHOFLOW (×1)     = 3 cols ✓
 * Row 2 : GITSKREEN (×1) + SEO (×1) + AI (×1)    = 3 cols ✓
 * Row 3 : GLOBALCONV (wide ×2) + MOVIESPRINT (×1) = 3 cols ✓
 */
