import type React from "react";
import type { Metadata } from "next";
import { Instrument_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Safidy Nasoavina | Lead technique & développeur full-stack indépendant",
  description:
    "Je transforme vos idées en produits qui tournent. Lead technique et développeur full-stack indépendant, plus de 10 ans d'expérience. Basé à Madagascar, en remote.",
  keywords: [
    "lead technique",
    "CTO freelance",
    "développeur full-stack",
    "Next.js",
    "React Native",
    "consultant technique",
  ],
  authors: [{ name: "Safidy Nasoavina" }],
  creator: "Safidy Nasoavina",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.nasoavina.com/",
    siteName: "Safidy Nasoavina",
    title:
      "Safidy Nasoavina | Lead technique & développeur full-stack indépendant",
    description:
      "Je transforme vos idées en produits qui tournent. Lead technique et développeur full-stack indépendant, plus de 10 ans d'expérience. Basé à Madagascar, en remote.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Safidy Nasoavina, lead technique indépendant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Safidy Nasoavina | Lead technique & développeur full-stack indépendant",
    description:
      "Je transforme vos idées en produits qui tournent. Lead technique et développeur full-stack indépendant, plus de 10 ans d'expérience.",
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
      className={`scroll-smooth ${instrument.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <JsonLd />
        <GoogleAnalytics measurementId="G-PTBTRS6KVX" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
