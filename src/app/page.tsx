"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "../components/sections/Contact";
import Cursor from "@/components/ui/Cursor";
import Animations from "@/components/ui/Animations";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Cursor />
      <Animations />
      <Nav />
      <Hero />
      <Work />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <footer>
        <div className="w footer-i">
          <span className="footer-copy">
            2026 Manitriniaina Safidy Nasoavina
          </span>
          <span className="footer-r">
            Basé à Madagascar · Disponible Remote
          </span>
        </div>
      </footer>
    </main>
  );
}
