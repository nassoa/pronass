"use client";

import { useI18n, type Dictionary } from "@/i18n/I18nProvider";

type ArtText = Dictionary["method"]["art"];

/* ── Illustrations ─────────────────────────────── */

// Cadrage : les questions du brief, toutes répondues avant de coder
function BriefArt({ t }: { t: ArtText }) {
  return (
    <div className="win method-art" aria-hidden="true">
      <div className="win-head">
        <span>brief.md</span>
        <span>{t.briefTag}</span>
      </div>
      <div className="art-body">
        {t.briefQuestions.map((q) => (
          <div key={q} className="art-row">
            <span>
              <span className="art-q">?</span> {q}
            </span>
            <span className="ok">✓</span>
          </div>
        ))}
      </div>
      <div className="art-foot">
        <span className="ok">→</span> {t.briefReady}
      </div>
    </div>
  );
}

// Choix techniques : une décision documentée (ADR), avec l'option écartée
function DecisionArt({ t }: { t: ArtText }) {
  return (
    <div className="win method-art" aria-hidden="true">
      <div className="win-head">
        <span>ADR-004</span>
        <span className="art-pill">{t.adrStatus}</span>
      </div>
      <div className="art-body">
        <div className="art-row">
          <span className="art-strong">✓ PostgreSQL</span>
          <span className="art-dim">{t.adrKept}</span>
        </div>
        <div className="art-row">
          <span className="art-strike">MongoDB</span>
          <span className="art-dim">{t.adrDropped}</span>
        </div>
      </div>
      <div className="art-foot">
        <span className="art-q">#</span> {t.adrReason}
      </div>
    </div>
  );
}

// Communication : le point d'avancement envoyé chaque semaine
function UpdateArt({ t }: { t: ArtText }) {
  return (
    <div className="win method-art" aria-hidden="true">
      <div className="win-head">
        <span>{t.weeklyHead}</span>
        <span>{t.weeklyWhen}</span>
      </div>
      <div className="art-body">
        <div className="art-row">
          <span>
            <span className="ok">✓</span> {t.weeklyDone}
          </span>
        </div>
        <div className="art-row">
          <span>
            <span className="art-q">●</span> {t.weeklyDoing}
          </span>
        </div>
        <div className="art-row">
          <span>
            <span className="warn">!</span> {t.weeklyWaiting}
          </span>
        </div>
      </div>
      <div className="art-foot">
        <span className="art-dim">{t.weeklyNext}</span>
      </div>
    </div>
  );
}

// Code maintenable : un dépôt documenté et testé
function RepoArt({ t }: { t: ArtText }) {
  const files: [string, string, string][] = [
    ["├", "README.md", "✓"],
    ["├", "docs/", "✓"],
    ["└", "tests/", "94 %"],
  ];
  return (
    <div className="win method-art" aria-hidden="true">
      <div className="win-head">
        <span>repo/</span>
        <span>main</span>
      </div>
      <div className="art-body">
        {files.map(([branch, name, status]) => (
          <div key={name} className="art-row">
            <span>
              <span className="art-dim">{branch}</span> {name}
            </span>
            <span className="ok">{status}</span>
          </div>
        ))}
      </div>
      <div className="art-foot art-coverage">
        <span className="art-bar">
          <span style={{ width: "94%" }} />
        </span>
        <span className="art-dim">{t.repoCoverage}</span>
      </div>
    </div>
  );
}

const art = [BriefArt, DecisionArt, UpdateArt, RepoArt];

/* ── Section ───────────────────────────────────── */

export default function HowIWork() {
  const { dict } = useI18n();
  const t = dict.method;

  return (
    <section id="methode" className="section has-pat">
      <div className="pat pat-hatch" aria-hidden="true" />
      <div className="w">
        <div className="sec-head rv">
          <p className="sec-label">{t.label}</p>
          <h2 className="sec-title">{t.title}</h2>
        </div>

        <ul className="method-list rv">
          {t.items.map((principle, i) => {
            const Art = art[i] ?? BriefArt;
            return (
              <li key={i} className="method-item">
                <Art t={t.art} />
                <h3 className="method-title">{principle.title}</h3>
                <p className="method-desc">{principle.description}</p>
              </li>
            );
          })}
        </ul>
        <p className="method-pilot rv d2">{t.pilot}</p>
      </div>
    </section>
  );
}
