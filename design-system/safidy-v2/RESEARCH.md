# Recherche UI UX Pro Max — Safidy Nasoavina V2

> Généré après recherche multi-domaine (style, color, typography, landing, product, ux, nextjs, gsap, icons, google-fonts).
> Les sorties brutes du skill sont filtrées : Inter / violet IA / grille de cards SaaS générique = exclus.

## Brief produit

| Critère | Décision |
|---------|----------|
| Type | B2B Service / consulting technique |
| Audience | Porteurs de projet, fondateurs, équipes qui cherchent un lead technique |
| Objectif | Conversion vers appel de cadrage (Cal.com) |
| Preuve | Timeline d'expérience (Fluentech → Medialibs) — pas de portfolio projets |
| Tone | Autorité calme, responsabilité, clarté |

## Synthèse des recherches

### Product (`freelance consultant` / `B2B Service`)
- Style primaire : **Trust & Authority + Minimal**
- Pattern landing : Feature-Rich Showcase *ou* Trust & Authority + Conversion
- Palette focus : professional blue + neutral grey

### Styles retenus (après filtrage)
| Rang | Style | Pourquoi |
|------|-------|----------|
| 1 | **Swiss Modernism 2.0** | Grid strict, un seul accent, hiérarchie claire — corporate / services pro |
| 2 | **Exaggerated Minimalism** | Typo oversized, whitespace extrême — différenciation vs templates SaaS |
| 3 | **Minimal & Direct** | Landing consulting, 1 CTA, max white space |
| ❌ | Soft UI / Bento / Glass / AI Purple | Trop template / trop produit / anti-pattern skill |

### Landing pattern retenu
**Trust & Authority + Conversion**
1. Hero (mission + crédibilité)
2. Proof (stats / entreprises)
3. Solution overview (services)
4. Clear CTA path

*Note : le moteur a parfois renvoyé "Lead Magnet + Form" — inadapté (pas d'ebook). Overridé manuellement.*

### Couleurs (domain color)
| Option | Primary | Accent | Notes |
|--------|---------|--------|-------|
| A — B2B Service | `#0F172A` | `#0369A1` | Navy + blue CTA (déjà trop vu sur V1) |
| B — Legal / Authority | `#1E3A8A` | `#B45309` | Navy + gold trust |
| C — Banking trust | `#0F172A` | `#A16207` | Navy + premium gold |

### Typographie
- Skill a proposé **Inter** pour Swiss → **rejeté** (stack trop générique).
- Alternatives recherchées : Lexend + Source Sans 3, Instrument Sans, Classic Elegant (Playfair + Inter).
- **Recommandation curée** : **Instrument Sans** (display + body, variable) — pro, distincte, compatible `next/font`.
- Labels / meta : **DM Mono** ou JetBrains Mono.

### UX (critiques High)
- Contraste ≥ 4.5:1
- Hiérarchie h1→h2→h3 séquentielle
- Alt text images
- Touch gap ≥ 8px
- Skip link
- `next/font` (pas de `<link>` Google Fonts externe) — guideline Next.js stack

### Motion
- Scroll reveal subtil : y 8–16px, 300–400ms, `power1.out`
- Stagger list subtil : 0.03s entre items
- Pas de back.out / bounce sur UI informationnelle
- Respecter `prefers-reduced-motion`

### Icons
- Bibliothèque : **Phosphor** (outline)
- Calendar, Shield, Check, Compass pour services / preuves

## Anti-patterns (skill + brief)
- Playful design
- Credentials cachés
- AI purple/pink gradients
- Cards partout (surtout dans le hero)
- Stat strips / chip clusters flottants
- Inter / Roboto / Arial
- Emojis comme icônes

## Direction recommandée (à valider)

**Nom :** Swiss Authority  
**Mélange :** Swiss Modernism 2.0 + Exaggerated Minimalism (typo) + Trust & Authority (structure)

- Fond : blanc cassé froid `#F7F8FA` + sections charcoal inversées pour le CTA
- Texte : `#0A0A0A`
- Accent unique : or brûlé `#A16207` (CTA seulement)
- Typo : Instrument Sans (display 700–800 oversized) + Instrument Sans body
- Layout : grille 12 cols, beaucoup d'air, listes numérotées plutôt que cards SaaS
- Hero : full-bleed, brand + une headline + une phrase + un CTA — photo en plan dominant, pas en pastille
- Services : liste éditoriale numérotée (01–07), pas une grille de 7 cards
- Preuve : bande entreprises / timeline existante mise en avant tôt

## Alternative B — Quiet Gold

Même structure, accent `#B45309`, hero plus sombre (#0F172A) avec texte clair, sections claires en dessous. Plus "cabinet conseil premium".

## Alternative C — Minimal Direct

Colonne unique max ~720px, presque pas de couleur, accent bleu `#0369A1`, typo Lexend + Source Sans 3. Plus "landing indie consultant".
