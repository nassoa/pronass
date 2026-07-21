"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="w">
        <div className="about-grid">
          <div className="about-photo-frame rv">
            <div className="about-photo">
              <img
                src="/pro-nas-2.jpg"
                alt="Safidy Nasoavina — Développeur Front-End"
              />
              <div className="about-photo-fade"></div>
              <div className="about-badge">
                <div className="about-badge-dot"></div>
                <span>Open to work · Remote</span>
              </div>
            </div>
            <div className="about-exp-card">
              <div className="about-exp-num">8</div>
              <div className="about-exp-label">Ans d'exp.</div>
            </div>
          </div>

          <div className="about-right">
            <p className="sec-label rv-left">À propos</p>
            <h2 className="sec-title" style={{ margin: "10px 0 24px" }}>
              Développeur par métier,
              <br />
              <span style={{ color: "var(--a)", fontWeight: "300" }}>
                designer
              </span>{" "}
              par instinct
            </h2>
            <p className="about-bio rv">
              Je construis des interfaces depuis <strong>8 ans</strong> —
              d'abord en freelance, puis au sein d'équipes agiles en Europe et
              en Amérique du Nord. Je soigne l'intersection entre{" "}
              <strong>performance et esthétique</strong>, convaincu qu'un bon
              code et un bon design sont la même discipline.
              <br />
              <br />
              Basé à <strong>Madagascar</strong>, je collabore à distance avec
              des équipes internationales. Mon approche : écoute active,
              architecture évolutive, livraisons dans les délais,{" "}
              <strong>expérience utilisateur en priorité absolue.</strong>
            </p>
            <div className="beliefs rv d1">
              <div className="belief">
                <span className="belief-n">01</span>
                <div>
                  <div className="belief-title">
                    La rapidité est une fonctionnalité
                  </div>
                  <p className="belief-desc">
                    Un site rapide n'est pas un luxe — c'est du respect pour le
                    temps de l'utilisateur.
                  </p>
                </div>
              </div>
              <div className="belief">
                <span className="belief-n">02</span>
                <div>
                  <div className="belief-title">
                    L'accessibilité n'est pas optionnelle
                  </div>
                  <p className="belief-desc">
                    Chaque interface que je construis est conforme WCAG pour
                    tous les utilisateurs.
                  </p>
                </div>
              </div>
              <div className="belief">
                <span className="belief-n">03</span>
                <div>
                  <div className="belief-title">
                    Design et code : une seule discipline
                  </div>
                  <p className="belief-desc">
                    Je ferme le fossé entre Figma et le navigateur.
                    Pixel-perfect, à chaque livraison.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
