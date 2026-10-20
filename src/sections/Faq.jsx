import React from 'react';
import { Link } from '../lib/router';
import { homeFaqs } from '../data/faq';

export default function Faq() {
  return (
    <section id="faq" className="faq-simple bg-white px-5 py-20 text-[#101827] sm:px-8 sm:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-[#101827]/20 pb-10 md:pb-14">
          <h2 id="faq-heading" className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
            Frequently asked questions.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#101827]/60">
            A few helpful answers before we start working together.
          </p>
        </div>

        <div className="divide-y divide-[#101827]/15">
          {homeFaqs.map(({ question, answer }) => (
            <details key={question} className="group">
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_2rem] items-center gap-3 py-6 text-left sm:py-8">
                <span className="font-display text-lg font-medium leading-snug tracking-[-0.02em] sm:text-2xl">{question}</span>
                <span className="faq-simple-toggle text-center text-2xl font-light text-[#4355A5]" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pb-7 pr-8 text-sm leading-relaxed text-[#101827]/65 sm:pb-9 sm:text-base">{answer}</p>
            </details>
          ))}
        </div>

        <p className="border-t border-[#101827]/20 pt-8 text-sm text-[#101827]/60">
          Still have a question? <Link to="/contact" className="font-semibold text-[#4355A5] underline decoration-[#4355A5]/40 underline-offset-4 hover:decoration-[#4355A5]">Get in touch.</Link>
        </p>
      </div>
    </section>
  );
}
