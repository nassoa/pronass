"use client";

import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="w">
        <div className="contact-grid">
          <div className="rv">
            <p className="contact-label">Contact</p>
            <h2 className="contact-title">
              Parlons de
              <br />
              votre projet.
            </h2>
            <p className="contact-sub">
              30 minutes, gratuites, pour qu&apos;on comprenne le besoin
              ensemble et qu&apos;on voie si ça peut coller. Je réponds sous 24h
              en général.
            </p>
            <div className="contact-btns">
              <a
                href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact"
              >
                Prendre RDV
              </a>
              <a href="mailto:hello@nasoavina.com" className="btn-contact-ghost">
                <Mail size={16} strokeWidth={1.75} />
                hello@nasoavina.com
              </a>
            </div>
          </div>

          <ul className="contact-links rv d2">
            <li>
              <a
                href="https://www.linkedin.com/in/manitriniaina-safidy-nasoavina/"
                target="_blank"
                rel="noopener noreferrer"
                className="cl"
              >
                <div>
                  <div className="cl-name">LinkedIn</div>
                  <div className="cl-handle">
                    manitriniaina-safidy-nasoavina
                  </div>
                </div>
                <span className="cl-arr" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.75} />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nassoa"
                target="_blank"
                rel="noopener noreferrer"
                className="cl"
              >
                <div>
                  <div className="cl-name">GitHub</div>
                  <div className="cl-handle">github.com/nassoa</div>
                </div>
                <span className="cl-arr" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.75} />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/261328953396"
                target="_blank"
                rel="noopener noreferrer"
                className="cl"
              >
                <div>
                  <div className="cl-name">WhatsApp</div>
                  <div className="cl-handle">+261 32 895 3396</div>
                </div>
                <span className="cl-arr" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.75} />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://pronass.vercel.app/cv/Nasoavina-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cl"
              >
                <div>
                  <div className="cl-name">Curriculum Vitæ</div>
                  <div className="cl-handle">Télécharger le PDF</div>
                </div>
                <span className="cl-arr" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.75} />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
