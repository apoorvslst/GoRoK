import React from 'react';
import { onboardingSteps } from '../data/gorokContent';
import { Download, Terminal, Activity, Share2, Check } from 'lucide-react';

export default function OnboardingTimeline() {
  const getStepIcon = (index) => {
    switch (index) {
      case 0: return <Download className="w-4 h-4 text-black" />;
      case 1: return <Terminal className="w-4 h-4 text-black" />;
      case 2: return <Activity className="w-4 h-4 text-black" />;
      case 3: return <Share2 className="w-4 h-4 text-black" />;
      default: return <Check className="w-4 h-4 text-black" />;
    }
  };

  return (
    <section id="timeline" className="py-24 md:py-32 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="font-mono text-xs text-gorok tracking-widest uppercase mb-3">
            04 / ONBOARDING ROADMAP
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl uppercase font-semibold text-offwhite tracking-tight mb-6">
            UP AND RUNNING IN 60 SECONDS
          </h2>
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary leading-relaxed">
            GoRok does not need account registrations, complex YAML daemon setups, or router port-forwarding rules to run.
          </p>
        </div>

        {/* 4-Stage Horizontal / Vertical Timeline */}
        <div className="relative">
          {/* Desktop connecting hairline line */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-px bg-white/15 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {onboardingSteps.map((step, idx) => (
              <div
                key={step.step}
                className="rounded-xl border border-white/10 bg-surface p-6 sm:p-7 flex flex-col justify-between hover:border-gorok/40 transition-all group"
              >
                <div>
                  {/* Step Bullet & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-gorok flex items-center justify-center font-mono font-bold text-black shadow-lg shadow-gorok/20 group-hover:scale-105 transition-transform">
                      {getStepIcon(idx)}
                    </div>
                    <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-gorok transition-colors">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Action Tag */}
                  <div className="font-mono text-xs text-gorok font-semibold tracking-wider uppercase mb-2">
                    STAGE {step.step} — {step.action}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-mono text-lg font-bold text-offwhite mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-sans text-sm text-offwhite-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 font-mono text-[11px] text-offwhite-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Time to execute: ~15s</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

