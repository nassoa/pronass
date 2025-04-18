import type React from "react";
import type { Metadata } from "next";
import { Bakbak_One, Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${bakbak.variable} ${balooBhai.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
