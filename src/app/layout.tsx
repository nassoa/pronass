import type React from "react";
import type { Metadata } from "next";
import { Bakbak_One, Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/app/GoogleAnalytics";

import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const bakbak = Bakbak_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bakbak",
  display: "swap",
});

const balooBhai = Baloo_Bhai_2({
  subsets: ["latin"],
  variable: "--font-baloo-bhai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Safidy Nasoavina | Développeur Front-End",
  description:
    "Portfolio de Safidy Nasoavina, développeur front-end spécialisé en React.js et Next.js",
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
    url: "https://www.nasoavina.site/",
    siteName: "Portfolio de Safidy Nasoavina",
    title: "Safidy Nasoavina | Développeur Front-End",
    description:
      "Portfolio de Safidy Nasoavina, développeur front-end spécialisé en React.js et Next.js",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Safidy Nasoavina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safidy Nasoavina | Développeur Front-End",
    description:
      "Portfolio de Safidy Nasoavina, développeur front-end spécialisé en React.js et Next.js",
    images: ["/images/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  metadataBase: new URL("https://www.nasoavina.site/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd />
        <GoogleAnalytics measurementId="G-PTBTRS6KVX" />
      </head>
      <body className={`${bakbak.variable} ${balooBhai.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
