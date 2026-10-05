export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Safidy Nasoavina",
    url: "https://www.nasoavina.com",
    image: "https://www.nasoavina.com/images/profile.jpg",
    jobTitle:
      "Partenaire technique indépendant : développement web et mobile, IA et direction technique",
    sameAs: [
      "https://github.com/nassoa",
      "https://www.linkedin.com/in/manitriniaina-safidy-nasoavina/",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "React Native",
      "Architecture logicielle",
      "Intégration de l'IA",
      "Automatisation de processus",
      "Direction technique",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
