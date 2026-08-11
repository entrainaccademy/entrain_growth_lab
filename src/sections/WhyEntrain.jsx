import React from 'react';
import { Sprout, Search, LineChart, RefreshCw, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';

const principles = [
  { number: '01', title: 'Organic First', icon: Sprout },
  { number: '02', title: 'Study Before We Recommend', icon: Search },
  { number: '03', title: 'Consistency Compounds', icon: LineChart },
  { number: '04', title: 'Continuous Improvement', icon: RefreshCw },
];

export default function WhyEntrain() {
  return (
    <section className="why-entrain-section">
      <div className="why-entrain-grid-bg" aria-hidden="true" />
      <div className="why-entrain-orb" aria-hidden="true" />
      <span className="why-entrain-bg-word" aria-hidden="true">ENTRAIN</span>

      <div className="why-entrain-container">
        <div className="why-entrain-heading">
          <Reveal direction="up">
            <span>Why Entrain</span>
            <h2>Strategy first.<br /><em>Execution always.</em></h2>
          </Reveal>
          <Reveal direction="up" delay={0.12}>
            <p>Four principles shape every decision, campaign, and growth system we build.</p>
          </Reveal>
        </div>

        <div className="why-principles-grid">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.number} delay={index * 0.08} direction="up">
                <article className="why-principle-card">
                  <div className="why-principle-top">
                    <span>{item.number}</span>
                    <div><Icon /></div>
                  </div>
                  <div className="why-principle-bottom">
                    <h3>{item.title}</h3>
                    <ArrowUpRight />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
