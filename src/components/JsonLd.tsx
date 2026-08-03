export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Safidy Nasoavina",
    url: "https://www.nasoavina.com",
    image: "https://www.nasoavina.com/images/profile.png",
    jobTitle: "Lead technique & développeur full-stack indépendant",
    sameAs: ["https://github.com/nassoa"],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "React Native",
      "Architecture logicielle",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
