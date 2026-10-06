"use client";

import { useState } from "react";
import { ArrowLeftRight, CornerDownLeft } from "lucide-react";
import { useI18n, type Dictionary } from "@/i18n/I18nProvider";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

type Form = Dictionary["partners"]["forms"][number];
type Art = Form["art"];

/* ── Illustrations, une par forme de collaboration ── */

// Renfort : le tableau d'un sprint, où j'arrive comme un développeur de plus
const sprintStatus = ["done", "doing", "todo"];

function SprintArt({ art }: { art: Art }) {
  return (
    <div className="win partners-art" aria-hidden="true">
      <div className="win-head">
        <span>{art.head}</span>
        <span className="art-pill">{art.tag}</span>
      </div>
      <div className="art-body">
        {art.rows.map(([label, status], i) => (
          <div key={label} className="art-row">
            <span>
              <span className={`partners-status is-${sprintStatus[i]}`} />
              {label}
            </span>
            <span className="art-dim">{status}</span>
          </div>
        ))}
      </div>
      <div className="art-foot">
        <span className="art-dim">{art.foot}</span>
      </div>
    </div>
  );
}

// Réalisation technique : qui fait chaque étape, vous ou moi
function HandoffArt({ art, me }: { art: Art; me: string }) {
  return (
    <div className="win partners-art" aria-hidden="true">
      <div className="win-head">
        <span>{art.head}</span>
        <span>{art.tag}</span>
      </div>
      <div className="art-body">
        {art.rows.map(([label, who]) => (
          <div key={label} className="art-row">
            <span>
              <span className="ok">✓</span> {label}
            </span>
            <span className={`partners-who${who === me ? " is-me" : ""}`}>
              {who}
            </span>
          </div>
        ))}
      </div>
      <div className="art-foot">
        <span className="art-q">→</span> {art.foot}
      </div>
    </div>
  );
}

// Accompagnement durable : une ligne de temps qui continue
function TimelineArt({ art }: { art: Art }) {
  return (
    <div className="win partners-art" aria-hidden="true">
      <div className="win-head">
        <span>{art.head}</span>
        <span className="art-pill">{art.tag}</span>
      </div>
      <div className="art-body partners-timeline">
        {art.rows.map(([label, when]) => (
          <div key={label} className="art-row">
            <span>
              <span className="partners-tl-dot" />
              {label}
            </span>
            <span className="art-dim">{when}</span>
          </div>
        ))}
      </div>
      <div className="art-foot">
        <span className="art-q">∞</span> {art.foot}
      </div>
    </div>
  );
}

function FormArt({ form, index }: { form: Form; index: number }) {
  if (index === 0) return <SprintArt art={form.art} />;
  // « moi » : la valeur du rôle qui me revient dans les lignes du projet
  if (index === 1)
    return <HandoffArt art={form.art} me={form.art.rows[1][1]} />;
  return <TimelineArt art={form.art} />;
}

/* ── Section ───────────────────────────────────── */

// Partenariats : pour les agences, designers, consultants et entrepreneurs.
// Les trois formes sont présentées comme les étapes d'une même relation ;
// pour chacune, ce que vous gardez et ce que je prends en charge.
export default function Partners() {
  const t = useI18n().dict.partners;
  // l'accompagnement durable est affiché par défaut
  const [selected, setSelected] = useState(t.forms.length - 1);

  return (
    <section id="partenariats" className="section has-pat">
      <div className="pat pat-grid" aria-hidden="true" />
      <div className="w partners-layout">
        <div className="sec-head partners-head rv">
          <p className="sec-label">{t.label}</p>
          <h2 className="sec-title">{t.title}</h2>
          <p className="sec-lead">{t.lead}</p>
          <p className="partners-path">{t.path}</p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span className="btn-label">{t.cta}</span>
            <kbd className="btn-key" aria-hidden="true">
              <CornerDownLeft size={15} strokeWidth={2.8} />
            </kbd>
          </a>
        </div>

        <div className="partners-panel rv d2">
          {/* les trois formes, comme les étapes d'un chemin */}
          <div
            className="partners-steps"
            role="tablist"
            aria-label={t.formsAria}
          >
            {t.forms.map((form, i) => (
              <button
                key={form.title}
                type="button"
                role="tab"
                id={`partenariat-${i}`}
                aria-selected={i === selected}
                aria-controls="partenariat-detail"
                className={i === selected ? "on" : undefined}
                onClick={() => setSelected(i)}
              >
                <span className="partners-step-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="partners-step-title">{form.title}</span>
                <span className="partners-step-duration">{form.duration}</span>
              </button>
            ))}
          </div>

          {/* Les trois vues sont empilées dans la même case : le panneau
              garde la hauteur de la plus longue et la page ne bouge pas. */}
          <div
            className="partners-stack"
            role="tabpanel"
            id="partenariat-detail"
            aria-labelledby={`partenariat-${selected}`}
          >
            {t.forms.map((form, i) => (
              <div
                key={form.title}
                className={`partners-view${i === selected ? " is-on" : ""}`}
                aria-hidden={i !== selected}
              >
                <p className="partners-desc">{form.description}</p>
                <FormArt form={form} index={i} />
                <div className="partners-roles">
                  <div>
                    <p className="partners-role-label">{t.youLabel}</p>
                    <ul>
                      {form.you.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="partners-roles-sep" aria-hidden="true">
                    <ArrowLeftRight size={16} strokeWidth={1.8} />
                  </span>
                  <div className="is-me">
                    <p className="partners-role-label">{t.meLabel}</p>
                    <ul>
                      {form.me.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {form.note && <p className="partners-note">{form.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
