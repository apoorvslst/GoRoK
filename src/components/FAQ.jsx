import React, { useState } from 'react';
import { faqs } from '../data/gorokContent';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 border-b border-white/10 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-xs text-gorok tracking-widest uppercase mb-3">
            05 / QUESTIONS & ANSWERS
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl uppercase font-semibold text-offwhite tracking-tight mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary max-w-2xl mx-auto leading-relaxed">
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
                    <span className="font-mono text-xs text-gorok pt-1">
                      {`0${idx + 1}`}
                    </span>
                    <span className="font-mono text-base sm:text-lg font-semibold text-offwhite group-hover:text-gorok transition-colors">
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
                  <div className="pb-6 pl-9 pr-6 text-sm sm:text-base font-sans text-offwhite-secondary leading-relaxed animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Self-hosting and questions callout */}
        <div className="mt-12 p-6 rounded-xl border border-white/10 bg-surface flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3 text-offwhite-secondary">
            <HelpCircle className="w-4 h-4 text-gorok shrink-0" />
            <span>Have deep protocol questions? Review the Go source code directly.</span>
          </div>
          <a
            href="https://github.com/apoorvslst/go-ngrok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gorok hover:underline font-bold shrink-0"
          >
            Explore go-ngrok on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

