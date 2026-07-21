"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";

// Import all illustrations
import { DevisioIllustration } from "@/components/illustrations/DevisioIllustration";
import { OrthoflowIllustration } from "@/components/illustrations/OrthoflowIllustration";
import { GitSkreenIllustration } from "@/components/illustrations/GitSkreenIllustration";
import { SeoAnalyzerIllustration } from "@/components/illustrations/SeoAnalyzerIllustration";
import { AiCoverIllustration } from "@/components/illustrations/AiCoverIllustration";
import { GlobalConverterIllustration } from "@/components/illustrations/GlobalConverterIllustration";
import { MovieSprintIllustration } from "@/components/illustrations/MovieSprintIllustration";

// Mapping des noms d'illustration vers les composants
const illustrationMap = {
  devisio: DevisioIllustration,
  orthoflow: OrthoflowIllustration,
  gitskreen: GitSkreenIllustration,
  "seo-analyzer": SeoAnalyzerIllustration,
  "ai-cover": AiCoverIllustration,
  globalconverter: GlobalConverterIllustration,
  moviesprint: MovieSprintIllustration,
} as const;

export default function Work() {
  return (
    <section id="work">
      <div className="w">
        <div className="sec-head rv">
          <div>
            <p className="sec-label rv-left">Selected work</p>
            <h2 className="sec-title">Ce que j'ai construit</h2>
          </div>
          <a href="#" className="sec-more">
            Tous les projets
            <span className="icon-arr">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 1.5C6.5 1.5 6.5 5.5 6.5 6.5M6.5 6.5C6.5 6.5 6.5 10.5 6.5 11.5M6.5 6.5C6.5 6.5 2.5 6.5 1.5 6.5M6.5 6.5C6.5 6.5 10.5 6.5 11.5 6.5M4.5 4.5L6.5 6.5M8.5 8.5L6.5 6.5M8.5 4.5L6.5 6.5M4.5 8.5L6.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="bento">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              className={`pc ${project.wide ? "pc--w2" : ""} rv-scale d${index + 1}`}
            >
              <div className="pc-img">
                <div className="pc-img-in">
                  {/* SVG illustration */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {(() => {
                      const IllustrationComponent =
                        illustrationMap[
                          project.illustration as keyof typeof illustrationMap
                        ];
                      return IllustrationComponent ? (
                        <IllustrationComponent />
                      ) : null;
                    })()}
                  </div>
                </div>
              </div>
              <div className="pc-body">
                <div className="pc-top">
                  <span className="pc-type">{project.type}</span>
                  <div className="pc-arr">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 2.5H3C2.17 2.5 1.5 3.17 1.5 4V11C1.5 11.83 2.17 12.5 3 12.5H10C10.83 12.5 11.5 11.83 11.5 11V8.5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8.5 2.5H11.5M11.5 2.5V5.5M11.5 2.5L6.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="pc-name">{project.name}</div>
                <p className="pc-desc">{project.desc}</p>
                <div className="pc-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
