import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/app/GoogleAnalytics";

import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Safidy Nasoavina | Développeur Front-End (React & Next.js)",
  description:
    "Portfolio de Safidy Nasoavina, développeur front-end spécialisé en React.js et Next.js. Freelance basé à Madagascar.",
  keywords: [
    "développeur front-end",
    "React.js",
    "Next.js",
    "développeur web",
    "JavaScript",
  ],
  authors: [{ name: "Safidy Nasoavina" }],
  creator: "Safidy Nasoavina",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.nasoavina.com/",
    siteName: "Portfolio de Safidy Nasoavina",
    title: "Safidy Nasoavina | Développeur Front-End (React & Next.js)",
    description:
      "Portfolio de Safidy Nasoavina, développeur front-end spécialisé en React.js et Next.js. Freelance basé à Madagascar.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de Safidy Nasoavina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safidy Nasoavina | Développeur Front-End (React & Next.js)",
    description:
      "Portfolio de Safidy Nasoavina, développeur front-end spécialisé en React.js et Next.js. Freelance basé à Madagascar.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  metadataBase: new URL("https://www.nasoavina.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Cabinet Grotesk — headlines, display */}
        {/* Satoshi — body text */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@300,400,500,600,700,800,900&f[]=satoshi@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* DM Mono — code, labels, monospace */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
        <GoogleAnalytics measurementId="G-PTBTRS6KVX" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
