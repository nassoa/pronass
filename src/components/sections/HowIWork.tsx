"use client";

import { principles } from "@/lib/data/principles";

/* ── Illustrations ─────────────────────────────── */

// Cadrage : les questions du brief, toutes répondues avant de coder
function BriefArt() {
  const questions = ["Pour qui ?", "Quel problème ?", "Priorité n°1 ?"];
  return (
    <div className="win method-art" aria-hidden="true">
      <div className="win-head">
        <span>brief.md</span>
        <span>cadrage</span>
      </div>
      <div className="art-body">
        {questions.map((q) => (
          <div key={q} className="art-row">
            <span>
              <span className="art-q">?</span> {q}
            </span>
            <span className="ok">✓</span>
          </div>
        ))}
      </div>
      <div className="art-foot">
        <span className="ok">→</span> prêt à développer
      </div>
    </div>
  );
}

// Choix techniques : une décision documentée (ADR), avec l'option écartée
function DecisionArt() {
  return (
    <div className="win method-art" aria-hidden="true">
      <div className="win-head">
        <span>ADR-004</span>
        <span className="art-pill">accepté</span>
      </div>
      <div className="art-body">
        <div className="art-row">
          <span className="art-strong">✓ PostgreSQL</span>
          <span className="art-dim">retenu</span>
        </div>
        <div className="art-row">
          <span className="art-strike">MongoDB</span>
          <span className="art-dim">écarté</span>
        </div>
      </div>
      <div className="art-foot">
        <span className="art-q">#</span> raison : transactions
      </div>
    </div>
  );
}

// Communication : le point d'avancement envoyé chaque semaine
function UpdateArt() {
  return (
    <div className="win method-art" aria-hidden="true">
      <div className="win-head">
        <span>Point hebdo</span>
        <span>lun. 09:00</span>
      </div>
      <div className="art-body">
        <div className="art-row">
          <span>
            <span className="ok">✓</span> Paiement livré
          </span>
        </div>
        <div className="art-row">
          <span>
            <span className="art-q">●</span> Auth en cours
          </span>
        </div>
        <div className="art-row">
          <span>
            <span className="warn">!</span> Accès API attendu
          </span>
        </div>
      </div>
      <div className="art-foot">
        <span className="art-dim">prochain point : lun.</span>
      </div>
    </div>
  );
}

// Code maintenable : un dépôt documenté et testé
function RepoArt() {
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
        <span className="art-dim">couverture</span>
      </div>
    </div>
  );
}

const art = [BriefArt, DecisionArt, UpdateArt, RepoArt];

/* ── Section ───────────────────────────────────── */

export default function HowIWork() {
  return (
    <section id="methode" className="section has-pat">
      <div className="pat pat-hatch" aria-hidden="true" />
      <div className="w">
        <div className="sec-head rv">
          <p className="sec-label">Méthode</p>
          <h2 className="sec-title">Comment je travaille.</h2>
        </div>

        <ul className="method-list rv">
          {principles.map((principle, i) => {
            const Art = art[i] ?? BriefArt;
            return (
              <li key={principle.number} className="method-item">
                <Art />
                <h3 className="method-title">{principle.title}</h3>
                <p className="method-desc">{principle.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
