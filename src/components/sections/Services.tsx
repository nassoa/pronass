"use client";

import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  CreditCard,
  Database,
  FlaskConical,
  Gauge,
  GitMerge,
  GitPullRequest,
  Layers,
  ListChecks,
  ListOrdered,
  Package,
  Plug,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Store,
  TriangleAlert,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/lib/data/services";
import { useStepMode, useStepTrack } from "@/lib/useStepTrack";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

// Une icône par point couvert, dans l'ordre de service.points
const pointIcons: Record<Service["id"], LucideIcon[]> = {
  "ai-ship": [
    ShieldCheck,
    CreditCard,
    TriangleAlert,
    FlaskConical,
    GitMerge,
    Gauge,
  ],
  product: [ClipboardList, CreditCard, Plug, Server],
  cto: [Layers, GitPullRequest, ListOrdered, Users],
  audit: [Search, ShieldCheck, ListChecks, Wrench],
  mobile: [Smartphone, Package, Store, BadgeCheck],
};

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

// Les éléments .art-more sont des détails en plus, affichés seulement dans
// le grand cadre de la pile (grand écran) ; masqués dans les cartes mobiles.

function ProductSteps() {
  const steps: [string, string][] = [
    ["Cadrage", "sem. 1"],
    ["Développement", "sem. 2–5"],
    ["Intégrations", "sem. 6"],
  ];
  return (
    <div className="steps" aria-hidden="true">
      <div className="art-more art-meta">
        <span>roadmap.md</span>
        <span>v1.0</span>
      </div>
      {steps.map(([step, when]) => (
        <div key={step}>
          <div className="step">
            <span className="step-dot" />
            {step}
            <span className="art-more step-meta">{when}</span>
          </div>
          <div className="step-line" />
        </div>
      ))}
      <div className="step step--done">
        <span className="step-dot" />
        En production
        <span className="art-more step-meta">live</span>
      </div>
    </div>
  );
}

function ArchDiagram() {
  return (
    <div className="arch" aria-hidden="true">
      <div className="art-more art-meta">
        <span>architecture</span>
        <span>cible</span>
      </div>
      <div className="arch-flow">
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
      <div className="art-more arch-stack">
        Next.js · NestJS · PostgreSQL
      </div>
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
    <div className="win art-win" aria-hidden="true">
      <div className="win-head art-more">
        <span>audit.md</span>
        <span>rapport</span>
      </div>
      <div className="win-pad">
        {rows.map(([label, value, tone]) => (
          <div key={label} className="audit-row">
            <span>{label}</span>
            <span className={tone === "dim" ? "card-meta" : tone}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileBuild() {
  return (
    <div className="win art-win" aria-hidden="true">
      <div className="win-head art-more">
        <span>terminal</span>
        <span>expo</span>
      </div>
      <div className="win-pad">
        <span>
          <span className="art-q">$</span> eas build --platform all
        </span>
        <span>
          <span className="ok">✓</span> iOS · TestFlight
        </span>
        <span>
          <span className="ok">✓</span> Android · Play Store
        </span>
        <span className="art-more">
          <span className="art-q">$</span> eas submit --platform ios
        </span>
        <span className="art-more">
          <span className="art-q">●</span> en revue · App Store
        </span>
      </div>
    </div>
  );
}

const art: Record<Exclude<Service["id"], "ai-ship">, () => JSX.Element> = {
  product: ProductSteps,
  cto: ArchDiagram,
  audit: AuditReport,
  mobile: MobileBuild,
};

/* ── Blocs communs ─────────────────────────────── */

function SectionHead({ className = "" }: { className?: string }) {
  return (
    <div className={`sec-head ${className}`}>
      <p className="sec-label">Services</p>
      <h2 className="sec-title">
        Cinq façons de faire avancer un projet technique.
      </h2>
      <p className="sec-lead">
        Selon où en est votre projet : du premier brief à la reprise d&apos;un
        code devenu difficile à maintenir.
      </p>
    </div>
  );
}

function ServicePoints({ service }: { service: Service }) {
  return (
    <ul className="svc-checks">
      {service.points.map((item, j) => {
        const Icon = pointIcons[service.id][j] ?? ShieldCheck;
        return (
          <li key={item}>
            <Icon size={15} strokeWidth={2} aria-hidden />
            {item}
          </li>
        );
      })}
    </ul>
  );
}

function CalLink({ hidden = false }: { hidden?: boolean }) {
  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-link"
      tabIndex={hidden ? -1 : undefined}
    >
      Faire le point sur votre projet
      <ArrowRight size={15} strokeWidth={2.2} aria-hidden />
    </a>
  );
}

const artFor = (id: Service["id"]) => (id === "ai-ship" ? DiffWindow : art[id]);

/* ── Grand écran : liste à gauche, détail à droite ─
   La section est une piste à étapes (comme Parcours) : chaque geste de
   molette passe au service suivant, un clic dans la liste y va directement.
   Tout tient dans un écran, sans défilement interne. */

function ServicesSteps() {
  const { trackRef, active, goTo } = useStepTrack(services.length);

  return (
    <div ref={trackRef} className="step-track">
      <div className="step-sticky">
        <div className="pat pat-dots" aria-hidden="true" />
        <div className="w svc-split">
          <div className="svc-side rv">
            <SectionHead />
            <ol className="svc-index">
              {services.map((service, i) => (
                <li key={service.id}>
                  <button
                    type="button"
                    className={i === active ? "on" : undefined}
                    aria-current={i === active ? "true" : undefined}
                    onClick={() => goTo(i)}
                  >
                    <span className="svc-index-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {service.short}
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* Pile de cartes : la carte du service affiché devant, toutes les
              suivantes dépassent derrière, au-dessus ; les précédentes sont
              sorties par le bas. Changer de service fait avancer la pile. */}
          <div className="svc-deck rv d2">
            {services.map((service, i) => {
              const Art = artFor(service.id);
              const depth = i - active;
              const pos =
                depth < 0 ? "past" : depth > 4 ? "hidden" : String(depth);
              return (
                <article
                  key={service.id}
                  className="card svc-card"
                  data-pos={pos}
                  aria-hidden={depth !== 0}
                >
                  <div className="svc-card-body">
                    <div className="svc-detail-art">
                      <Art />
                    </div>
                    <div className="svc-feature-head">
                      <span className="card-meta">{service.label}</span>
                      {service.featured && (
                        <span className="pill pill--accent">
                          Le plus demandé
                        </span>
                      )}
                    </div>
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-desc">{service.description}</p>
                    <ServicePoints service={service} />
                    <CalLink hidden={depth !== 0} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile : carrousel de cartes ──────────────── */

function ServicesGrid() {
  return (
    <>
      <div className="pat pat-dots" aria-hidden="true" />
      <div className="w">
        <SectionHead className="rv" />

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
                    <ServicePoints service={service} />
                    <CalLink />
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
    </>
  );
}

/* ── Section ───────────────────────────────────── */

export default function Services() {
  const steps = useStepMode();
  // Toujours le même élément <section> : Animations garde une référence
  // aux sections de la page, il ne doit pas être remplacé au changement
  // de mise en page.
  return (
    <section
      id="services"
      className={steps ? "has-pat stepped svc-steps" : "section has-pat"}
      style={{ ["--steps" as string]: services.length }}
      data-steps={steps ? services.length : undefined}
    >
      {steps ? <ServicesSteps /> : <ServicesGrid />}
    </section>
  );
}
