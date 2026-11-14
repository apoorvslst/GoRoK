import React from 'react';
import { philosophyPrinciples } from '../data/gorokContent.js';

export default function Philosophy() {
  return (
    <section className="py-24 md:py-36 border-b border-white/10 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <div className="font-editorial text-xs text-gorok tracking-[0.25em] uppercase font-bold mb-3">
            // ENGINEERING PHILOSOPHY
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl uppercase font-bold text-offwhite tracking-tight mb-6">
            <span className="text-gorok">ENGINEERED FOR CALM RELIABILITY.</span> NO SURPRISES.
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
                <div className="font-editorial text-xs text-gorok font-bold mb-4 tracking-widest uppercase">
                  {item.num} // PRINCIPLE
                </div>
                <h3 className="font-editorial text-xl uppercase font-bold text-offwhite mb-4 group-hover:text-gorok transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-offwhite-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-8 font-editorial text-[11px] text-offwhite-muted uppercase tracking-wider">
                GUARANTEED BY DESIGN
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
