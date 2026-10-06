"use client";

import { useState } from "react";
import { ArrowRight, CornerDownLeft } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

// Formats de collaboration : à gauche, les formats en grand (clic pour
// choisir) ; à droite, la fiche du format choisi (modalités et facturation).
export default function Pricing() {
  const { dict } = useI18n();
  const t = dict.formulas;
  const [selected, setSelected] = useState(0);

  return (
    <section id="formules" className="section has-pat">
      <div className="pat pat-cols" aria-hidden="true" />
      <div className="w">
        <div className="price-layout">
          {/* colonne de gauche : titre, sous-titre puis la liste des formules */}
          <div className="price-left rv">
            <div className="price-head">
              <p className="sec-label">{t.label}</p>
              <h2 className="sec-title">{t.title}</h2>
              <p className="price-left-lead">{t.lead}</p>
            </div>
            <div
              className="price-situations"
              role="tablist"
              aria-label={t.tablist}
            >
              {t.items.map((f, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  id={`formule-${i}`}
                  aria-selected={i === selected}
                  aria-controls="formule-detail"
                  className={i === selected ? "on" : undefined}
                  onClick={() => setSelected(i)}
                >
                  <span className="price-sit-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="price-sit-q">{f.name}</span>
                  <ArrowRight
                    className="price-sit-arrow"
                    size={22}
                    strokeWidth={2}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>

          <div
            className="price-panel rv d3"
            role="tabpanel"
            id="formule-detail"
            aria-labelledby={`formule-${selected}`}
          >
            {/* Les fiches sont empilées dans la même case : le panneau garde
                la hauteur de la plus longue, et la page ne bouge pas quand on
                change de formule. Seule la fiche choisie est visible. */}
            <div className="price-panel-stack">
              {t.items.map((f, i) => (
                <div
                  key={i}
                  className={`price-panel-body${i === selected ? " is-on" : ""}`}
                  aria-hidden={i !== selected}
                >
                  <span className="price-panel-billing">{f.billing}</span>
                  <h3 className="price-panel-title">{f.name}</h3>
                  <p className="price-panel-why">{f.when}</p>
                  <ul className="price-panel-list">
                    {f.includes.map((item) => (
                      <li key={item}>{item}</li>
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
                <span className="btn-label">{t.cta}</span>
                <kbd className="btn-key" aria-hidden="true">
                  <CornerDownLeft size={15} strokeWidth={2.8} />
                </kbd>
              </a>
              <span className="price-panel-note">{t.note}</span>
              <p className="price-panel-ai">{t.aiNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
