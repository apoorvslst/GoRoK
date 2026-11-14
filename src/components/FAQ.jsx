import React, { useState } from 'react';
import { faqs, GITHUB_REPO_URL } from '../data/gorokContent.js';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-36 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-editorial text-xs text-gorok tracking-[0.25em] uppercase font-bold mb-3">
            // TECHNICAL QUESTIONS & ANSWERS
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl uppercase font-bold text-offwhite tracking-tight mb-6">
            <span className="text-gorok">FREQUENTLY ASKED QUESTIONS.</span> PROTOCOL DETAILS.
          </h2>
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary leading-relaxed">
            Everything you need to know about GoRok architecture, networking protocol, security boundaries, and self-hosting.
          </p>
        </div>

        {/* Clean Hairline Accordion */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="transition-colors group">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 flex items-start justify-between text-left gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-editorial text-xs text-gorok pt-1 font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-editorial text-base sm:text-lg font-bold text-offwhite group-hover:text-gorok transition-colors uppercase tracking-wide">
                      {faq.q}
                    </span>
                  </div>

                  <div className="shrink-0 pt-1 text-offwhite-secondary group-hover:text-gorok transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-gorok" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pl-9 pr-6 text-sm sm:text-base font-sans text-offwhite-secondary leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Self-hosting and questions callout */}
        <div className="mt-12 p-6 border border-white/10 bg-surface flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-editorial uppercase tracking-wider">
          <div className="text-offwhite-secondary">
            Have deep networking questions? Review the Go implementation directly.
          </div>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gorok hover:underline font-bold shrink-0 flex items-center gap-1.5"
          >
            <span>go-ngrok on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
