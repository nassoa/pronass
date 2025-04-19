"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Github,
  Mail,
  FileText,
  BookUser,
  FileBadge,
  Brain,
  Proportions,
  MessageSquareShare,
  FolderKanban,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "@/components/social-links";
import { ExperienceCard } from "@/components/experience-card";
import { FaWhatsapp } from "react-icons/fa";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <div className="flex flex-col lg:flex-row container mx-auto">
        {/* Sidebar - Fixed on desktop */}
        <aside className="lg:fixed lg:w-[350px] lg:h-screen py-8 lg:p-12 lg:overflow-y-auto">
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-8">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden  dark:border-gray-800">
                <Image
                  src="/images/profile.png"
                  alt="Manitriniaina Safidy Nasoavina"
                  fill
                  sizes="(max-width: 640px) 112px, 112px"
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
                  Manitriniaina <br /> Safidy Nasoavina
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-bold">
                  Développeur Front-End
                </p>
                <p className="text-gray-600 dark:text-gray-400 max-w-xs">
                  Expert en React.js et Next.js. Je crée des expériences web
                  performantes et élégantes.
                </p>
              </div>

              <nav className="space-y-4">
                <Link
                  href="#about"
                  className={`group block text-sm font-medium transition-colors ${
                    activeSection === "about"
                      ? "text-yellow-500 dark:text-yellow-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="inline-block h-[1px] bg-current mr-2 transition-all duration-200 ease-in-out w-8 group-hover:w-10"></span>
                    À propos
                  </div>
                </Link>
                <Link
                  href="#experience"
                  className={`group block text-sm font-medium transition-colors ${
                    activeSection === "experience"
                      ? "text-yellow-500 dark:text-yellow-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="inline-block h-[1px] bg-current mr-2 transition-all duration-200 ease-in-out w-8 group-hover:w-10"></span>
                    Experiences
                  </div>
                </Link>
                <Link
                  href="#skills"
                  className={`group block text-sm font-medium transition-colors ${
                    activeSection === "skills"
                      ? "text-yellow-500 dark:text-yellow-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="inline-block h-[1px] bg-current mr-2 transition-all duration-200 ease-in-out w-8 group-hover:w-10"></span>
                    Compétences
                  </div>
                </Link>
                <Link
                  href="#projects"
                  className={`group block text-sm font-medium transition-colors ${
                    activeSection === "projects"
                      ? "text-yellow-500 dark:text-yellow-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="inline-block h-[1px] bg-current mr-2 transition-all duration-200 ease-in-out w-8 group-hover:w-10"></span>
                    Projets réalisés
                  </div>
                </Link>
                <Link
                  href="#contact"
                  className={`group block text-sm font-medium transition-colors ${
                    activeSection === "contact"
                      ? "text-yellow-500 dark:text-yellow-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="inline-block h-[1px] bg-current mr-2 transition-all duration-200 ease-in-out w-8 group-hover:w-10"></span>
                    Contact
                  </div>
                </Link>
              </nav>

              <div className="flex gap-4">
                <Link href="/cv/Nasoavina-CV.pdf" target="_blank">
                  <Button className="bg-yellow-300 hover:bg-yellow-400 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-gray-900 h-9 rounded-md text-sm group overflow-hidden">
                    <div className="flex items-center">
                      <FileText className="h-3.5 w-3.5 mr-2" />
                      <span>CV</span>
                      <span className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:ml-1.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Button>
                </Link>
                <Link
                  href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 h-9 rounded-md text-sm group overflow-hidden"
                  >
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-2" />
                      <span>Prendre rendez-vous</span>
                      <span className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:ml-1.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="flex items-center justify-between">
                <SocialLinks />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content - Scrollable */}
        <main className="lg:ml-[350px] w-full py-8 lg:p-12">
          {/* About Section */}
          <section id="about" className="mb-16 max-w-2xl">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-x-3">
              <FileBadge className="h-5 w-5" />
              <span>À propos</span>
              <span className="mt-1 block flex-grow h-[1px] bg-gray-300 dark:bg-slate-200"></span>
            </h2>
            <div className="space-y-4 pl-8">
              <p className="text-gray-600 dark:text-gray-400">
                Développeur front-end passionné depuis plus de{" "}
                <strong>8 ans</strong> , je conçois des interfaces performantes
                ( React.js, Next.js) et des <strong>solutions CMS</strong> – des
                traditionnels (WordPress) aux headless (Strapi, Contentful) –
                associées à des architectures <strong>JAMstack</strong>, pour
                allier esthétique et fonctionnalité.
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                Spécialisé dans des applications <strong>scalables</strong>,
                même pour des projets complexes (dashboards data, outils SaaS,
                ...), je mets l’accent sur la <strong>performance</strong> et l’
                <strong>accessibilité</strong> (WCAG) pour des résultats
                durables.
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                Basé à <strong>Madagascar</strong>, je collabore avec des
                équipes internationales en alliant rigueur technique et agilité
                méthodologique. Mon approche : une écoute active des besoins,
                une architecture évolutive, des livraisons dans les délais, et
                une priorité absolue à l’expérience utilisateur.
              </p>
            </div>
          </section>

          {/* Experiences Section */}
          <section id="experience" className="mb-16 max-w-2xl">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-x-3">
              <FolderKanban className="h-5 w-5" />
              <span>Expériences</span>
              <span className="mt-1 block flex-grow h-[1px] bg-gray-300 dark:bg-slate-200"></span>
            </h2>
            <div className="space-y-2 pl-1">
              <ExperienceCard
                date="2022 - 2024"
                title="Développeur Front-End - Feelin / Neoshore"
                description="Conception d'interfaces dynamiques avec React.js, couplées à GraphQL pour une communication front-end/backend fluide (requêtes, mutations). Gestion d'état optimisée via Redux et GraphQL, assurant une synchronisation fiable des données. Performance renforcée par chargement différé, mise en cache et réduction des temps de chargement, pour une UX réactive. Engagement sur l'accessibilité, garantissant une application inclusive conforme aux normes en vigueur."
                tags={[
                  "React.js",
                  "TypeScript",
                  "Redux",
                  "GraphQL (Apollo)",
                  "Material UI",
                  "Webpack",
                  "React Hook Form",
                  "React Router",
                  "Jest",
                  "Git",
                  "CI/CD",
                ]}
                link="https://neoshore.eu/"
              />
              <ExperienceCard
                date="2021 - 2022"
                title="Développeur Front-End - CtrlWeb"
                description="En tant que Développeur Front-End chez Ctrlweb, j’ai conçu et intégré des interfaces responsive et optimisées pour le SEO, en utilisant WordPress et les solutions web internes de l’agence. Collaboration étroite avec les équipes transverses (design, back-end) et respect des bonnes pratiques (HTML5 sémantique, Sass modulaire, JavaScript ES6+) en environnement agile"
                tags={[
                  "HTML5/CSS3",
                  "Front-End",
                  "Responsive Design",
                  "WordPress",
                  "CtrlWeb Solutions",
                  "SEO",
                  "Accessibilité",
                  "Git",
                ]}
                link="https://ctrlweb.ca/"
              />
              <ExperienceCard
                date="2017 - 2021"
                title="Développeur Front-End - Freelance"
                description="Intégration de maquettes responsive et mobile-first, en respectant les standards web. Développement d'applications React.js/Redux avec Gatsby.js pour des solutions performantes (JAMstack) et SEO-friendly, incluant la création de blogs dynamiques via GraphQL. Expertise en optimisation technique et accessibilité, alignée aux besoins clients pour des livrables sur mesure."
                tags={[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Sass/CSS3",
                  "Redux",
                  "GraphQL",
                  "Gatsby.js",
                  "JAMstack",
                  "Git",
                ]}
                link="#"
              />
              <ExperienceCard
                date="2016 - 2017"
                title="Développeur Front-End - Medialibs"
                description="Conception et développement de sites web sous WordPress et solutions CMS sur mesure (medialibs), avec intégration front-end en HTML/CSS/JS/jQuery. Maintenance technique, optimisation continue et garantie de bon fonctionnement des plateformes"
                tags={[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "jQuery",
                  "PHP",
                  "WordPress",
                  "Responsive Design",
                  "Medialibs Solutions",
                  "Webo-facto",
                ]}
                link="https://www.medialibs.com/"
              />
            </div>
            <div className="flex justify-end mt-4">
              <Link
                href="/cv/Nasoavina-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex underline hover:text-yeloow-600 transition-all duration-300 items-center gap-1 text-sm text-yellow-500 dark:text-yellow-400 font-semibold"
              >
                Voir mon CV complet
                <ArrowUpRight className="inline-block h-4 w-4  dark:group-hover:text-yellow-400" />
              </Link>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16 max-w-2xl">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-x-3">
              <Brain className="h-5 w-5" />
              <span>Compétences</span>
              <span className="mt-1 block flex-grow h-[1px] bg-gray-300 dark:bg-slate-200"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pl-8">
              <SkillBadge name="React.js" level={95} />
              <SkillBadge name="Next.js" level={90} />
              <SkillBadge name="TypeScript" level={85} />
              <SkillBadge name="Tailwind CSS" level={90} />
              <SkillBadge name="JavaScript" level={95} />
              <SkillBadge name="HTML/CSS" level={95} />
              <SkillBadge name="Redux" level={80} />
              <SkillBadge name="GraphQL" level={75} />
              <SkillBadge name="Framer Motion" level={70} />
              <SkillBadge name="Jest" level={75} />
              <SkillBadge name="Webpack" level={70} />
              <SkillBadge name="Git" level={85} />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16 max-w-2xl">
            <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white flex items-center gap-x-3">
              <Proportions className="h-5 w-5" />
              <span>Projets</span>
              <span className="mt-1 block flex-grow h-[1px] bg-gray-300 dark:bg-slate-200"></span>
            </h2>
            <div className="space-y-2 pl-4">
              <ProjectCard
                title="Orthoflow - Correcteur d'orthographe et de grammaire"
                description="Application web de correction et d’optimisation de textes en français"
                tags={[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Radix UI",
                  "Framer Motion",
                ]}
                link="https://orthoflow-nine.vercel.app/"
              />
              <ProjectCard
                title="GitSkreen - Dashboard client-side d'analyse de repositories"
                description="Dashboard Next.js 100% frontend analysant les repositories GitHub via leur API, avec visualisations interactives"
                tags={[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Recharts",
                  "Chart.js",
                  "GitHub API",
                ]}
                link="https://gitskreen.vercel.app/"
              />
              <ProjectCard
                title="Devisio - Générateur de devis pour Développeurs front-end"
                description="Application web automatisant la génération de devis web (PDF) avec calculs dynamiques, validation type-safe et interface accessible pour freelances/professionnels"
                tags={[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Radix UI",
                  "Génération PDF",
                  "Zod",
                ]}
                link="https://devisio.vercel.app/"
              />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16 max-w-2xl">
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-x-3">
              <MessageSquareShare className="h-5 w-5" />
              <span>Contact</span>
              <span className="mt-1 block flex-grow h-[1px] bg-gray-300 dark:bg-slate-200"></span>
            </h2>
            <div className="pl-8">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Vous avez un projet en tête ? N'hésitez pas à me contacter pour
                discuter de vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="https://wa.me/261328953396"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 h-9 rounded-md text-sm group overflow-hidden"
                  >
                    <div className="flex items-center">
                      <FaWhatsapp className="h-3.5 w-3.5 mr-2" />
                      <span>WhatsApp</span>
                      <span className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:ml-1.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Button>
                </Link>
                <Link href="mailto:hello@nasoavina.site">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 h-9 rounded-md text-sm group overflow-hidden"
                  >
                    <div className="flex items-center">
                      <Mail className="h-3.5 w-3.5 mr-2" />
                      <span>Email</span>
                      <span className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:ml-1.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Button>
                </Link>
                <Link
                  href="https://github.com/nassoa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 h-9 rounded-md text-sm group overflow-hidden"
                  >
                    <div className="flex items-center">
                      <Github className="h-3.5 w-3.5 mr-2" />
                      <span>GitHub</span>
                      <span className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:ml-1.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Button>
                </Link>
                <Link
                  href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 h-9 rounded-md text-sm group overflow-hidden"
                  >
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-2" />
                      <span>Rendez-vous visio</span>
                      <span className="inline-block w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:ml-1.5">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <footer className="py-6 border-t border-gray-100 dark:border-gray-800 max-w-2xl">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Manitriniaina Safidy Nasoavina.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
