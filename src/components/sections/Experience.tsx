"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { useStepTrack } from "@/lib/useStepTrack";

type Job = {
  period: string;
  company: string;
  url?: string;
  role: string;
  description: string;
  tags: string[];
};

const jobs: Job[] = [
  {
    period: "2025 — aujourd'hui",
    company: "Fluentech",
    url: "https://www.fluentech-group.com/",
    role: "Développeur front-end senior",
    description:
      "Interfaces SPA/SSR avec Next.js App Router. Architecture monorepo, design system Storybook à l'échelle.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Zustand", "GraphQL", "Storybook"],
  },
  {
    period: "2022 — 2025",
    company: "Neoshore",
    url: "https://neoshore.eu/",
    role: "Développeur front-end (Feelin)",
    description:
      "Interfaces React + GraphQL/Apollo, optimisation des performances, conformité WCAG sur des applications à fort trafic.",
    tags: ["React", "TypeScript", "GraphQL", "Redux", "Material UI", "Jest"],
  },
  {
    period: "2021 — 2022",
    company: "CtrlWeb",
    url: "https://ctrlweb.ca/",
    role: "Développeur front-end",
    description:
      "Interfaces responsives optimisées pour le SEO, dans une équipe agile au Canada.",
    tags: ["HTML/CSS", "JavaScript", "WordPress", "SEO"],
  },
  {
    period: "2017 — 2021",
    company: "Freelance",
    role: "Développeur front-end indépendant",
    description:
      "Applications React/Gatsby en JAMstack, intégrations GraphQL pour des clients internationaux.",
    tags: ["React", "Gatsby", "GraphQL", "JAMstack", "Sass"],
  },
  {
    period: "2016 — 2017",
    company: "Medialibs",
    url: "https://www.medialibs.com/",
    role: "Développeur front-end junior",
    description:
      "Développement et maintenance de sites WordPress et de CMS sur mesure.",
    tags: ["HTML/CSS", "jQuery", "WordPress", "PHP"],
  },
];

// Parcours en mode étapes : la piste commune (useStepTrack) plus le
// décalage de la liste qui centre l'expérience active dans sa fenêtre.
function useScrollSteps(count: number) {
  const { trackRef, enabled, active, goTo } = useStepTrack(count);
  const viewportRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const measure = () => {
      const viewport = viewportRef.current;
      const item = itemRefs.current[active];
      if (!viewport || !item) return;
      const list = item.parentElement as HTMLElement;
      const centered =
        item.offsetTop + item.offsetHeight / 2 - viewport.clientHeight / 2;
      const max = Math.max(0, list.scrollHeight - viewport.clientHeight);
      setOffset(Math.min(max, Math.max(0, centered)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [enabled, active]);

  return { trackRef, viewportRef, itemRefs, enabled, active, offset, goTo };
}

// Liste horizontale (mobile) : l'expérience courante est celle dont le
// bord gauche est le plus proche du début de la liste après défilement.
function useSwipeActive(
  itemRefs: React.MutableRefObject<(HTMLLIElement | null)[]>,
  enabled: boolean,
) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = itemRefs.current[0]?.parentElement;
    if (!enabled || !list) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const start =
        list.getBoundingClientRect().left +
        parseFloat(getComputedStyle(list).paddingLeft);
      let best = 0;
      let bestDistance = Infinity;
      itemRefs.current.forEach((item, i) => {
        if (!item) return;
        const distance = Math.abs(item.getBoundingClientRect().left - start);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    list.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      list.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled, itemRefs]);

  return active;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Experience() {
  const { trackRef, viewportRef, itemRefs, enabled, active, offset, goTo } =
    useScrollSteps(jobs.length);
  const swipeActive = useSwipeActive(itemRefs, !enabled);
  const current = enabled ? active : swipeActive;

  return (
    <section
      id="parcours"
      className={`has-pat ${enabled ? "stepped exp-steps" : "section"}`}
      style={{ ["--steps" as string]: jobs.length }}
      data-steps={enabled ? jobs.length : undefined}
    >
      <div ref={trackRef} className="step-track">
        <div className="step-sticky">
          {/* Motif dans le bloc collé : en mode étapes il reste immobile avec
              le contenu, au lieu de défiler seul (on croyait que le scroll
              n'avait rien fait) */}
          <div className="pat pat-lines" aria-hidden="true" />
          <div className="w exp-layout">
            <div className="exp-intro rv">
              <p className="sec-label">Parcours</p>
              <h2 className="sec-title">Expériences.</h2>
              <p className="sec-lead">
                Dix ans entre agences, produits et missions en freelance, en
                Europe et au Canada.
              </p>
              <a
                href="https://pronass.vercel.app/cv/Nasoavina-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-sm"
              >
                <Download size={16} strokeWidth={2} aria-hidden />
                Télécharger le CV
              </a>

              {enabled && (
                <div className="exp-nav">
                  <span className="exp-count">
                    {pad(active + 1)}
                    <span> / {pad(jobs.length)}</span>
                  </span>
                  <div className="exp-dots">
                    {jobs.map((job, i) => (
                      <button
                        key={job.company}
                        type="button"
                        className={i === active ? "on" : undefined}
                        aria-label={`Voir ${job.company}`}
                        aria-current={i === active ? "step" : undefined}
                        onClick={() => goTo(i)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* En mode étapes, les lignes ont déjà leurs propres transitions
                (opacité, échelle) : l'apparition se fait sur la liste entière */}
            <div
              ref={viewportRef}
              className={`exp-viewport${enabled ? " rv d2" : ""}`}
            >
              <ol
                className="exp-list"
                style={
                  enabled
                    ? { transform: `translate3d(0, ${-offset}px, 0)` }
                    : undefined
                }
              >
                {jobs.map((job, i) => {
                  const classes = [
                    "exp-row",
                    enabled ? "" : `rv d${i + 1}`,
                    i === current ? "is-current" : "",
                    i < current ? "is-past" : "",
                  ];
                  return (
                    <li
                      key={job.company}
                      ref={(el) => {
                        itemRefs.current[i] = el;
                      }}
                      className={classes.filter(Boolean).join(" ")}
                    >
                      <span className="exp-period">{job.period}</span>
                      <h3 className="exp-head">
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}{" "}
                        <span className="exp-role">· {job.role}</span>
                      </h3>
                      <p className="exp-desc">{job.description}</p>
                      <div className="exp-tags">
                        {job.tags.map((tag) => (
                          <span key={tag} className="exp-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
