"use client";

import { services } from "@/lib/data/services";

const serviceMeta: Record<string, { label: string }> = {
  product: { label: "Parcours produit" },
  cto: { label: "Architecture" },
  audit: { label: "Audit" },
  "ai-ship": { label: "IA & livraison" },
  integrations: { label: "Connexions" },
  mobile: { label: "Mobile" },
  team: { label: "Équipe" },
};

const ink = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * Illustrations schématiques (blueprint) — trait fin + accent teal.
 * Métaphores alignées sur chaque responsabilité.
 */
function ServiceArt({ id }: { id: string }) {
  switch (id) {
    case "product":
      /* Escaliers de progression → livrable */
      return (
        <svg viewBox="0 0 88 64" className="svc-art" aria-hidden>
          <path
            {...ink}
            d="M2 54H18V42H30V30H42V18H54V10H66"
            className="svc-ink"
          />
          <circle cx="72" cy="10" r="4" className="svc-accent" />
        </svg>
      );

    case "cto":
      /* Organigramme / arborescence technique */
      return (
        <svg viewBox="0 0 88 64" className="svc-art" aria-hidden>
          <rect x="24" y="4" width="32" height="14" rx="2" {...ink} className="svc-ink" />
          <path {...ink} d="M40 18V28H12V34M40 28H68V34" className="svc-ink" />
          <rect x="2" y="34" width="22" height="14" rx="2" {...ink} className="svc-ink" />
          <rect x="30" y="34" width="22" height="14" rx="2" {...ink} className="svc-ink" />
          <rect x="58" y="34" width="22" height="14" rx="2" {...ink} className="svc-ink" />
          <circle cx="40" cy="11" r="2.5" className="svc-accent" />
        </svg>
      );

    case "audit":
      /* Document + loupe */
      return (
        <svg viewBox="0 0 88 64" className="svc-art" aria-hidden>
          <rect x="2" y="6" width="34" height="46" rx="3" {...ink} className="svc-ink" />
          <path {...ink} d="M10 18h18M10 26h14M10 34h16M10 42h10" className="svc-ink" />
          <circle cx="52" cy="38" r="12" {...ink} className="svc-ink" />
          <path {...ink} d="M61 47l12 12" className="svc-ink" />
          <circle cx="52" cy="38" r="3" className="svc-accent" />
        </svg>
      );

    case "ai-ship":
      /* Chaos IA → flèche → structure livrable */
      return (
        <svg viewBox="0 0 132 64" className="svc-art svc-art--wide" aria-hidden>
          <path
            {...ink}
            d="M2 18c4-8 10 8 14 0s8 10 12 2 6-10 10 2 6 8 10-2"
            className="svc-ink"
          />
          <path
            {...ink}
            d="M4 36c5 6 9-8 14-2s7 8 11-2 8-6 12 4"
            className="svc-ink"
          />
          <path
            {...ink}
            d="M6 52c4-6 8 4 12 0s6-8 10 2 8 4 12-4"
            className="svc-ink"
            opacity="0.55"
          />
          <path
            {...ink}
            d="M54 32H78"
            strokeDasharray="3 3"
            className="svc-ink"
          />
          <path {...ink} d="M74 26l8 6-8 6" className="svc-ink" />
          <path {...ink} d="M90 20h32M90 32h28M90 44h24" className="svc-ink" />
          <circle cx="118" cy="20" r="3" className="svc-accent" />
        </svg>
      );

    case "integrations":
      /* Nœuds API / flux */
      return (
        <svg viewBox="0 0 88 64" className="svc-art" aria-hidden>
          <circle cx="10" cy="18" r="7" {...ink} className="svc-ink" />
          <circle cx="62" cy="14" r="6" {...ink} className="svc-ink" />
          <circle cx="56" cy="46" r="7" {...ink} className="svc-ink" />
          <circle cx="16" cy="48" r="5" {...ink} className="svc-ink" />
          <path
            {...ink}
            d="M16 22c10 2 28-4 40-6M54 20c2 8 0 16-4 20M22 44c10-2 20-2 28 0M14 25c0 8 0 16 4 18"
            className="svc-ink"
          />
          <circle cx="10" cy="18" r="3" className="svc-accent" />
        </svg>
      );

    case "mobile":
      /* Smartphone + UI */
      return (
        <svg viewBox="0 0 40 64" className="svc-art" aria-hidden>
          <rect x="2" y="2" width="32" height="60" rx="6" {...ink} className="svc-ink" />
          <path {...ink} d="M12 8h12" className="svc-ink" />
          <rect x="8" y="16" width="20" height="12" rx="1.5" {...ink} className="svc-ink" />
          <path {...ink} d="M8 36h20M8 42h14M8 48h17" className="svc-ink" />
          <circle cx="18" cy="56" r="2" className="svc-accent" />
        </svg>
      );

    case "team":
      /* Trois cercles — collaboration */
      return (
        <svg viewBox="0 0 72 64" className="svc-art" aria-hidden>
          <circle cx="22" cy="22" r="16" {...ink} className="svc-ink" />
          <circle cx="42" cy="22" r="16" {...ink} className="svc-ink" />
          <circle cx="32" cy="40" r="16" {...ink} className="svc-ink" />
          <circle cx="32" cy="28" r="3.5" className="svc-accent" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 40 40" className="svc-art" aria-hidden>
          <circle cx="20" cy="20" r="16" {...ink} className="svc-ink" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="w">
        <div className="sec-head rv">
          <p className="sec-label rv-left">Services</p>
          <h2 className="sec-title">
            Un seul contact, du premier brief au résultat.
          </h2>
          <p className="sec-lead">
            Vous n&apos;avez pas à gérer plusieurs prestataires ni à traduire
            vos besoins en specs techniques. Je prends le projet en main et
            j&apos;en reste responsable jusqu&apos;au bout.
          </p>
        </div>

        <ul className="svc-grid">
          {services.map((service, i) => {
            const meta = serviceMeta[service.id] ?? { label: service.title };

            return (
              <li
                key={service.id}
                className={`svc-card rv d${Math.min(i + 1, 8)}${service.featured ? " is-featured" : ""}`}
              >
                <div className="svc-head">
                  <div className="svc-art-wrap" aria-hidden="true">
                    <ServiceArt id={service.id} />
                  </div>
                  <span className="svc-num" aria-hidden="true">
                    {service.number}
                  </span>
                </div>

                <div className="svc-content">
                  <p className="svc-meta">{meta.label}</p>
                  <div className="svc-title-row">
                    <h3 className="svc-name">{service.title}</h3>
                    {service.featured && (
                      <span className="svc-featured-tag">Le plus demandé</span>
                    )}
                  </div>
                  <p className="svc-desc">{service.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
