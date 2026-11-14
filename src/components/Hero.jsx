import React, { useState } from 'react';
import { Terminal, ArrowRight, Check, Copy, Activity, ShieldCheck, Zap } from 'lucide-react';
import { GITHUB_REPO_URL, siteMetadata } from '../data/gorokContent.js';

function GithubIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [liveStreamLogs, setLiveStreamLogs] = useState([
    { id: 1, code: '200 OK', method: 'POST', path: '/api/webhooks/stripe', latency: '42ms', in: '512B', out: '2.1KB', statusType: 'success' },
    { id: 2, code: '200 OK', method: 'GET',  path: '/dashboard',           latency: '18ms', in: '120B', out: '8.4KB', statusType: 'success' },
    { id: 3, code: '503 ERR', method: 'POST', path: '/api/heavy-task',      latency: '2ms',  in: '48B',  out: '89B',   statusType: 'error', note: '(Semaphore capped at 100 reqs)' },
  ]);
  const [isInjecting, setIsInjecting] = useState(false);

  const simulateNewRequest = () => {
    setIsInjecting(true);
    setTimeout(() => {
      const endpoints = [
        { code: '200 OK', method: 'POST', path: '/api/webhooks/shopify', latency: '28ms', in: '1.4KB', out: '180B', statusType: 'success' },
        { code: '200 OK', method: 'GET', path: '/api/v1/healthz', latency: '4ms', in: '64B', out: '12B', statusType: 'success' },
        { code: '200 OK', method: 'POST', path: '/api/billing/charge', latency: '54ms', in: '890B', out: '3.2KB', statusType: 'success' }
      ];
      const randomReq = endpoints[Math.floor(Math.random() * endpoints.length)];
      setLiveStreamLogs(prev => [
        ...prev.slice(-4),
        { id: Date.now(), ...randomReq }
      ]);
      setIsInjecting(false);
    }, 450);
  };

  const copyHeroCommand = () => {
    navigator.clipboard.writeText("gorok http 3000 --subdomain rahul");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-white/10">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gorok/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface border border-gorok/30 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gorok animate-pulse" />
            <span className="font-mono text-xs text-gorok tracking-widest uppercase font-semibold">
              {siteMetadata.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-mono font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-offwhite leading-[0.98] mb-8">
            EXPOSE ANY LOCAL PORT.<br />
            <span className="text-gorok">ZERO FIREWALL HOLES.</span><br />
            SINGLE GO BINARY.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            GoRok establishes an authenticated, multiplexed tunnel from your local machine to the public edge. Share local servers, test live webhooks, and debug HTTP traffic without opening router ports or configuring corporate VPNs.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#commands"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-gorok text-black font-mono font-bold text-sm tracking-wide hover:bg-gorok-hover transition-all duration-150 shadow-lg shadow-gorok/10"
            >
              <span>Quickstart CLI</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded border border-white/20 bg-surface/80 text-offwhite font-mono text-sm hover:border-white/40 hover:text-white transition-all duration-150 backdrop-blur-sm"
            >
              <GithubIcon className="w-4 h-4 text-offwhite-secondary" />
              <span>View GitHub Source</span>
            </a>
          </div>

          {/* Architecture badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-offwhite-muted">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-gorok" />
              <span>Yamux Stream Multiplexing</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gorok" />
              <span>Zero Firewall Holes</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-gorok" />
              <span>Localhost:4040 Replay Inspector</span>
            </div>
          </div>
        </div>

        {/* Live Terminal Simulator */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border border-white/15 bg-[#0B0B0B] shadow-2xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="h-10 px-4 bg-[#141414] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                <span className="ml-3 font-mono text-xs text-offwhite-muted hidden sm:inline">
                  gorok-session — yamux:tcp-9000
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={simulateNewRequest}
                  disabled={isInjecting}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-offwhite-secondary hover:text-white hover:border-white/20 transition-colors disabled:opacity-50"
                  title="Inject test traffic into the live tunnel simulator"
                >
                  {isInjecting ? 'Simulating...' : '+ Inject Request'}
                </button>
                <button
                  onClick={copyHeroCommand}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-offwhite-secondary hover:text-white hover:border-white/20 transition-colors"
                  title="Copy command"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-gorok" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-offwhite overflow-x-auto space-y-4">
              <div className="flex items-center gap-2 text-offwhite-secondary">
                <span className="text-gorok font-bold">$</span>
                <span className="text-white">gorok http 3000 --subdomain rahul</span>
              </div>

              <div className="text-offwhite-muted select-none">
                ============================================================
              </div>

              <div className="space-y-1 pl-2">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="w-48 text-offwhite-secondary font-medium">GoRok Tunnel Active:</span>
                  <a
                    href="https://rahul.gorok.dev"
                    onClick={(e) => e.preventDefault()}
                    className="text-gorok hover:underline font-semibold"
                  >
                    https://rahul.gorok.dev
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="w-48 text-offwhite-secondary font-medium">Forwarding to:</span>
                  <span className="text-offwhite">http://localhost:3000</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="w-48 text-offwhite-secondary font-medium">Control Session:</span>
                  <span className="text-offwhite">Connected (Yamux :9000)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="w-48 text-offwhite-secondary font-medium">Local Inspector:</span>
                  <a
                    href="#inspector"
                    className="text-gorok hover:underline"
                  >
                    http://localhost:4040
                  </a>
                </div>
              </div>

              <div className="text-offwhite-muted select-none">
                ============================================================
              </div>

              {/* Streaming request lines */}
              <div className="space-y-2 pt-1 font-mono">
                {liveStreamLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs border-l-2 pl-3 py-0.5 transition-all duration-300"
                    style={{
                      borderColor: log.statusType === 'success' ? '#22c55e' : '#ef4444'
                    }}
                  >
                    <span className={log.statusType === 'success' ? 'text-emerald-400 font-semibold' : 'text-red-400 font-semibold'}>
                      [{log.code}]
                    </span>
                    <span className="text-offwhite-secondary font-medium w-12">{log.method}</span>
                    <span className="text-offwhite font-mono">{log.path}</span>
                    <span className="text-offwhite-muted ml-auto sm:ml-0">{log.latency}</span>
                    {log.in && (
                      <span className="text-offwhite-muted text-[11px] hidden sm:inline">
                        in: {log.in}
                      </span>
                    )}
                    {log.out && (
                      <span className="text-offwhite-muted text-[11px] hidden sm:inline">
                        out: {log.out}
                      </span>
                    )}
                    {log.note && (
                      <span className="text-red-400/80 text-[11px] italic">
                        {log.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="px-5 py-3 bg-[#0E0E0E] border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-offwhite-muted gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-wider text-offwhite font-medium">STATUS: ONLINE</span>
                <span className="opacity-40">·</span>
                <span>LATENCY: 12ms</span>
                <span className="opacity-40">·</span>
                <span className="text-gorok">ALL STREAMS ENCRYPTED (TLS 1.3)</span>
              </div>
              <div className="text-offwhite-muted hidden sm:block">
                PID: 88412 · MEM: 4.8MB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
