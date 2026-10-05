"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { situations } from "@/lib/data/pricing";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

// Tarifs : à gauche, les situations en grand (clic pour choisir) ;
// à droite, la formule conseillée pour la situation choisie.
export default function Pricing() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="tarifs" className="section has-pat">
      <div className="pat pat-cols" aria-hidden="true" />
      <div className="w">
        <div className="price-head rv">
          <div className="price-head-title">
            <p className="sec-label">Tarifs</p>
            <h2 className="sec-title">Vous êtes dans quelle situation ?</h2>
          </div>
          <p className="price-head-lead">
            Pas de grille figée. Choisissez ce qui vous ressemble, je vous
            indique la formule adaptée.
          </p>
        </div>

        <div className="price-layout">
          <div
            className="price-situations rv d2"
            role="tablist"
            aria-label="Votre situation"
          >
            {situations.map((s, i) => (
              <button
                key={s.question}
                type="button"
                role="tab"
                id={`situation-${i}`}
                aria-selected={i === selected}
                aria-controls="formule-conseillee"
                className={i === selected ? "on" : undefined}
                onClick={() => setSelected(i)}
              >
                <span className="price-sit-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="price-sit-q">{s.question}</span>
                <ArrowRight
                  className="price-sit-arrow"
                  size={22}
                  strokeWidth={2}
                  aria-hidden
                />
              </button>
            ))}
          </div>

          <div
            className="price-panel rv d3"
            role="tabpanel"
            id="formule-conseillee"
            aria-labelledby={`situation-${selected}`}
          >
            {/* Les cinq fiches sont empilées dans la même case : le panneau
                garde la hauteur de la plus longue, et la page ne bouge plus
                quand on change de situation. Seule la fiche choisie est
                visible. */}
            <div className="price-panel-stack">
              {situations.map((s, i) => (
                <div
                  key={s.question}
                  className={`price-panel-body${i === selected ? " is-on" : ""}`}
                  aria-hidden={i !== selected}
                >
                  <span className="price-panel-kicker">Formule conseillée</span>
                  <div className="price-panel-title">
                    <h3>{s.formula}</h3>
                    <span className="price-panel-billing">{s.billing}</span>
                  </div>
                  <p className="price-panel-why">{s.why}</p>
                  <ul className="price-panel-list">
                    {s.includes.map((item) => (
                      <li key={item}>
                        <Check size={15} strokeWidth={2.4} aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="price-panel-cta">
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-sm"
              >
                En parler · 30 min gratuites
                <span className="chip" aria-hidden="true">
                  <ArrowRight size={15} strokeWidth={2.2} />
                </span>
              </a>
              <span className="price-panel-note">
                Le prix se fixe après l&apos;appel, une fois le périmètre
                clair.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
