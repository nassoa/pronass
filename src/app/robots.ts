import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow: '/admin/', // Ajoutez ici les chemins à exclure si nécessaire
    },
    sitemap: "https://www.nasoavina.site/sitemap.xml",
  };
}
