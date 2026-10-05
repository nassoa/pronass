"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

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

// Le défilement par étapes n'est actif que sur grand écran et si l'utilisateur
// accepte les animations ; sinon la liste reste une timeline classique.
const STEP_QUERY =
  "(min-width: 900px) and (prefers-reduced-motion: no-preference)";

function useScrollSteps(count: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia(STEP_QUERY);
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Étape courante d'après la position de scroll dans la piste.
  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const track = trackRef.current;
        if (!track) return;
        const scrollable = track.offsetHeight - window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, -track.getBoundingClientRect().top / scrollable),
        );
        setActive(Math.min(count - 1, Math.floor(progress * count)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled, count]);

  // Décale la liste pour centrer l'expérience active dans la fenêtre.
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

  // Fait défiler la page jusqu'au milieu de l'étape demandée.
  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const scrollable = track.offsetHeight - window.innerHeight;
    const top = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top + ((index + 0.5) / count) * scrollable,
      behavior: "smooth",
    });
  };

  return { trackRef, viewportRef, itemRefs, enabled, active, offset, goTo };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Experience() {
  const { trackRef, viewportRef, itemRefs, enabled, active, offset, goTo } =
    useScrollSteps(jobs.length);

  return (
    <section
      id="parcours"
      className={`has-pat ${enabled ? "exp-steps" : "section"}`}
      style={{ ["--steps" as string]: jobs.length }}
    >
      <div className="pat pat-lines" aria-hidden="true" />
      <div ref={trackRef} className="exp-track">
        <div className="exp-sticky">
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

            <div ref={viewportRef} className="exp-viewport">
              <ol
                className="exp-list"
                style={
                  enabled
                    ? { transform: `translate3d(0, ${-offset}px, 0)` }
                    : undefined
                }
              >
                {jobs.map((job, i) => {
                  const current = enabled ? i === active : i === 0;
                  const classes = [
                    "exp-row",
                    enabled ? "" : `rv d${i + 1}`,
                    current ? "is-current" : "",
                    enabled && i < active ? "is-past" : "",
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
