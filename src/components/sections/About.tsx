"use client";

const facts = [
  {
    label: "Base",
    value: "Madagascar",
    detail: "Remote",
  },
  {
    label: "Expérience",
    value: "10+ ans",
  },
  {
    label: "Clients",
    value: "Europe · Canada",
  },
];

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
          </aside>

          <div className="about-right">
            <p className="sec-label rv-left">À propos</p>
            <h2 className="sec-title">
              Lead technique, développement de bout en bout.
            </h2>
            <p className="about-bio rv">
              Mon rôle couvre le cadrage, les priorités et les choix techniques.
              <br />
              <br />
              Indépendant depuis plusieurs années, après des missions en Europe
              et au Canada. Je travaille surtout sur des produits web et mobile,
              en lead technique ou en développement full-stack.
            </p>
            <ul className="about-facts rv d1">
              {facts.map(({ label, value, detail }) => (
                <li key={label} className="about-fact">
                  <span className="about-fact-label">{label}</span>
                  <span className="about-fact-value">{value}</span>
                  {detail ? (
                    <span className="about-fact-detail">{detail}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
