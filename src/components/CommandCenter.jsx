import React, { useState } from 'react';
import { Copy, Check, Terminal, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { cliTabs } from '../data/gorokContent';

export default function CommandCenter() {
  const [activeTab, setActiveTab] = useState(cliTabs[0].id);
  const [copiedId, setCopiedId] = useState(null);

  const currentTabObj = cliTabs.find((t) => t.id === activeTab) || cliTabs[0];

  const handleCopy = (id, command) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="commands" className="py-24 md:py-32 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-gorok tracking-widest uppercase mb-3">
            01 / GET STARTED IN SECONDS
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl uppercase font-semibold text-offwhite tracking-tight mb-6">
            SIMPLE COMMANDS.<br />ZERO CONFIGURATION.
          </h2>
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary leading-relaxed">
            No config files or YAML setups required. Install the single binary and point it at any local port.
          </p>
        </div>

        {/* Tabbed Command Box */}
        <div className="rounded-xl border border-white/15 bg-surface overflow-hidden shadow-2xl">
          {/* Tabs Header */}
          <div className="flex border-b border-white/10 overflow-x-auto bg-[#0A0A0A]">
            {cliTabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap border-r border-white/10 ${
                    isActive
                      ? 'bg-surface text-gorok border-b-2 border-b-gorok font-bold'
                      : 'text-offwhite-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Terminal className={`w-3.5 h-3.5 ${isActive ? 'text-gorok' : 'opacity-50'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Command View */}
          <div className="p-8 sm:p-10 space-y-6">
            {/* Description note */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-sans text-sm text-offwhite-secondary">
                {currentTabObj.description}
              </p>
              <div className="text-[11px] font-mono text-offwhite-muted flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gorok" />
                <span>Zero sudo privileges required</span>
              </div>
            </div>

            {/* Code Box */}
            <div className="relative group rounded-lg border border-white/15 bg-[#070707] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="font-mono text-sm sm:text-base text-offwhite flex items-center gap-3 overflow-x-auto w-full">
                <span className="text-gorok font-bold select-none">$</span>
                <code className="text-offwhite font-medium">{currentTabObj.command}</code>
              </div>

              <button
                onClick={() => handleCopy(currentTabObj.id, currentTabObj.command)}
                className="shrink-0 flex items-center gap-2 px-4 py-2 rounded bg-surface-elevated border border-white/20 text-offwhite text-xs font-mono hover:border-gorok hover:text-gorok transition-all"
                title="Copy to clipboard"
              >
                {copiedId === currentTabObj.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-gorok" />
                    <span className="text-gorok font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-offwhite-secondary" />
                    <span>Copy Command</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Quick Help Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5 text-xs font-mono text-offwhite-muted">
              <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                <div className="text-offwhite font-medium mb-1">Architecture</div>
                <div>Single static binary (Go 1.23)</div>
              </div>
              <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                <div className="text-offwhite font-medium mb-1">Port Forwarding</div>
                <div>0 open inbound ports</div>
              </div>
              <div className="p-3 rounded bg-white/[0.02] border border-white/5">
                <div className="text-offwhite font-medium mb-1">Session Multiplexing</div>
                <div>Yamux virtual streams over TLS 1.3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

