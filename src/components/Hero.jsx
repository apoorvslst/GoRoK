import React, { useState } from 'react';
import { Terminal, ArrowRight, Check, Copy, Activity, ShieldCheck, Zap } from 'lucide-react';
import { GITHUB_REPO_URL } from '../data/gorokContent.js';

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
    }, 400);
  };

  const copyHeroCommand = () => {
    navigator.clipboard.writeText("gorok http 3000 --subdomain rahul");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden border-b border-white/10">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Text Statement (Exact Realm Alliance Style from Image 3) */}
        <div className="max-w-5xl mb-20">
          <div className="font-editorial text-xs text-gorok tracking-[0.25em] uppercase font-bold mb-6">
            // PROTOCOL SPECIFICATION · REVERSE INGRESS
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.12] text-offwhite font-bold">
            <span className="text-gorok">TUNNELING TAILORED FOR DEVELOPERS.</span>{' '}
            YOU CAN'T HAVE FRAGILE SSH SESSIONS DROPPING UNDER TRAFFIC OR FIGHTING ROUTER NAT FIREWALLS. GOROK MULTIPLEXES SECURE OUTBOUND STREAMS DIRECTLY TO THE PUBLIC EDGE WITH ZERO FIREWALL HOLES AND ZERO CONFIGURATION.
          </h1>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-white/10">
            <div className="font-sans text-sm sm:text-base text-offwhite-secondary max-w-2xl leading-relaxed">
              Expose <code className="text-offwhite font-mono px-1.5 py-0.5 bg-white/5 border border-white/10">localhost:3000</code> to the public internet through a multiplexed Yamux TLS pipe. Built with Go goroutines, circular memory buffers, and live request replay.
            </div>

            <div className="flex items-center gap-4 shrink-0 sm:ml-auto">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gorok text-black font-editorial font-bold text-xs uppercase tracking-wider hover:bg-gorok-hover transition-colors"
              >
                <span>Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-offwhite font-editorial font-bold text-xs uppercase tracking-wider hover:border-white/40 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-offwhite-secondary" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Live Terminal Simulator */}
        <div className="max-w-5xl mx-auto">
          <div className="border border-white/15 bg-[#080808] shadow-2xl overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="h-10 px-4 bg-[#111111] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-white/20" />
                <div className="w-2.5 h-2.5 bg-white/20" />
                <div className="w-2.5 h-2.5 bg-gorok" />
                <span className="ml-3 font-editorial text-xs text-offwhite-muted tracking-wider uppercase hidden sm:inline">
                  GOROK SESSION // YAMUX:TCP-9000
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={simulateNewRequest}
                  disabled={isInjecting}
                  className="px-2.5 py-1 text-[11px] font-editorial uppercase tracking-wider bg-white/5 border border-white/10 text-offwhite-secondary hover:text-white hover:border-white/30 transition-colors disabled:opacity-50"
                  title="Inject test traffic into the live tunnel simulator"
                >
                  {isInjecting ? 'Simulating...' : '+ Inject Stream'}
                </button>
                <button
                  onClick={copyHeroCommand}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-editorial uppercase tracking-wider bg-white/5 border border-white/10 text-offwhite-secondary hover:text-white hover:border-white/30 transition-colors"
                  title="Copy command"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-gorok" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-code text-xs sm:text-[13px] leading-relaxed text-offwhite overflow-x-auto space-y-4">
              <div className="flex items-center gap-2 text-offwhite-secondary">
                <span className="text-gorok font-bold select-none">$</span>
                <span className="text-white font-medium">gorok http 3000 --subdomain rahul</span>
              </div>

              <div className="text-white/20 select-none">
                --------------------------------------------------------------------------------
              </div>

              <div className="space-y-1 pl-2">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="w-52 text-offwhite-secondary font-medium">GoRok Tunnel Active:</span>
                  <span className="text-gorok font-semibold">https://rahul.gorok.dev</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="w-52 text-offwhite-secondary font-medium">Forwarding to:</span>
                  <span className="text-offwhite">http://localhost:3000</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="w-52 text-offwhite-secondary font-medium">Control Session:</span>
                  <span className="text-offwhite">Connected (Yamux :9000)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="w-52 text-offwhite-secondary font-medium">Local Inspector:</span>
                  <span className="text-gorok">http://localhost:4040</span>
                </div>
              </div>

              <div className="text-white/20 select-none">
                --------------------------------------------------------------------------------
              </div>

              {/* Streaming request lines */}
              <div className="space-y-2 pt-1 font-code">
                {liveStreamLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs border-l-2 pl-3 py-0.5 transition-all duration-300"
                    style={{
                      borderColor: log.statusType === 'success' ? '#22c55e' : '#FF4F00'
                    }}
                  >
                    <span className={log.statusType === 'success' ? 'text-emerald-400 font-semibold' : 'text-gorok font-semibold'}>
                      [{log.code}]
                    </span>
                    <span className="text-offwhite-secondary font-medium w-12">{log.method}</span>
                    <span className="text-offwhite font-code">{log.path}</span>
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
                      <span className="text-gorok/80 text-[11px] italic">
                        {log.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="px-5 py-3 bg-[#0C0C0C] border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-editorial text-offwhite-muted gap-2 uppercase tracking-wider">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-emerald-400" />
                <span className="text-offwhite font-bold">TUNNEL ONLINE</span>
                <span className="opacity-30">/</span>
                <span>LATENCY: 12MS</span>
                <span className="opacity-30">/</span>
                <span className="text-gorok">MULTIPLEXED TLS 1.3</span>
              </div>
              <div className="text-offwhite-muted hidden sm:block">
                PID: 88412 · RING BUFFER: 4.8MB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
