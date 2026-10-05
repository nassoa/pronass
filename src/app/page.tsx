"use client";

import Nav from "@/components/Nav";
import SideNav from "@/components/SideNav";
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
    <>
      <a href="#hero" className="skip-link">
        Aller au contenu
      </a>
      <Animations />
      <Nav />
      <SideNav />
      <main>
        <Hero />
        <Services />
        <HowIWork />
        <Experience />
        <Pricing />
        <About />
        <Contact />
      </main>
    </>
  );
}
