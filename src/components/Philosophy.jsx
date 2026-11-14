import React from 'react';
import { philosophyPrinciples } from '../data/gorokContent';

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32 border-b border-white/10 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="font-mono text-xs text-gorok tracking-widest uppercase mb-3">
            06 / THE PHILOSOPHY
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl uppercase font-semibold text-offwhite tracking-tight mb-6">
            ENGINEERED FOR CALM RELIABILITY
          </h2>
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary leading-relaxed">
            Developer tools should fade into the background. They shouldn't require complex configurations, leak memory overnight, or fail silently during critical webhook deliveries.
          </p>
        </div>

        {/* 4 Sparse Editorial Principles with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {philosophyPrinciples.map((item) => (
            <div key={item.num} className="border-t border-white/15 pt-8 flex flex-col justify-between group">
              <div>
                <div className="font-mono text-xs text-gorok font-bold mb-4 tracking-wider">
                  {item.num} // PRINCIPLE
                </div>
                <h3 className="font-mono text-xl uppercase font-bold text-offwhite mb-4 group-hover:text-gorok transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-offwhite-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-8 font-mono text-[11px] text-offwhite-muted uppercase">
                GUARANTEED BY DESIGN
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

