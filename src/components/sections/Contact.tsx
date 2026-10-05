"use client";

import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";

const links = [
  {
    name: "LinkedIn",
    handle: "in/manitriniaina-safidy-nasoavina",
    href: "https://www.linkedin.com/in/manitriniaina-safidy-nasoavina/",
  },
  {
    name: "GitHub",
    handle: "github.com/nassoa",
    href: "https://github.com/nassoa",
  },
  {
    name: "WhatsApp",
    handle: "+261 32 89 533 96",
    href: "https://wa.me/261328953396",
  },
  {
    name: "Curriculum vitæ",
    handle: "Télécharger le PDF",
    href: "https://pronass.vercel.app/cv/Nasoavina-CV.pdf",
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-halo" aria-hidden="true" />
      <div className="w contact-inner">
        <div className="contact-grid">
          <div className="contact-main rv">
            <p className="sec-label">Contact</p>
            <h2 className="contact-title">Parlons de votre projet.</h2>
            <p className="contact-sub">
              30 minutes, gratuites. On regarde le besoin, et si ça peut coller
              entre nous. Je réponds en général sous 24 h.
            </p>
            <div className="contact-btns">
              <a
                href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Prendre RDV
                <span className="chip" aria-hidden="true">
                  <ArrowRight size={16} strokeWidth={2.2} />
                </span>
              </a>
              <a href="mailto:hello@nasoavina.com" className="contact-mail">
                <Mail size={16} strokeWidth={1.8} aria-hidden />
                hello@nasoavina.com
              </a>
            </div>
          </div>

          <ul className="contact-links rv d2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cl"
                >
                  <span>
                    <span className="cl-name">{link.name}</span>
                    <br />
                    <span className="cl-handle">{link.handle}</span>
                  </span>
                  {link.download ? (
                    <Download size={18} strokeWidth={2} aria-hidden />
                  ) : (
                    <ArrowUpRight size={18} strokeWidth={2} aria-hidden />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="footer-i">
          <span>© 2026 Manitriniaina Safidy Nasoavina</span>
          <span>Disponible en remote</span>
        </footer>
      </div>
    </section>
  );
}
