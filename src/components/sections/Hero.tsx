"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-dots"></div>

      <div className="w hero-body">
        <div className="hero-left">
          <div className="avail">
            <div className="avail-dot"></div>
            <span className="avail-text">Disponible — Remote & Missions</span>
          </div>

          <h1 className="h1">
            <span className="h1-line" style={{ animationDelay: ".22s" }}>
              Je crée des
            </span>
            <br />
            <span className="h1-line" style={{ animationDelay: ".32s" }}>
              interfaces
            </span>
            <br />
            <span
              className="h1-line h1-accent"
              style={{ animationDelay: ".42s" }}
            >
              rapides,
            </span>
            <br />
            <span className="h1-line" style={{ animationDelay: ".52s" }}>
              mémorables.
            </span>
          </h1>

          <p className="hero-sub">
            Développeur React & Next.js Senior · 8 ans d'expérience · équipes
            internationales en Europe et Canada · basé à Madagascar.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-a">
              Voir les projets
              <span className="icon-arr">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2V12M7 12L3.5 8M7 12L10.5 8"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <a
              href="https://cal.com/nasoavina-manitriniaina-jo3qz1"
              target="_blank"
              className="btn btn-outline"
            >
              Prendre RDV
              <span className="icon-arr">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7H12M12 7L8 3M12 7L8 11"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-circle-outer">
            <div className="hero-circle-ring ring-1"></div>
            <div className="hero-circle-ring ring-2"></div>
            <div className="hero-circle-ring ring-3"></div>
            <div className="hero-circle">
              <img
                src="/pro-nas.jpg"
                alt="Safidy Nasoavina — Développeur Front-End"
              />
            </div>
          </div>

          {/* Floating stat chips */}
          <div className="hero-chip chip-1 rv">
            <div className="hero-chip-num">
              8<span className="u">+</span>
            </div>
            <div className="hero-chip-label">Ans d'exp.</div>
          </div>
          <div className="hero-chip chip-2 rv d2">
            <div className="hero-chip-num">
              7<span className="u">+</span>
            </div>
            <div className="hero-chip-label">Projets livrés</div>
          </div>
          <div className="hero-chip chip-3 rv d3">
            <div className="hero-chip-num">
              <span className="u">3</span>
            </div>
            <div className="hero-chip-label">Entreprises intl.</div>
          </div>
        </div>
      </div>

      <div className="w hero-foot">
        <div className="mq">
          <span>React.js</span>
          <span className="dot">✦</span>
          <span>Next.js</span>
          <span className="dot">✦</span>
          <span>TypeScript</span>
          <span className="dot">✦</span>
          <span>Tailwind CSS</span>
          <span className="dot">✦</span>
          <span>Framer Motion</span>
          <span className="text-sm text-gray-400 mx-4">Node.js</span>
          <span className="text-sm text-gray-400 mx-4">•</span>
          <span className="text-sm text-gray-400 mx-4">PostgreSQL</span>
          <span className="text-sm text-gray-400 mx-4">•</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .ring {
          animation: pulse-ring 4s ease-in-out infinite;
        }
        .ring-3 {
          animation-delay: 0s;
        }
        .ring-2 {
          animation-delay: 1s;
        }
        .ring-1 {
          animation-delay: 2s;
        }
        @keyframes pulse-ring {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
