"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowIWork from "@/components/sections/HowIWork";
import Pricing from "@/components/sections/Pricing";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Animations from "@/components/ui/Animations";

export default function Home() {
  return (
    <main>
      <a href="#hero" className="skip-link">
        Aller au contenu
      </a>
      <Animations />
      <Nav />
      <Hero />
      <Services />
      <HowIWork />
      <Experience />
      <Pricing />
      <About />
      <Contact />
      <footer>
        <div className="w footer-i">
          <span className="footer-copy">
            © 2026 Manitriniaina Safidy Nasoavina
          </span>
          <span className="footer-r">Disponible en remote</span>
        </div>
      </footer>
    </main>
  );
}
