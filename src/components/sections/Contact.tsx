"use client";

import {
  ArrowUpRight,
  CornerDownLeft,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const links = [
  {
    name: "LinkedIn",
    handle: "in/manitriniaina-safidy-nasoavina",
    href: "https://www.linkedin.com/in/manitriniaina-safidy-nasoavina/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    handle: "github.com/nassoa",
    href: "https://github.com/nassoa",
    icon: Github,
  },
  {
    name: "WhatsApp",
    handle: "+261 32 89 533 96",
    href: "https://wa.me/261328953396",
    icon: MessageCircle,
  },
  {
    // nom et sous-titre traduits (contact.cvName / contact.cvHandle)
    name: "cv",
    handle: "",
    href: "https://pronass.vercel.app/cv/Nasoavina-CV.pdf",
    icon: FileText,
    download: true,
  },
];

export default function Contact() {
  const { dict } = useI18n();
  const t = dict.contact;
  return (
    <section id="contact" className="has-pat">
      <div className="pat pat-rings" aria-hidden="true" />
      <div className="contact-halo" aria-hidden="true" />
      <div className="w contact-inner">
        <div className="contact-grid">
          <div className="contact-main rv">
            <p className="sec-label">{t.label}</p>
            <h2 className="contact-title">{t.title}</h2>
            <p className="contact-sub">{t.sub}</p>
            <div className="contact-btns">
              <a
                href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span className="btn-label">{t.cta}</span>
                <kbd className="btn-key" aria-hidden="true">
                  <CornerDownLeft size={15} strokeWidth={2.8} />
                </kbd>
              </a>
              <a href="mailto:hello@nasoavina.com" className="contact-mail">
                <Mail size={16} strokeWidth={1.8} aria-hidden />
                hello@nasoavina.com
              </a>
            </div>
          </div>

          <div className="contact-card rv d2">
            <p className="contact-card-head">{t.cardHead}</p>
            <ul className="contact-links">
              {links.map(({ name, handle, href, icon: Icon, download }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cl${download ? " cl--cv" : ""}`}
                  >
                    <span className="cl-icon" aria-hidden="true">
                      <Icon size={17} strokeWidth={1.9} />
                    </span>
                    <span className="cl-text">
                      <span className="cl-name">
                        {download ? t.cvName : name}
                      </span>
                      <span className="cl-handle">
                        {download ? t.cvHandle : handle}
                      </span>
                    </span>
                    {download ? (
                      <Download
                        className="cl-arrow"
                        size={17}
                        strokeWidth={2}
                        aria-hidden
                      />
                    ) : (
                      <ArrowUpRight
                        className="cl-arrow"
                        size={17}
                        strokeWidth={2}
                        aria-hidden
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
