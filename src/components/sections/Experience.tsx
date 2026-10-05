"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { useStepTrack } from "@/lib/useStepTrack";
import { format, useI18n } from "@/i18n/I18nProvider";

// Données fixes ici ; période, poste et description sont traduits
// (experience.jobs.<key> dans les fichiers de langue)
type Job = {
  key: "fluentech" | "neoshore" | "ctrlweb" | "freelance" | "medialibs";
  company: string;
  url?: string;
  tags: string[];
};

const jobs: Job[] = [
  {
    key: "fluentech",
    company: "Fluentech",
    url: "https://www.fluentech-group.com/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Zustand", "GraphQL", "Storybook"],
  },
  {
    key: "neoshore",
    company: "Neoshore",
    url: "https://neoshore.eu/",
    tags: ["React", "TypeScript", "GraphQL", "Redux", "Material UI", "Jest"],
  },
  {
    key: "ctrlweb",
    company: "CtrlWeb",
    url: "https://ctrlweb.ca/",
    tags: ["HTML/CSS", "JavaScript", "WordPress", "SEO"],
  },
  {
    key: "freelance",
    company: "Freelance",
    tags: ["React", "Gatsby", "GraphQL", "JAMstack", "Sass"],
  },
  {
    key: "medialibs",
    company: "Medialibs",
    url: "https://www.medialibs.com/",
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
  const { dict } = useI18n();
  const t = dict.experience;
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
              <p className="sec-label">{t.label}</p>
              <h2 className="sec-title">{t.title}</h2>
              <p className="sec-lead">{t.lead}</p>
              <a
                href="https://pronass.vercel.app/cv/Nasoavina-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-sm"
              >
                <Download size={16} strokeWidth={2} aria-hidden />
                <span className="btn-label">{t.cv}</span>
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
                        aria-label={format(t.see, { company: job.company })}
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
                      <span className="exp-period">{t.jobs[job.key].period}</span>
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
                        <span className="exp-role">· {t.jobs[job.key].role}</span>
                      </h3>
                      <p className="exp-desc">{t.jobs[job.key].description}</p>
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
