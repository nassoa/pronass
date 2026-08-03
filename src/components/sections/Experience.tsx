"use client";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="w">
        <div className="sec-head rv">
          <p className="sec-label rv-left">Parcours</p>
          <h2 className="sec-title">Expériences</h2>
        </div>

        <ul className="exp-list">
          <li className="exp-row rv">
            <div>
              <div className="exp-period">Depuis 2025</div>
              <a
                href="https://www.fluentech-group.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-co"
              >
                Fluentech
              </a>
            </div>
            <div>
              <div className="exp-role">Développeur Front-End Senior</div>
              <p className="exp-desc">
                Interfaces SPA/SSR avec Next.js App Router. Architecture
                monorepo, Design System Storybook à l&apos;échelle.
                <strong>
                  {" "}
                  Migration d&apos;applications vers Next.js, dashboards data
                  D3.js, collaborations pixel-perfect.
                </strong>
              </p>
              <div className="exp-tags">
                <span className="exp-tag">Next.js</span>
                <span className="exp-tag">TypeScript</span>
                <span className="exp-tag">Tailwind</span>
                <span className="exp-tag">Zustand</span>
                <span className="exp-tag">GraphQL</span>
                <span className="exp-tag">Storybook</span>
              </div>
            </div>
          </li>

          <li className="exp-row rv d1">
            <div>
              <div className="exp-period">2022 à 2025</div>
              <a
                href="https://neoshore.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-co"
              >
                Neoshore
              </a>
            </div>
            <div>
              <div className="exp-role">Développeur Front-End (Feelin)</div>
              <p className="exp-desc">
                Interfaces React + GraphQL/Apollo, optimisation performance avec
                <strong>
                  {" "}
                  chargement différé, mise en cache, réduction des temps de
                  chargement.
                </strong>{" "}
                Conformité WCAG sur applications à fort trafic.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">React.js</span>
                <span className="exp-tag">TypeScript</span>
                <span className="exp-tag">GraphQL</span>
                <span className="exp-tag">Redux</span>
                <span className="exp-tag">Material UI</span>
                <span className="exp-tag">Jest</span>
              </div>
            </div>
          </li>

          <li className="exp-row rv d2">
            <div>
              <div className="exp-period">2021 à 2022</div>
              <a
                href="https://ctrlweb.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-co"
              >
                CtrlWeb
              </a>
            </div>
            <div>
              <div className="exp-role">Développeur Front-End</div>
              <p className="exp-desc">
                Interfaces responsives SEO-optimisées,
                <strong> environnement agile canadien.</strong> HTML5
                sémantique, Sass modulaire, collaboration transverse
                design/back-end.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">HTML5/CSS3</span>
                <span className="exp-tag">JavaScript</span>
                <span className="exp-tag">WordPress</span>
                <span className="exp-tag">SEO</span>
              </div>
            </div>
          </li>

          <li className="exp-row rv d3">
            <div>
              <div className="exp-period">2017 à 2021</div>
              <div className="exp-co">Freelance</div>
            </div>
            <div>
              <div className="exp-role">Développeur Front-End Indépendant</div>
              <p className="exp-desc">
                Applications React/Gatsby JAMstack, intégrations GraphQL.
                <strong> Clients internationaux</strong>, mobile-first,
                SEO-friendly, accessibilité.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">React.js</span>
                <span className="exp-tag">Gatsby.js</span>
                <span className="exp-tag">GraphQL</span>
                <span className="exp-tag">JAMstack</span>
                <span className="exp-tag">Sass</span>
              </div>
            </div>
          </li>

          <li className="exp-row rv d4">
            <div>
              <div className="exp-period">2016 à 2017</div>
              <a
                href="https://www.medialibs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-co"
              >
                Medialibs
              </a>
            </div>
            <div>
              <div className="exp-role">Développeur Front-End Junior</div>
              <p className="exp-desc">
                Développement et maintenance sites WordPress et CMS sur mesure.
                <strong> Première expérience en équipe</strong> :
                HTML/CSS/JS/jQuery, optimisation continue.
              </p>
              <div className="exp-tags">
                <span className="exp-tag">HTML5</span>
                <span className="exp-tag">CSS3</span>
                <span className="exp-tag">jQuery</span>
                <span className="exp-tag">WordPress</span>
                <span className="exp-tag">PHP</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
