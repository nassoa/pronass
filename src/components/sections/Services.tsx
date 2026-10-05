"use client";

import {
  ArrowRight,
  CreditCard,
  Database,
  FlaskConical,
  Gauge,
  GitMerge,
  ShieldCheck,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { aiShipChecks, services, type Service } from "@/lib/data/services";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

// Une icône par point couvert (même ordre que aiShipChecks)
const checkIcons: LucideIcon[] = [
  ShieldCheck, // Sécurité & secrets
  CreditCard, // Auth & paiements
  TriangleAlert, // Gestion des erreurs
  FlaskConical, // Tests essentiels
  GitMerge, // CI/CD & déploiement
  Gauge, // Performance
];

/* ── Illustrations ─────────────────────────────── */

function DiffWindow() {
  return (
    <div className="win win--diff" aria-hidden="true">
      <div className="win-head">
        <span>api/checkout.ts</span>
        <span>prototype → prod</span>
      </div>
      <div className="win-body">
        <div className="diff-del">- const key = &quot;sk_live_…&quot;</div>
        <div className="diff-del">- // TODO: gérer les erreurs</div>
        <div className="diff-add">+ const key = env.STRIPE_KEY</div>
        <div className="diff-add">+ await rateLimit(req)</div>
        <div className="diff-add">+ return handle(err, res)</div>
      </div>
      <div className="win-status">
        <div>
          <span>
            <span className="ok">✓</span> lint
          </span>
          <span className="dim">ok</span>
        </div>
        <div>
          <span>
            <span className="ok">✓</span> tests
          </span>
          <span className="dim">ok</span>
        </div>
        <div>
          <span>
            <span className="ok">✓</span> build
          </span>
          <span className="dim">ok</span>
        </div>
        <div>
          <span>
            <span className="ok">●</span>{" "}
            <span className="strong">déployé en production</span>
          </span>
          <span className="live">live</span>
        </div>
      </div>
    </div>
  );
}

function ProductSteps() {
  const steps = ["Cadrage", "Développement", "Intégrations"];
  return (
    <div className="steps" aria-hidden="true">
      {steps.map((step) => (
        <div key={step}>
          <div className="step">
            <span className="step-dot" />
            {step}
          </div>
          <div className="step-line" />
        </div>
      ))}
      <div className="step step--done">
        <span className="step-dot" />
        En production
      </div>
    </div>
  );
}

function ArchDiagram() {
  return (
    <div className="arch" aria-hidden="true">
      <div className="arch-col">
        <span className="arch-node">Web</span>
        <span className="arch-node">Mobile</span>
      </div>
      <span className="arch-merge" />
      <span className="arch-link" />
      <span className="arch-node arch-node--main">API</span>
      <span className="arch-link" />
      <span className="arch-node">
        <Database size={12} strokeWidth={2} color="#8B8B93" />
        DB
      </span>
    </div>
  );
}

function AuditReport() {
  const rows: [string, string, string][] = [
    ["Sécurité", "à corriger", "warn"],
    ["Performance", "à revoir", "warn"],
    ["Tests", "absents", "dim"],
    ["Plan d'action", "prêt", "ok"],
  ];
  return (
    <div className="win win-pad" aria-hidden="true">
      {rows.map(([label, value, tone]) => (
        <div key={label} className="audit-row">
          <span>{label}</span>
          <span className={tone === "dim" ? "card-meta" : tone}>{value}</span>
        </div>
      ))}
    </div>
  );
}

function MobileBuild() {
  return (
    <div className="win win-pad" aria-hidden="true">
      <span>
        <span style={{ color: "var(--violet)" }}>$</span> eas build --platform
        all
      </span>
      <span>
        <span className="ok">✓</span> iOS · TestFlight
      </span>
      <span>
        <span className="ok">✓</span> Android · Play Store
      </span>
    </div>
  );
}

const art: Record<Exclude<Service["id"], "ai-ship">, () => JSX.Element> = {
  product: ProductSteps,
  cto: ArchDiagram,
  audit: AuditReport,
  mobile: MobileBuild,
};

/* ── Section ───────────────────────────────────── */

export default function Services() {
  return (
    <section id="services" className="section has-pat">
      <div className="pat pat-dots" aria-hidden="true" />
      <div className="w">
        <div className="sec-head rv">
          <p className="sec-label">Services</p>
          <h2 className="sec-title">
            Cinq façons de faire avancer un projet technique.
          </h2>
          <p className="sec-lead">
            Selon où en est votre projet : du premier brief à la reprise
            d&apos;un code devenu difficile à maintenir.
          </p>
        </div>

        <ul className="bento">
          {services.map((service, i) => {
            if (service.id === "ai-ship") {
              return (
                <li
                  key={service.id}
                  className={`card s4 svc-feature rv d${i + 1}`}
                >
                  <div className="svc-feature-text">
                    <div className="svc-feature-head">
                      <span className="card-meta">{service.label}</span>
                      <span className="pill pill--accent">Le plus demandé</span>
                    </div>
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-desc">{service.description}</p>
                    <ul className="svc-checks">
                      {aiShipChecks.map((item, j) => {
                        const Icon = checkIcons[j] ?? ShieldCheck;
                        return (
                          <li key={item}>
                            <Icon size={15} strokeWidth={2} aria-hidden />
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                    <a
                      href={CAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      Faire le point sur votre projet
                      <ArrowRight size={15} strokeWidth={2.2} aria-hidden />
                    </a>
                  </div>
                  <DiffWindow />
                </li>
              );
            }

            const Art = art[service.id];
            return (
              <li key={service.id} className={`card s2 rv d${i + 1}`}>
                <div className="svc-art">
                  <Art />
                </div>
                <span className="card-meta">{service.label}</span>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
