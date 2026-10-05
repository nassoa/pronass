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
import Partners from "@/components/sections/Partners";
import Animations from "@/components/ui/Animations";
import { I18nProvider, useI18n } from "@/i18n/I18nProvider";

function SkipLink() {
  const { dict } = useI18n();
  return (
    <a href="#hero" className="skip-link">
      {dict.meta.skip}
    </a>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <SkipLink />
      <Animations />
      <Nav />
      <SideNav />
      <main>
        <Hero />
        <Services />
        <HowIWork />
        <Pricing />
        <Partners />
        <Experience />
        <About />
        <Contact />
      </main>
    </I18nProvider>
  );
}
