"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useI18n, type Dictionary } from "@/i18n/I18nProvider";
import { useStepMode, useStepTrack } from "@/lib/useStepTrack";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

type Pole = Dictionary["services"]["poles"][number];

const pad = (n: number) => String(n).padStart(2, "0");

/* ── Blocs communs ─────────────────────────────── */

function SectionHead({ className = "" }: { className?: string }) {
  const t = useI18n().dict.services;
  return (
    <div className={`sec-head ${className}`}>
      <p className="sec-label">{t.label}</p>
      <h2 className="sec-title">{t.title}</h2>
      {t.lead && <p className="sec-lead">{t.lead}</p>}
    </div>
  );
}

// Fiche d'un pôle : promesse, situation, prestations, livrables, bouton
function PoleSheet({
  pole,
  index,
  count,
  hidden = false,
}: {
  pole: Pole;
  index: number;
  count: number;
  hidden?: boolean;
}) {
  const t = useI18n().dict.services;
  return (
    <>
      {/* à gauche le titre et sa promesse, à droite la position (« 01 / 04 ») */}
      <div className="svc-sheet-head">
        <div className="svc-sheet-titles">
          <h3 className="card-title">{pole.need}</h3>
          <p className="svc-sheet-promise">{pole.promise}</p>
        </div>
        <span className="svc-sheet-pos">
          {pad(index + 1)} / {pad(count)}
        </span>
      </div>
      <dl className="svc-sheet-fields">
        <div>
          <dt>{t.fields.useful}</dt>
          <dd>{pole.useful}</dd>
        </div>
        <div>
          <dt>{t.fields.items}</dt>
          <dd>
            <ul className="svc-sheet-list">
              {pole.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>{t.fields.receive}</dt>
          <dd>{pole.receive}</dd>
        </div>
      </dl>
      {pole.note && <p className="svc-sheet-extra">{pole.note}</p>}
      <a
        href={CAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link svc-sheet-cta"
        tabIndex={hidden ? -1 : undefined}
      >
        {pole.cta}
        <ArrowRight size={15} strokeWidth={2.2} aria-hidden />
      </a>
    </>
  );
}

/* ── Pile de fiches ────────────────────────────────
   Une carte qui change de bout de pile ne doit pas la traverser :
   - devant → fond (fiche suivante) : elle sort d'abord par le bas à gauche
     pendant que le reste de la pile attend ; ensuite seulement la pile avance,
     et la carte réapparaît au fond en même temps que la nouvelle carte de
     devant apparaît (mêmes durées, cf. globals.css) ;
   - fond → devant (fiche précédente) : elle arrive du bas à gauche.
   Retourne la fiche affichée par la pile (en retard sur `active` pendant la
   sortie) et la phase des cartes concernées. */
const LEAVE_MS = 120;
type Phase = "leave" | "snap" | "enter";

function useStackPhases(active: number, count: number) {
  const previous = useRef(active);
  const [shown, setShown] = useState(active);
  const [phase, setPhase] = useState<Record<number, Phase>>({});

  useEffect(() => {
    const before = previous.current;
    previous.current = active;
    if (before === active) return;
    const depth = (i: number, a: number) => (i - a + count) % count;
    const all = Array.from({ length: count }, (_, i) => i);
    // saut de plus d'un cran = passage d'un bout à l'autre de la pile
    const toBack = all.filter((i) => depth(i, active) - depth(i, before) > 1);
    const toFront = all.filter((i) => depth(i, before) - depth(i, active) > 1);
    const set = (ids: number[], p: Phase | null) =>
      setPhase((cur) => {
        const next = { ...cur };
        ids.forEach((i) => (p ? (next[i] = p) : delete next[i]));
        return next;
      });
    const frames: number[] = [];
    // applique l'état de départ sans transition, puis le retire au
    // rendu suivant pour lancer la transition
    const release = (ids: number[]) => {
      frames.push(
        requestAnimationFrame(() => {
          frames.push(requestAnimationFrame(() => set(ids, null)));
        }),
      );
    };

    let timer = 0;
    if (toBack.length) {
      set(toBack, "leave");
      timer = window.setTimeout(() => {
        setShown(active);
        set(toBack, "snap");
        release(toBack);
      }, LEAVE_MS);
    } else {
      setShown(active);
      set(toFront, "enter");
      release(toFront);
    }
    return () => {
      window.clearTimeout(timer);
      frames.forEach(cancelAnimationFrame);
      setPhase({});
      setShown(active);
    };
  }, [active, count]);

  return { shown, phase };
}

/* ── Grand écran ───────────────────────────────────
   À gauche, les quatre pôles (le pôle affiché en blanc) ; à
   droite, une pile de fiches, une par pôle. La section est une piste à
   étapes (comme Parcours) : chaque geste de molette passe au pôle suivant,
   un clic y va directement. */

function ServicesSteps({ count }: { count: number }) {
  const t = useI18n().dict.services;
  const { trackRef, active, goTo } = useStepTrack(count);
  const { shown, phase } = useStackPhases(active, count);

  return (
    <div ref={trackRef} className="step-track">
      <div className="step-sticky">
        <div className="pat pat-dots" aria-hidden="true" />
        <div className="w svc-split">
          <div className="svc-side rv">
            <SectionHead />
            <nav className="svc-cats" aria-label={t.polesAria}>
              {t.poles.map((pole, i) => {
                const open = i === active;
                return (
                  <div
                    key={pole.id}
                    className={`svc-cat${open ? " is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="svc-cat-btn"
                      aria-current={open ? "true" : undefined}
                      onClick={() => goTo(i)}
                    >
                      <span className="svc-cat-num">{pad(i + 1)}</span>
                      {pole.need}
                    </button>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Pile de fiches en diagonale : la fiche affichée devant, les
              suivantes derrière (une fiche quittée repasse en fond de pile). */}
          <div className="svc-deck rv d2">
            {t.poles.map((pole, i) => {
              const depth = (i - shown + count) % count;
              const pos = depth > 4 ? "hidden" : String(depth);
              return (
                <article
                  key={pole.id}
                  className={`card svc-card${
                    phase[i] ? ` is-${phase[i]}` : ""
                  }`}
                  data-pos={pos}
                  aria-hidden={depth !== 0}
                >
                  <div className="svc-card-body">
                    <PoleSheet
                      pole={pole}
                      index={i}
                      count={count}
                      hidden={depth !== 0}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile : les quatre fiches en carrousel ───── */

function ServicesCarousel({ count }: { count: number }) {
  const t = useI18n().dict.services;
  return (
    <>
      <div className="pat pat-dots" aria-hidden="true" />
      <div className="w">
        <SectionHead className="rv" />
        <ul className="bento">
          {t.poles.map((pole, i) => (
            <li key={pole.id} className="card svc-mcard">
              <PoleSheet pole={pole} index={i} count={count} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/* ── Section ───────────────────────────────────── */

export default function Services() {
  const steps = useStepMode();
  const count = useI18n().dict.services.poles.length;
  // Toujours le même élément <section> : Animations garde une référence
  // aux sections de la page, il ne doit pas être remplacé au changement
  // de mise en page.
  return (
    <section
      id="services"
      className={steps ? "has-pat stepped svc-steps" : "section has-pat"}
      style={{ ["--steps" as string]: count }}
      data-steps={steps ? count : undefined}
    >
      {steps ? (
        <ServicesSteps count={count} />
      ) : (
        <ServicesCarousel count={count} />
      )}
    </section>
  );
}
