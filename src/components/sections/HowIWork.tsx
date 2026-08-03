"use client";

import { Target, Scale, MessageSquare, Code2 } from "lucide-react";
import { principles } from "@/lib/data/principles";

const icons = [Target, Scale, MessageSquare, Code2];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="section">
      <div className="w">
        <div className="sec-head rv">
          <p className="sec-label rv-left">Méthode</p>
          <h2 className="sec-title">Comment je travaille</h2>
        </div>

        <ul className="method-list">
          {principles.map((principle, i) => {
            const Icon = icons[i] ?? Target;
            return (
              <li
                key={principle.number}
                className={`method-item rv d${Math.min(i + 1, 8)}`}
              >
                <div className="method-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="method-title">{principle.title}</h3>
                  <p className="method-desc">{principle.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
