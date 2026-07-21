# Guide d'implémentation — Nouveau Portfolio

## Safidy Nasoavina · React/Next.js · v14

---

## 1. CONTEXTE

Ce guide permet de migrer ton portfolio existant (`pronass.vercel.app`)
vers le nouveau design élaboré dans ce prototype HTML (`portfolio-v14.html`).

Le prototype est un **fichier HTML standalone** qui contient :

- Toute la CSS (design tokens, layout, composants, animations)
- Toute la structure HTML (7 sections)
- Les photos encodées en base64
- Les illustrations SVG inline

L'objectif est de **transposer** ce design dans ton stack Next.js existant.

---

## 2. STACK CIBLE

```
Next.js (App Router)
TypeScript
Tailwind CSS (optionnel — on peut utiliser CSS Modules ou CSS global)
Framer Motion (pour les animations scroll reveal)
```

---

## 3. POLICES — SETUP PRIORITAIRE

Les polices sont sur **Fontshare** (gratuit, pas Google Fonts).

### `app/layout.tsx`

```tsx
// Ajouter dans le <head> via next/head ou directement dans layout
// Fontshare ne supporte pas encore next/font — utiliser une balise <link>

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Cabinet Grotesk — headlines, display */}
        {/* Satoshi — body text */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@300,400,500,600,700,800,900&f[]=satoshi@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* DM Mono — code, labels, monospace */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### `tailwind.config.ts` (si tu utilises Tailwind)

```ts
export default {
  theme: {
    extend: {
      fontFamily: {
        display: ["Cabinet Grotesk", "system-ui", "sans-serif"],
        sans: ["Satoshi", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
};
```

---

## 4. DESIGN TOKENS — CSS VARIABLES

Créer un fichier `app/globals.css` (ou `styles/globals.css`) :

```css
/* ═══════════════════════════════════════════════
   DESIGN TOKENS — Palette violet + cyan profond
   Inspiré : Arc Browser, Raycast, IBM Design 2026
═══════════════════════════════════════════════ */
:root {
  /* ── Surfaces (light theme) ── */
  --bg: #f5f3fc; /* fond page — off-white violacé */
  --s1: #ffffff; /* blanc pur — surfaces */
  --s2: #eee8f8; /* cards — violet pâle */
  --s3: #e4dcf5; /* hover state */

  /* ── Borders ── */
  --border: rgba(116, 54, 216, 0.1);
  --border-2: rgba(116, 54, 216, 0.18);

  /* ── Text ── */
  --t1: #0f172a; /* slate-900 — texte principal */
  --t2: #475569; /* slate-600 — secondaire */
  --t3: #94a3b8; /* slate-400 — tertiaire */

  /* ── Accent principal — Violet ── */
  --a: #7436d8; /* hue 263°, contraste 5.9:1 */
  --a2: #5c28b0; /* violet foncé pour textes */
  --a-bg: rgba(116, 54, 216, 0.07);

  /* ── Second accent — Cyan profond (Stripe/IBM style) ── */
  --teal: #0e7490; /* hue 193°, contraste 4.9:1 */
  --teal-dk: #0a5568;
  --teal-bg: rgba(14, 116, 144, 0.07);

  /* ── Semantic ── */
  --green: #16a34a;

  /* ── Typography ── */
  --display: "Cabinet Grotesk", system-ui, sans-serif;
  --sans: "Satoshi", system-ui, sans-serif;
  --mono: "DM Mono", monospace;

  /* ── Spacing ── */
  --nav-h: 62px;
  --max: 1160px;
  --r: 14px;
  --r-sm: 9px;

  /* ── Motion ── */
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## 5. STRUCTURE DES COMPOSANTS

Découper le prototype en composants Next.js :

```
app/
├── layout.tsx          ← fonts + metadata + cursor global
├── page.tsx            ← assemblage des sections
├── globals.css         ← tokens + reset + animations globales
│
components/
├── Nav.tsx             ← sticky nav + progress bar scroll
├── sections/
│   ├── Hero.tsx        ← headline + photo cercle + chips + marquee
│   ├── Work.tsx        ← bento grid + 7 project cards
│   ├── Skills.tsx      ← 3 colonnes avec dots de niveau
│   ├── Experience.tsx  ← timeline avec badges agences
│   ├── About.tsx       ← photo + bio + beliefs
│   └── Contact.tsx     ← CTA + liens sociaux
├── ui/
│   ├── ProjectCard.tsx ← card bento réutilisable
│   ├── AgencyBadge.tsx ← monogramme agence
│   ├── ScrollReveal.tsx← wrapper Framer Motion
│   └── Cursor.tsx      ← curseur custom
│
lib/
├── data/
│   ├── projects.ts     ← données des 7 projets
│   ├── skills.ts       ← données des 3 colonnes skills
│   └── experience.ts   ← données timeline
```

---

## 6. ANIMATIONS — SCROLL REVEAL

Utiliser **Framer Motion** (déjà dans ton stack) :

### `components/ui/ScrollReveal.tsx`

```tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Variant = "up" | "left" | "scale";

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}

// Variantes d'animation correspondant aux classes .rv, .rv-left, .rv-scale du prototype
const variants = {
  up: { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -22 }, visible: { opacity: 1, x: 0 } },
  scale: {
    hidden: { opacity: 0, y: 18, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className,
}: Props) {
  const ref = useRef(null);
  // Se déclenche quand 10% de l'élément est visible, avec marge négative en bas
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -40px 0px",
    amount: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1], // --ease du prototype
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
```

### Utilisation dans les sections :

```tsx
// Section labels → slide depuis la gauche
<ScrollReveal variant="left">
  <p className="sec-label">Selected work</p>
</ScrollReveal>;

// Project cards → scale-in avec stagger
{
  projects.map((p, i) => (
    <ScrollReveal key={p.id} variant="scale" delay={i * 0.08}>
      <ProjectCard {...p} />
    </ScrollReveal>
  ));
}

// Skill items → stagger séquentiel
{
  skills.map((s, i) => (
    <ScrollReveal key={s.name} variant="left" delay={0.1 + i * 0.08}>
      <SkillItem {...s} />
    </ScrollReveal>
  ));
}
```

---

## 7. HERO — GRADIENT DE FOND

Le fond du hero est un **5-layer radial gradient** extrait des couleurs de ta photo studio :

```css
/* Dans le composant Hero ou globals.css */
.hero-section {
  /* 
   * Couche 1 : Blanc fort côté photo (droite) — laisse la photo respirer
   * Couche 2 : Violet glow côté texte (gauche) — profondeur derrière le contenu
   * Couche 3 : Cyan note (coin bas-gauche) — second accent très subtil
   * Couche 4 : Violet doux (haut-centre) — texture supplémentaire
   * Couche 5 : Linear base off-white violacé
   *
   * Logique : la photo a un éclairage studio bleu-violet à gauche (hue ~233°)
   * Ces gradients miroirs ce glow → continuité visuelle entre photo et site
   */
  background:
    radial-gradient(
      ellipse 65% 110% at 88% 50%,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 255, 255, 0.5) 45%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 80% 100% at 10% 40%,
      rgba(116, 54, 216, 0.16) 0%,
      rgba(116, 54, 216, 0.06) 50%,
      transparent 72%
    ),
    radial-gradient(
      ellipse 55% 70% at 0% 100%,
      rgba(14, 116, 144, 0.1) 0%,
      rgba(14, 116, 144, 0.03) 50%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 60% 80% at 45% 0%,
      rgba(116, 54, 216, 0.06) 0%,
      transparent 60%
    ),
    linear-gradient(
      150deg,
      #ede8fa 0%,
      #f0ecfb 20%,
      #f5f3fc 50%,
      #f8f7fd 75%,
      #fafafe 100%
    );
}
```

---

## 8. PHOTO EN CERCLE — HERO

```tsx
/* components/sections/Hero.tsx */

// La photo doit être placée dans un conteneur cercle avec rings animés
// Les rings : ring-1 et ring-3 en violet, ring-2 en cyan (--teal)

<div className="hero-circle-outer">
  {/* Ring 3 — le plus large, violet, animation lente */}
  <div className="ring ring-3" />
  {/* Ring 2 — milieu, CYAN (le seul élément cyan du hero) */}
  <div className="ring ring-2" />
  {/* Ring 1 — intérieur, violet */}
  <div className="ring ring-1" />

  {/* Photo principale */}
  <div className="hero-circle">
    <Image
      src="/images/profile.jpg"   {/* ← ton chemin local */}
      alt="Safidy Nasoavina"
      fill
      style={{
        objectFit: 'cover',
        objectPosition: 'center 18%',
        transform: 'scale(1.45)',
        transformOrigin: 'center 25%',
      }}
      priority
    />
  </div>

  {/* Floating stat chips */}
  <div className="hero-chip chip-1">
    <span className="chip-num">8<span className="accent">+</span></span>
    <span className="chip-label">Ans d'exp.</span>
  </div>
  <div className="hero-chip chip-2">
    <span className="chip-num">7<span className="accent">+</span></span>
    <span className="chip-label">Projets livrés</span>
  </div>
  <div className="hero-chip chip-3">
    <span className="chip-num"><span className="accent">3</span></span>
    <span className="chip-label">Entreprises intl.</span>
  </div>
</div>
```

---

## 9. BENTO GRID — PROJETS

```tsx
/* lib/data/projects.ts */

export const projects = [
  {
    id: "devisio",
    url: "https://devisio.vercel.app/",
    type: "SaaS · Freelance Tool",
    name: "Devisio — Générateur de devis PDF",
    desc: "Automatise la génération de devis pour développeurs freelance...",
    tags: ["Next.js", "TypeScript", "Tailwind", "Radix UI", "Zod", "PDF Gen"],
    wide: true, // ← grid-column: span 2
    illustration: "devisio", // ← nom du composant SVG
  },
  // ... 6 autres projets
];

/* Le layout bento :
 * Row 1 : DEVISIO (wide ×2) + ORTHOFLOW (×1)     = 3 cols ✓
 * Row 2 : GITSKREEN (×1) + SEO (×1) + AI (×1)    = 3 cols ✓
 * Row 3 : GLOBALCONV (wide ×2) + MOVIESPRINT (×1) = 3 cols ✓
 */
```

```tsx
/* components/sections/Work.tsx */
<div className="bento-grid">
  {projects.map((project) => (
    <ProjectCard
      key={project.id}
      {...project}
      className={project.wide ? "col-span-2" : ""}
    />
  ))}
</div>
```

### CSS du bento :

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

/* Toutes les images à la même hauteur */
.pc-img {
  height: 180px;
} /* cartes normales */
.pc--wide .pc-img {
  height: 200px;
} /* cartes wide */

/* Grayscale par défaut → couleur au hover */
.pc-img-inner {
  position: absolute;
  inset: 0;
  filter: grayscale(100%) opacity(0.45);
  transition: filter 0.4s var(--ease);
}
.pc:hover .pc-img-inner {
  filter: grayscale(0%) opacity(1);
}
```

---

## 10. ILLUSTRATIONS SVG — THÈMES PAR PROJET

Chaque illustration a ses propres couleurs indépendantes du thème global :

| Projet          | Fond                  | Couleurs clés                                     |
| --------------- | --------------------- | ------------------------------------------------- |
| Devisio         | `#FDFAF4` parchment   | Vert forêt `#2D6A4F`                              |
| Orthoflow       | `#FEFEFE` blanc       | Rouge erreur `#DC2626`, Bleu correction `#2563EB` |
| GitSkreen       | `#0D1117` GitHub dark | Vert `#39D353` → `#0E4429`                        |
| SEO Analyzer    | `#FAFAFA`             | Vert `#16A34A`, Bleu `#0284C7`, Rouge `#EF4444`   |
| AI Cover        | `#0F0A1E` dark LLM    | Violet `#7C3AED`, Cyan `#67E8F9`                  |
| GlobalConverter | `#FFFFFF`             | Vert hausse `#16A34A`, Rouge baisse `#DC2626`     |
| MovieSprint     | `#141414` cinéma      | Or IMDb `#F5C518`, Rouge `#E50914`                |

**Important :** Extraire chaque SVG du prototype HTML et en faire un composant React :

```tsx
/* components/illustrations/GitSkreenIllustration.tsx */
export function GitSkreenIllustration() {
  return (
    <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Copier le SVG depuis le prototype portfolio-v14.html */}
      {/* Section : gitskreen.vercel.app → <svg viewBox... */}
    </svg>
  );
}
```

---

## 11. SECTION EXPÉRIENCE — BADGES AGENCES

```tsx
/* lib/data/experience.ts */

export const experiences = [
  {
    company: "Fluentech",
    initials: "FT",
    badgeBg: "#1B3B8A", // bleu corporate extrait du site
    badgeColor: "#FFFFFF",
    url: "https://www.fluentech-group.com/",
    period: "2025 — Présent",
    role: "Développeur Front-End Senior",
    description: "...",
    tags: ["Next.js", "TypeScript", "Tailwind", "Storybook"],
  },
  {
    company: "Neoshore",
    initials: "NS",
    badgeBg: "#003087", // bleu marine
    badgeColor: "#FFFFFF",
    url: "https://neoshore.eu/",
    period: "2022 — 2025",
    // ...
  },
  {
    company: "CtrlWeb",
    initials: "CW",
    badgeBg: "#1A1A1A", // charcoal
    badgeColor: "#FFFFFF",
    url: "https://ctrlweb.ca/",
    period: "2021 — 2022",
    // ...
  },
  {
    company: "Freelance",
    initials: "FR",
    badgeBg: "#7436D8", // violet = notre accent
    badgeColor: "#FFFFFF",
    url: null,
    period: "2017 — 2021",
    // ...
  },
  {
    company: "Medialibs",
    initials: "ML",
    badgeBg: "#1E5FA8", // bleu Medialibs
    badgeColor: "#FFFFFF",
    url: "https://www.medialibs.com/",
    period: "2016 — 2017",
    // ...
  },
];
```

```tsx
/* components/ui/AgencyBadge.tsx */
interface Props {
  initials: string
  bg: string
  color: string
}

export function AgencyBadge({ initials, bg, color }: Props) {
  return (
    <div
      className="agency-badge"
      style={{ backgroundColor: bg, color }}
    >
      {initials}
    </div>
  )
}

/* CSS */
.agency-badge {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--display);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: -0.02em;
  flex-shrink: 0;
}
```

---

## 12. CURSEUR CUSTOM

```tsx
/* components/ui/Cursor.tsx */
"use client";
import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cx = 0,
      cy = 0,
      rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = cx + "px";
        dotRef.current.style.top = cy + "px";
      }
    };

    // Ring avec lag physique (lerp 0.11)
    const loop = () => {
      rx += (cx - rx) * 0.11;
      ry += (cy - ry) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(loop);

    // Agrandir le ring sur les éléments interactifs
    const hoverEls = document.querySelectorAll(
      "a, button, .pc, .belief, .sk-item",
    );
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        ringRef.current?.classList.add("lg"),
      );
      el.addEventListener("mouseleave", () =>
        ringRef.current?.classList.remove("lg"),
      );
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot — suit la souris instantanément */}
      <div ref={dotRef} className="cursor-dot" />
      {/* Ring — suit avec lag (lerp) */}
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
```

```css
/* Masquer le curseur natif */
body {
  cursor: none;
}
a,
button {
  cursor: none;
}

.cursor-dot {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  width: 7px;
  height: 7px;
  background: var(--a); /* violet */
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.cursor-ring {
  position: fixed;
  z-index: 9998;
  pointer-events: none;
  width: 30px;
  height: 30px;
  border: 1.5px solid rgba(116, 54, 216, 0.3); /* violet transparent */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.3s var(--ease),
    height 0.3s var(--ease),
    border-color 0.2s;
}

.cursor-ring.lg {
  width: 54px;
  height: 54px;
  border-color: rgba(116, 54, 216, 0.12);
}
```

---

## 13. GRAIN TEXTURE

Le grain subtil (2.5% opacité) qui empêche l'aspect "généré par IA" :

```css
/* Ajouter dans globals.css */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 999;
  pointer-events: none;
  opacity: 0.025;
  /* SVG feTurbulence inline — pas de dépendance externe */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}
```

---

## 14. FICHIER DE RÉFÉRENCE

Le fichier **`portfolio-v14.html`** est ta **source de vérité** :

- Tous les textes finaux y sont
- Toutes les illustrations SVG y sont (chercher l'URL du projet dans le HTML)
- Toutes les valeurs CSS exactes y sont
- La photo y est encodée en base64 (à remplacer par `public/images/profile.jpg`)

Pour extraire un SVG :

1. Ouvrir `portfolio-v14.html` dans un éditeur
2. `Ctrl+F` → chercher l'URL du projet (ex: `gitskreen.vercel.app`)
3. Copier le bloc `<svg viewBox=...>...</svg>` qui suit

---

## 15. ORDRE D'IMPLÉMENTATION RECOMMANDÉ

```
1. globals.css     → tokens, reset, grain
2. fonts           → layout.tsx
3. Nav             → sticky + progress
4. Hero            → gradient + cercle photo + marquee
5. Work            → bento grid + cards (sans SVG d'abord)
6. SVG illustrations → une par une, tester le grayscale hover
7. Skills          → colonnes + dots
8. Experience      → badges agences
9. About           → photo + beliefs
10. Contact        → CTA + liens
11. Cursor         → en dernier (pas critique)
12. Animations     → ScrollReveal wrapping
```

---

## PROMPT CURSOR/WINDSURF/COPILOT

Copier-coller ce prompt dans ton IDE :

```
Tu es un expert Next.js/TypeScript/TailwindCSS.

Je veux implémenter un nouveau design de portfolio dans mon projet Next.js existant
(App Router). J'ai un fichier de référence HTML (portfolio-v14.html) qui contient
le design final complet en HTML/CSS vanilla.

CONTRAINTES :
- Garder le App Router Next.js existant
- Utiliser CSS Modules OU Tailwind selon ce qui est déjà en place
- Framer Motion pour les animations scroll reveal
- next/image pour toutes les images
- Les polices via <link> dans layout.tsx (Fontshare CDN — Cabinet Grotesk + Satoshi + DM Mono Google Fonts)
- Pas de librairie UI externe (Radix, shadcn) pour les composants visuels purs

PALETTE (CSS variables à créer dans globals.css) :
- --a: #7436D8 (violet accent)
- --teal: #0E7490 (cyan second accent)
- --bg: #F5F3FC (fond)
- --t1: #0F172A / --t2: #475569 / --t3: #94A3B8 (textes)

TÂCHE 1 — Setup :
Créer globals.css avec tous les tokens CSS du prototype.
Mettre à jour layout.tsx avec les fonts.

TÂCHE 2 — Composants :
Créer les composants suivants en TypeScript avec leurs styles :
Nav, Hero, Work (bento grid), Skills, Experience (avec badges agences), About, Contact.

TÂCHE 3 — Données :
Créer lib/data/projects.ts, lib/data/experience.ts, lib/data/skills.ts
avec toutes les données des sections.

TÂCHE 4 — Illustrations SVG :
Pour chaque project card, créer un composant SVG dans components/illustrations/.
Les SVGs ont leurs propres couleurs thématiques indépendantes du thème global.
Appliquer filter: grayscale(100%) opacity(.45) par défaut et grayscale(0%) au hover.

TÂCHE 5 — Animations :
Créer ScrollReveal.tsx avec Framer Motion.
Variantes : 'up' (translateY), 'left' (translateX), 'scale' (scale + translateY).
Se déclenche quand 10% de l'élément est visible.

RÉFÉRENCE COMPLÈTE : voir le fichier portfolio-v14.html pour tous les détails.
```
