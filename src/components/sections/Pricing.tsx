"use client";

import { ArrowRight } from "lucide-react";
import { pricingOptions } from "@/lib/data/pricing";

const CAL_URL = "https://cal.com/nasoavina-manitriniaina-jo3qz1";

export default function Pricing() {
  return (
    <section id="tarifs" className="section has-pat">
      <div className="pat pat-cols" aria-hidden="true" />
      <div className="w">
        <div className="sec-head rv">
          <p className="sec-label">Tarifs</p>
          <h2 className="sec-title">Une structure claire.</h2>
          <p className="sec-lead">
            Pas de grille figée : je préfère cadrer avec vous avant de donner
            un chiffre.
          </p>
        </div>

        <ul className="bento">
          {pricingOptions.map((option, i) => {
            const delay = `rv d${i + 1}`;

            if (option.id === "discovery") {
              return (
                <li key={option.id} className={`card s2 price-card--free ${delay}`}>
                  <span className="pill pill--accent">{option.tag}</span>
                  <h3 className="card-title">{option.title}</h3>
                  <p className="card-desc">{option.description}</p>
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-sm"
                    style={{ alignSelf: "flex-start" }}
                  >
                    Réserver
                    <span className="chip" aria-hidden="true">
                      <ArrowRight size={15} strokeWidth={2.2} />
                    </span>
                  </a>
                </li>
              );
            }

            if (option.id === "project" || option.id === "daily") {
              return (
                <li key={option.id} className={`card s3 price-card--wide ${delay}`}>
                  <div>
                    <h3 className="card-title">{option.title}</h3>
                    <p className="card-desc">{option.description}</p>
                  </div>
                  <span className="pill pill--mono">{option.tag}</span>
                </li>
              );
            }

            return (
              <li key={option.id} className={`card s2 ${delay}`}>
                <span className="pill pill--mono">{option.tag}</span>
                <h3 className="card-title">{option.title}</h3>
                <p className="card-desc">{option.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
