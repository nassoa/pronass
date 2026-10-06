import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

// Montserrat (titres) et Geist (texte), une association de fontpair.co,
// sont chargées via Google Fonts dans <head>.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Safidy Nasoavina · Partenaire technique : applications web, mobile et IA",
  description:
    "Développeur et lead technique indépendant depuis 10 ans. Je crée des applications web et mobiles, j'intègre l'IA à vos processus et j'accompagne vos décisions techniques.",
  keywords: [
    "partenaire technique",
    "développement web et mobile",
    "intégration IA",
    "automatisation",
    "lead technique",
    "CTO à temps partagé",
  ],
  authors: [{ name: "Safidy Nasoavina" }],
  creator: "Safidy Nasoavina",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.nasoavina.com/",
    siteName: "Safidy Nasoavina",
    title:
      "Safidy Nasoavina · Partenaire technique : applications web, mobile et IA",
    description:
      "Développeur et lead technique indépendant depuis 10 ans. Je crée des applications web et mobiles, j'intègre l'IA à vos processus et j'accompagne vos décisions techniques.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Safidy Nasoavina, partenaire technique indépendant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Safidy Nasoavina · Partenaire technique : applications web, mobile et IA",
    description:
      "Développeur et lead technique indépendant depuis 10 ans. Je crée des applications web et mobiles, j'intègre l'IA à vos processus et j'accompagne vos décisions techniques.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  metadataBase: new URL("https://www.nasoavina.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Avant le premier affichage :
            - « fx » : les éléments des sections restent invisibles jusqu'à
              leur fondu d'apparition (sinon ils s'affichent, disparaissent
              puis reviennent). Filet de sécurité : si le script principal
              ne démarre pas, tout s'affiche au bout de 4 s.
            - « fp-restoring » : arrivée ou rechargement sur une ancre
              (#apropos…), page masquée le temps de la replacer sur la bonne
              section (sinon le hero s'affiche un instant), 1,5 s au plus. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var r=document.documentElement;r.classList.add('fx');setTimeout(function(){if(!r.classList.contains('fx-ready'))r.classList.remove('fx')},4000);if(location.hash.length>1){r.classList.add('fp-restoring');setTimeout(function(){r.classList.remove('fp-restoring')},1500)}}",
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400..700&family=Geist:wght@400..700&display=swap"
        />
        <JsonLd />
        <GoogleAnalytics measurementId="G-PTBTRS6KVX" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
