"use client";

import { skills } from "@/lib/data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="w">
        <div className="sec-head rv">
          <div>
            <p className="sec-label rv-left">Expertise</p>
            <h2 className="sec-title">Ce que j'apporte</h2>
          </div>
        </div>

        <div className="sk-grid">
          <div className="sk-col rv d1">
            <div className="sk-num">01</div>
            <div className="sk-title">Core stack</div>
            <p className="sk-desc">
              Technologies en production au quotidien — pas des tutoriels, des
              projets réels livrés.
            </p>
            <div className="sk-list">
              <div className="sk-item">
                React.js · Next.js App Router
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                </div>
              </div>
              <div className="sk-item">
                TypeScript · JavaScript ES6+
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                </div>
              </div>
              <div className="sk-item">
                Tailwind CSS · Radix UI
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                </div>
              </div>
              <div className="sk-item">
                Zustand · Redux · React Query
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                </div>
              </div>
              <div className="sk-item">
                Framer Motion
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                  <div className="sd"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="sk-col rv d2">
            <div className="sk-num">02</div>
            <div className="sk-title">Craft & Qualité</div>
            <p className="sk-desc">
              Le travail invisible qui distingue une bonne UI d'une excellente —
              mesurable, durable.
            </p>
            <div className="sk-list">
              <div className="sk-item">
                Performance · Core Web Vitals
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                </div>
              </div>
              <div className="sk-item">
                Accessibilité WCAG A/AA
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                </div>
              </div>
              <div className="sk-item">
                Design Systems · Storybook
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                </div>
              </div>
              <div className="sk-item">
                Jest · Testing Library
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                  <div className="sd"></div>
                </div>
              </div>
              <div className="sk-item">
                Pixel-perfect integration
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="sk-col rv d3">
            <div className="sk-num">03</div>
            <div className="sk-title">Écosystème</div>
            <p className="sk-desc">
              Les outils qui rendent les architectures complexes fiables et
              maintenables.
            </p>
            <div className="sk-list">
              <div className="sk-item">
                GraphQL · Apollo · REST
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                </div>
              </div>
              <div className="sk-item">
                Headless CMS — Strapi, Contentful
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                </div>
              </div>
              <div className="sk-item">
                CI/CD · Vercel · Git
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                </div>
              </div>
              <div className="sk-item">
                Monorepo · Atomic Design
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                  <div className="sd"></div>
                </div>
              </div>
              <div className="sk-item">
                D3.js · Recharts · Chart.js
                <div className="sk-dots">
                  <div className="sd on"></div>
                  <div className="sd on"></div>
                  <div className="sd on2"></div>
                  <div className="sd"></div>
                  <div className="sd"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
