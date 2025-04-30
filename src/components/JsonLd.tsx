export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Safidy Nasoavina",
    url: "https://www.nasoavina.site",
    image: "https://www.nasoavina.site/images/profile.png",
    jobTitle: "Développeur Front-End",
    sameAs: [
      "https://github.com/nassoa",
      // Autres profils...
    ],
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
