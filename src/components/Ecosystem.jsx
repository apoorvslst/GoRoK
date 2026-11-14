import React from 'react';
import { ecosystemTools } from '../data/gorokContent.js';
import { ArrowUpRight, Cpu, Server, Database, Globe, Layers, Zap, Workflow } from 'lucide-react';

export default function Ecosystem() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Globe className="w-5 h-5" />;
      case 1: return <Server className="w-5 h-5" />;
      case 2: return <Cpu className="w-5 h-5" />;
      case 3: return <Zap className="w-5 h-5" />;
      case 4: return <Layers className="w-5 h-5" />;
      case 5: return <Workflow className="w-5 h-5" />;
      case 6: return <Cpu className="w-5 h-5" />;
      case 7: return <Database className="w-5 h-5" />;
      default: return <Server className="w-5 h-5" />;
    }
  };

  return (
    <section id="ecosystem" className="py-24 md:py-36 border-b border-white/10 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="font-editorial text-xs text-gorok tracking-[0.25em] uppercase font-bold mb-3">
            // RUNTIME & STACK COMPATIBILITY
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl uppercase font-bold text-offwhite tracking-tight mb-6">
            <span className="text-gorok">WORKS WITH ANY LOCAL STACK.</span> ZERO SDK MODIFICATIONS.
          </h2>
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary leading-relaxed">
            If it speaks HTTP or TCP, GoRok can tunnel it. Zero dependencies, no SDK imports into your codebase.
          </p>
        </div>

        {/* 8 Compatibility Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemTools.map((tool, idx) => (
            <div
              key={tool.name}
              className="p-6 border border-white/10 bg-surface hover:border-gorok/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 bg-surface-elevated border border-white/10 flex items-center justify-center text-offwhite-secondary group-hover:text-gorok group-hover:border-gorok/30 transition-colors">
                    {getIcon(idx)}
                  </div>
                  <span className="font-code text-[11px] px-2 py-0.5 bg-white/5 border border-white/10 text-offwhite-muted">
                    {tool.port}
                  </span>
                </div>

                <div className="font-editorial text-xs text-gorok font-bold tracking-wider uppercase mb-1.5">
                  {tool.tag}
                </div>

                <h3 className="font-editorial text-base font-bold text-offwhite mb-2 group-hover:text-white transition-colors uppercase">
                  {tool.name}
                </h3>

                <p className="font-sans text-xs text-offwhite-secondary leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-editorial uppercase tracking-wider text-offwhite-muted group-hover:text-gorok transition-colors">
                <span>TUNNEL READY</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
