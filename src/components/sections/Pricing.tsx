"use client";

import { pricingOptions } from "@/lib/data/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="w">
        <div className="sec-head rv">
          <p className="sec-label rv-left">Tarifs</p>
          <h2 className="sec-title">Une structure claire</h2>
          <p className="sec-lead">
            Je n&apos;affiche pas de prix fixes ici : chaque mission est cadrée
            avec vous avant de démarrer, pour un devis qui correspond vraiment
            au besoin.
          </p>
        </div>

        <ul className="price-list">
          {pricingOptions.map((option, i) => (
            <li
              key={option.id}
              className={`price-item rv d${Math.min(i + 1, 8)}${option.id === "discovery" ? " is-free" : ""}`}
            >
              <span className="price-tag">{option.tag}</span>
              <h3 className="price-name">{option.title}</h3>
              <p className="price-desc">{option.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
