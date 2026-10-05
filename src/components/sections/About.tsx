"use client";

const facts = [
  { label: "Base", value: "Madagascar" },
  { label: "Expérience", value: "10+ ans" },
  { label: "Clients", value: "Europe · Canada" },
];

export default function About() {
  return (
    <section id="apropos" className="section">
      <div className="w">
        <div className="about-layout">
          <div className="about-photo rv">
            <img
              src="/pro-nas-2.jpg"
              alt="Safidy Nasoavina, lead technique indépendant"
            />
          </div>

          <div className="about-text rv d2">
            <p className="sec-label">À propos</p>
            <h2 className="sec-title">
              Lead technique, développement de bout en bout.
            </h2>
            <p className="about-lead">
              Mon rôle couvre le cadrage, les priorités et les choix techniques.
            </p>
            <p className="about-bio">
              Indépendant depuis plusieurs années, après des missions en Europe
              et au Canada. Je travaille surtout sur des produits web et mobile,
              en lead technique ou en développement full-stack.
            </p>
            <dl className="about-facts">
              {facts.map(({ label, value }) => (
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
