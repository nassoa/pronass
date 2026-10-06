"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

/* ── Illustrations, une par point (même langage que Méthode : traits fins,
   violet pour vous, orange pour moi, gris pour le reste) ── */

const V = "var(--violet)";
const O = "var(--accent)";
const G = "rgba(255, 255, 255, 0.22)";
const G2 = "rgba(255, 255, 255, 0.1)";
const INK = "#0b0b0e";

// Coche dans une pastille pleine
function Check({
  x,
  y,
  color,
  r = 5,
}: {
  x: number;
  y: number;
  color: string;
  r?: number;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={color} />
      <path
        d={`M${x - r * 0.45} ${y} l${r * 0.32} ${r * 0.32} l${r * 0.62} -${r * 0.62}`}
        stroke={INK}
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

// Fenêtre : cadre, barre d'en-tête et trois points
function Win({
  x,
  y,
  w,
  h,
  color,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="9"
        fill={color}
        fillOpacity="0.06"
        stroke={color}
        strokeOpacity="0.55"
      />
      <line
        x1={x}
        y1={y + 14}
        x2={x + w}
        y2={y + 14}
        stroke={color}
        strokeOpacity="0.35"
      />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={x + 9 + i * 6}
          cy={y + 7}
          r="1.6"
          fill={color}
          fillOpacity="0.6"
        />
      ))}
    </g>
  );
}

// Chacun son rôle : vos tâches cochées à gauche, le code à droite, et les
// échanges entre les deux (maquettes vers moi, livraison vers vous)
function RolesArt() {
  return (
    <svg viewBox="0 0 240 110" className="partners-art" aria-hidden="true">
      <Win x={6} y={10} w={96} h={90} color={V} />
      {[
        [42, 50, true],
        [60, 38, true],
        [78, 46, false],
      ].map(([y, w, done]) => (
        <g key={String(y)}>
          {done ? (
            <Check x={22} y={y as number} color={V} r={5} />
          ) : (
            <circle
              cx="22"
              cy={y as number}
              r="4.5"
              fill="none"
              stroke={V}
              strokeOpacity="0.6"
              strokeWidth="1.3"
            />
          )}
          <rect
            x="33"
            y={(y as number) - 2.5}
            width={w as number}
            height="5"
            rx="2.5"
            fill={V}
            fillOpacity={done ? 0.5 : 0.25}
          />
        </g>
      ))}

      {/* échanges : maquettes → moi (violet), livraison → vous (orange) */}
      <path
        d="M106 44 C 116 36, 124 36, 132 44"
        fill="none"
        stroke={V}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M128 40 l4 4 l-5 2"
        fill="none"
        stroke={V}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M134 70 C 124 78, 116 78, 108 70"
        fill="none"
        stroke={O}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M112 74 l-4 -4 l5 -2"
        fill="none"
        stroke={O}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Win x={138} y={10} w={96} h={90} color={O} />
      <path
        d="M152 36 l-5 5 l5 5"
        fill="none"
        stroke={O}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [158, 34, 34, 0.55],
        [164, 45, 44, 0.3],
        [164, 56, 30, 0.55],
        [158, 67, 40, 0.3],
        [158, 78, 22, 0.55],
      ].map(([x, y, w, op]) => (
        <rect
          key={y}
          x={x}
          y={y}
          width={w}
          height="5"
          rx="2.5"
          fill={O}
          fillOpacity={op}
        />
      ))}
      {/* ligne en cours d'écriture */}
      <rect
        x="146"
        y="53"
        width="80"
        height="11"
        rx="3"
        fill={O}
        fillOpacity="0.1"
      />
      <rect x="196" y="55" width="2" height="7" fill={O} />
    </svg>
  );
}

// Dans votre équipe : votre tableau de tâches et votre équipe (gris), et moi
// qui rejoins l'équipe sur une tâche (orange)
function TeamArt() {
  // tableau un peu plus étroit et personne décalée à droite : de l'air entre
  // le tableau, le relais et moi
  return (
    <svg viewBox="0 0 240 110" className="partners-art" aria-hidden="true">
      <rect
        x="6"
        y="10"
        width="150"
        height="90"
        rx="9"
        fill="none"
        stroke={G}
      />
      {/* l'équipe, en avatars superposés */}
      {[0, 1, 2, 3].map((i) => (
        <circle
          key={i}
          cx={22 + i * 11}
          cy="26"
          r="7"
          fill="#111114"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.3"
        />
      ))}
      <circle
        cx={22 + 4 * 11}
        cy="26"
        r="7"
        fill="#111114"
        stroke={O}
        strokeWidth="1.3"
      />
      <rect x="110" y="23" width="38" height="5" rx="2.5" fill={G2} />
      <line x1="6" y1="40" x2="156" y2="40" stroke={G2} />

      {/* tableau en trois colonnes */}
      {[14, 60, 106].map((x) => (
        <rect key={x} x={x} y="47" width="22" height="4" rx="2" fill={G} />
      ))}
      <rect x="14" y="56" width="42" height="14" rx="3" fill={G2} stroke={G} />
      <rect x="14" y="74" width="42" height="14" rx="3" fill={G2} stroke={G} />
      <rect
        x="60"
        y="56"
        width="42"
        height="14"
        rx="3"
        fill={O}
        fillOpacity="0.14"
        stroke={O}
        strokeOpacity="0.8"
      />
      <circle cx="95" cy="63" r="3" fill={O} />
      <rect
        x="66"
        y="61"
        width="20"
        height="4"
        rx="2"
        fill={O}
        fillOpacity="0.7"
      />
      <rect x="106" y="56" width="42" height="14" rx="3" fill={G2} stroke={G} />
      <Check x={140} y={63} color="rgba(255, 255, 255, 0.55)" r={3.6} />

      {/* petit relais entre le tableau et moi : un court trait dans
          l'espace libre, avec un point à chaque bout (rien ne chevauche) */}
      <circle cx="166" cy="56" r="2" fill={O} />
      <line
        x1="170"
        y1="56"
        x2="184"
        y2="56"
        stroke={O}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="188" cy="56" r="2" fill={O} />
      <g stroke={O} strokeWidth="1.5" fill="none">
        <circle cx="212" cy="44" r="8" />
        <path d="M198 70 a14 14 0 0 1 28 0" strokeLinecap="round" />
      </g>
      <circle cx="225" cy="33" r="6.5" fill={O} />
      <path
        d="M225 30 v6 M222 33 h6"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Un projet complet : maquette validée (vous), développement, mise en ligne
// (moi), avec la barre d'avancement et ses jalons
function ProjectArt() {
  return (
    <svg viewBox="0 0 240 110" className="partners-art" aria-hidden="true">
      {/* maquette */}
      <rect
        x="6"
        y="12"
        width="60"
        height="66"
        rx="7"
        fill={V}
        fillOpacity="0.06"
        stroke={V}
        strokeOpacity="0.6"
      />
      <rect
        x="13"
        y="20"
        width="46"
        height="20"
        rx="2"
        fill="none"
        stroke={V}
        strokeOpacity="0.5"
      />
      <path d="M13 20 L59 40 M59 20 L13 40" stroke={V} strokeOpacity="0.3" />
      <rect
        x="13"
        y="46"
        width="32"
        height="4"
        rx="2"
        fill={V}
        fillOpacity="0.5"
      />
      <rect
        x="13"
        y="55"
        width="40"
        height="4"
        rx="2"
        fill={V}
        fillOpacity="0.3"
      />
      <rect
        x="13"
        y="64"
        width="18"
        height="7"
        rx="3"
        fill={V}
        fillOpacity="0.5"
      />

      <path
        d="M72 45 l6 0 M75 41 l4 4 l-4 4"
        fill="none"
        stroke={G}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* développement */}
      <rect
        x="88"
        y="12"
        width="60"
        height="66"
        rx="7"
        fill={O}
        fillOpacity="0.06"
        stroke={O}
        strokeOpacity="0.6"
      />
      <path
        d="M100 28 l-5 5 l5 5 M136 28 l5 5 l-5 5"
        fill="none"
        stroke={O}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [105, 30, 22, 0.55],
        [105, 46, 30, 0.3],
        [111, 54, 22, 0.55],
        [111, 62, 26, 0.3],
        [105, 70, 14, 0.55],
      ].map(([x, y, w, op]) => (
        <rect
          key={y}
          x={x}
          y={y - 2}
          width={w}
          height="4"
          rx="2"
          fill={O}
          fillOpacity={op}
        />
      ))}

      <path
        d="M154 45 l6 0 M157 41 l4 4 l-4 4"
        fill="none"
        stroke={G}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* en ligne : fenêtre de navigateur avec une courbe qui monte */}
      <Win x={170} y={12} w={64} h={66} color={O} />
      <path
        d="M178 66 L190 58 L200 61 L212 47 L226 40"
        fill="none"
        stroke={O}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="226" cy="40" r="2.6" fill={O} />
      <line x1="178" y1="70" x2="226" y2="70" stroke={O} strokeOpacity="0.3" />

      {/* barre d'avancement et jalons */}
      <rect x="20" y="93" width="200" height="3" rx="1.5" fill={G2} />
      <rect
        x="20"
        y="93"
        width="200"
        height="3"
        rx="1.5"
        fill={O}
        fillOpacity="0.55"
      />
      <Check x={36} y={94.5} color={V} r={5.5} />
      <Check x={118} y={94.5} color={O} r={5.5} />
      <Check x={202} y={94.5} color={O} r={5.5} />
    </svg>
  );
}

const arts = [RolesArt, TeamArt, ProjectArt];

// Partenariats : ce qui est propre au travail avec une agence, un studio ou
// un consultant (partage des rôles, intégration à une équipe, prise en charge
// d'un projet). Les modalités et la facturation sont dans les formats.
export default function Partners() {
  const t = useI18n().dict.partners;

  return (
    <section id="partenariats" className="section has-pat">
      <div className="pat pat-grid" aria-hidden="true" />
      <div className="w">
        <div className="partners-head rv">
          <div className="partners-title">
            <p className="sec-label">{t.label}</p>
            <h2 className="sec-title">{t.title}</h2>
            <p className="sec-lead">{t.lead}</p>
          </div>
        </div>

        <ol className="partners-cols rv d2" aria-label={t.pointsAria}>
          {t.points.map((point, i) => {
            const Art = arts[i];
            return (
              <li key={point.title} className="partners-col">
                {Art && <Art />}
                <h3 className="partners-col-title">
                  <span className="partners-step-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {point.title}
                </h3>
                <p className="partners-col-text">{point.text}</p>
              </li>
            );
          })}
        </ol>
        <a href="#formules" className="text-link partners-formats rv d3">
          {t.formatsLink}
          <ArrowRight size={15} strokeWidth={2.2} aria-hidden />
        </a>
      </div>
    </section>
  );
}
