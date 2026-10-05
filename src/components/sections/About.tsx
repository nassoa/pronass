"use client";

import { useI18n } from "@/i18n/I18nProvider";

export default function About() {
  const { dict } = useI18n();
  const t = dict.about;
  return (
    <section id="apropos" className="section">
      <div className="w">
        <div className="about-layout">
          <div className="about-photo rv">
            <img
              src="/pro-nas-2.jpg"
              alt={t.photoAlt}
            />
          </div>

          <div className="about-text rv d2">
            <p className="sec-label">{t.label}</p>
            <h2 className="sec-title">{t.title}</h2>
            <p className="about-lead">{t.lead}</p>
            <p className="about-bio">{t.bio}</p>
            {/* libellé lu avant la valeur, comme un début de phrase :
                « Basé à Madagascar », « Clients en Europe · Canada » */}
            <dl className="about-facts">
              {t.facts.map(({ label, value }) => (
                <div key={label} className="about-fact">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
