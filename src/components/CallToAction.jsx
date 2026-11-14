import React, { useState } from 'react';
import { Copy, Check, ArrowRight, Download, Terminal, Shield } from 'lucide-react';

export default function CallToAction() {
  const [copied, setCopied] = useState(false);
  const installCmd = "curl -sSL https://gorok.dev/install.sh | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-28 md:py-40 border-b border-white/10 relative overflow-hidden bg-void">
      {/* Background radial accent glow & grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gorok/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Large Centered Headline */}
        <h2 className="font-mono text-3xl sm:text-5xl lg:text-6xl uppercase font-semibold text-offwhite tracking-tight leading-[1.05] mb-6">
          READY TO EXPOSE YOUR<br />LOCAL PORTS SAFELY?
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-xl text-offwhite-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Download the single binary. Start tunneling in seconds. 100% open-source.
        </p>

        {/* Interactive Copyable Install Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="rounded-lg border border-white/20 bg-[#0A0A0A] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
            <div className="font-mono text-xs sm:text-sm text-offwhite flex items-center gap-3 overflow-x-auto w-full">
              <span className="text-gorok font-bold select-none">$</span>
              <code className="text-offwhite font-medium">{installCmd}</code>
            </div>

            <button
              onClick={handleCopy}
              className="shrink-0 flex items-center gap-2 px-4 py-2 rounded bg-surface-elevated border border-white/20 text-offwhite text-xs font-mono hover:border-gorok hover:text-gorok transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-gorok" />
                  <span className="text-gorok font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Primary Download CTA button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/apoorvslst/go-ngrok/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded bg-gorok text-black font-mono font-bold text-sm uppercase tracking-wider hover:bg-gorok-hover transition-colors shadow-lg shadow-gorok/20"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD GOROK FOR FREE -&gt;</span>
          </a>

          <a
            href="https://github.com/apoorvslst/go-ngrok"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded border border-white/20 bg-surface text-offwhite font-mono text-sm hover:border-white/40 transition-colors"
          >
            <span>Read Architecture Docs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Security / Open Source Assurance */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-offwhite-muted">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-gorok" />
            <span>Permissive Open Source License</span>
          </div>
          <div>·</div>
          <div>Windows, macOS (arm64/amd64), Linux</div>
          <div>·</div>
          <div>Zero Outbound Telemetry</div>
        </div>
      </div>
    </section>
  );
}

