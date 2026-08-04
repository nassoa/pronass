"use client";

import { Handshake, Sparkles, FileCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="w">
        <div className="about-grid">
          <aside className="about-left rv">
            <div className="about-photo">
              <img
                src="/pro-nas-2.jpg"
                alt="Safidy Nasoavina, lead technique indépendant"
              />
            </div>
            <div className="about-photo-meta">
              <span>Lead technique</span>
              <span>10+ ans</span>
            </div>
          </aside>

          <div className="about-right">
            <p className="sec-label rv-left">À propos</p>
            <h2 className="sec-title">
              Lead technique, développement de bout en bout.
            </h2>
            <p className="about-bio rv">
              Le rôle couvre le cadrage, les priorités et les choix techniques,
              avec une responsabilité qui va jusqu&apos;à la mise en production.
              <br />
              <br />
              Avec les outils actuels, à peu près n&apos;importe qui peut sortir
              un bout de code qui marche. Ce qui fait la différence, de mon
              point de vue, c&apos;est de savoir ce qu&apos;il faut construire,
              et de tenir la structure propre une fois que le prototype a fait
              ses preuves.
              <br />
              <br />
              Je suis basé à Madagascar et je travaille à distance,
              principalement avec des clients en Europe et au Canada.
            </p>
            <ul className="beliefs rv d1">
              <li className="belief">
                <div className="belief-n" aria-hidden="true">
                  <Handshake size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="belief-title">Un seul interlocuteur</div>
                  <p className="belief-desc">
                    Vous me parlez directement, pas à un intermédiaire qui
                    relaie vos messages à quelqu&apos;un d&apos;autre.
                  </p>
                </div>
              </li>
              <li className="belief">
                <div className="belief-n" aria-hidden="true">
                  <Sparkles size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="belief-title">
                    Les outils IA, oui, mais encadrés
                  </div>
                  <p className="belief-desc">
                    J&apos;utilise Cursor, Claude et consorts au quotidien, mais
                    je ne saute pas l&apos;étape d&apos;architecture. C&apos;est
                    justement ce qui distingue un prototype d&apos;un produit
                    qui tient.
                  </p>
                </div>
              </li>
              <li className="belief">
                <div className="belief-n" aria-hidden="true">
                  <FileCheck size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="belief-title">Des produits qui durent</div>
                  <p className="belief-desc">
                    Code lisible, documenté, repris par votre équipe ou un autre
                    prestataire sans friction.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
