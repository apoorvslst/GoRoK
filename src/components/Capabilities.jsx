import React from 'react';
import { capabilities } from '../data/gorokContent.js';
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-36 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <div className="font-editorial text-xs text-gorok tracking-[0.25em] uppercase font-bold mb-3">
            // CORE CAPABILITIES & SPECIFICATIONS
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl uppercase font-bold text-offwhite tracking-tight mb-6">
            <span className="text-gorok">ENGINEERED TO OUTPERFORM</span> SSH TUNNELS & PROXIES
          </h2>
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary leading-relaxed">
            Standard port-forwarding and ad-hoc SSH tunnels drop connections, leak memory, and choke under concurrency. GoRok was built in pure Go with stream multiplexing, bounded channels, and edge resilience.
          </p>
        </div>

        {/* 8 Numbered Capabilities in Alternating Layout */}
        <div className="space-y-24 md:space-y-32">
          {capabilities.map((cap, index) => {
            const isOdd = index % 2 === 0;
            return (
              <div
                key={cap.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isOdd ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Text Content Block */}
                <div className={`lg:col-span-6 ${isOdd ? '' : 'lg:col-start-7'}`}>
                  {/* Number & Tag */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-editorial text-4xl font-bold text-gorok">
                      {cap.number}
                    </span>
                    <span className="h-px w-10 bg-gorok/40" />
                    <span className="text-xs font-editorial text-offwhite-muted uppercase tracking-wider">
                      PILLAR {cap.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-2xl sm:text-3xl uppercase font-bold text-offwhite mb-4 tracking-tight">
                    {cap.title}
                  </h3>

                  {/* Explanation */}
                  <p className="font-sans text-base text-offwhite-secondary leading-relaxed mb-6">
                    {cap.summary}
                  </p>

                  {/* Technical Detail */}
                  <p className="text-xs text-offwhite-muted mb-6 bg-white/[0.02] p-3 border border-white/5 font-code">
                    {cap.detail}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-editorial uppercase tracking-wider bg-surface border border-white/10 text-offwhite-secondary hover:border-gorok/40 hover:text-gorok transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Illustrated Card Block */}
                <div className={`lg:col-span-6 ${isOdd ? '' : 'lg:col-start-1'}`}>
                  <div className="border border-white/15 bg-surface p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-white/30 transition-all">
                    {/* Top corner subtle indicator */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs font-editorial text-offwhite-muted uppercase tracking-wider">
                      <span className="text-gorok font-bold">FIG {cap.number}.0 // ARCHITECTURE</span>
                      <span>SYSTEM VERIFIED</span>
                    </div>

                    {renderVisualCard(cap.visualType)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function renderVisualCard(type) {
  switch (type) {
    case 'flow':
      return (
        <div className="space-y-4 font-code text-xs">
          <div className="p-4 bg-[#070707] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-[11px] font-editorial uppercase tracking-wider text-offwhite-muted">
              <span>OUTBOUND TLS DIAL</span>
              <span className="text-emerald-400 font-bold">STATUS: CONNECTED</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
              <div className="p-2.5 bg-surface border border-white/10">
                <div className="text-gorok font-bold mb-1 font-editorial uppercase">Localhost</div>
                <div className="text-offwhite-muted text-[10px]">:3000</div>
              </div>
              <div className="flex items-center justify-center text-gorok">
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </div>
              <div className="p-2.5 bg-surface border border-white/10">
                <div className="text-offwhite font-bold mb-1 font-editorial uppercase">Edge Server</div>
                <div className="text-offwhite-muted text-[10px]">Yamux :9000</div>
              </div>
              <div className="p-2.5 bg-surface border border-emerald-500/30">
                <div className="text-emerald-400 font-bold mb-1 font-editorial uppercase">Public Web</div>
                <div className="text-offwhite-muted text-[10px]">HTTPS 443</div>
              </div>
            </div>

            <div className="pt-2 text-[10px] font-editorial uppercase text-offwhite-muted flex items-center justify-between">
              <span>Firewall NAT rule:</span>
              <span className="text-offwhite font-bold">Allow Established / Zero Inbound Rules</span>
            </div>
          </div>
        </div>
      );

    case 'multiplex':
      return (
        <div className="space-y-3 font-code text-xs">
          <div className="p-4 bg-[#070707] border border-white/10 space-y-3">
            <div className="text-[11px] font-editorial uppercase tracking-wider text-offwhite-muted flex justify-between">
              <span>SINGLE TCP PIPE (TLS 1.3)</span>
              <span className="text-gorok font-bold">YAMUX SESSION POOL</span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 bg-surface border border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-gorok font-bold font-editorial">STREAM #1</span>
                <span className="text-offwhite">POST /api/webhooks/stripe</span>
                <span className="text-emerald-400 font-bold font-editorial">42MS</span>
              </div>
              <div className="p-2.5 bg-surface border border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-gorok font-bold font-editorial">STREAM #3</span>
                <span className="text-offwhite">GET /dashboard/stream</span>
                <span className="text-emerald-400 font-bold font-editorial">18MS</span>
              </div>
              <div className="p-2.5 bg-surface border border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-gorok font-bold font-editorial">STREAM #5</span>
                <span className="text-offwhite">WS /socket.io/?EIO=4</span>
                <span className="text-emerald-400 font-bold font-editorial">8MS</span>
              </div>
            </div>

            <div className="text-[10px] font-editorial uppercase tracking-wider text-offwhite-muted text-center pt-1">
              Zero Head-of-Line blocking. 256 logical streams over 1 TCP connection.
            </div>
          </div>
        </div>
      );

    case 'state-badge':
      return (
        <div className="space-y-4 font-code text-xs">
          <div className="p-5 bg-[#070707] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-[11px] font-editorial uppercase tracking-wider text-offwhite-muted">
              <span>SUBDOMAIN LEASE TIMER</span>
              <span className="text-gorok font-bold">45S WINDOW ACTIVE</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-surface border border-white/10 font-editorial uppercase tracking-wider text-xs">
              <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-center w-full sm:w-auto">
                ACTIVE
              </div>
              <ArrowRight className="w-4 h-4 text-offwhite-muted hidden sm:block" />
              <div className="px-3 py-1.5 bg-gorok/10 border border-gorok/40 text-gorok font-bold text-center w-full sm:w-auto animate-pulse">
                GRACE_PERIOD (45s)
              </div>
              <ArrowRight className="w-4 h-4 text-offwhite-muted hidden sm:block" />
              <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-center w-full sm:w-auto">
                REATTACHED
              </div>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/5 text-[11px] text-offwhite-secondary space-y-1">
              <div className="flex justify-between font-editorial uppercase">
                <span className="text-offwhite-muted">Subdomain Lock:</span>
                <span className="text-white font-bold">rahul.gorok.dev</span>
              </div>
              <div className="flex justify-between font-editorial uppercase">
                <span className="text-offwhite-muted">Secret Token:</span>
                <span className="text-gorok font-bold">token_auth_verified</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'gauge':
      return (
        <div className="space-y-4 font-code text-xs">
          <div className="p-5 bg-[#070707] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-[11px] font-editorial uppercase tracking-wider">
              <span className="text-offwhite-muted">CONCURRENCY SEMAPHORE</span>
              <span className="text-gorok font-bold">CAP: 100 STREAMS</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-editorial uppercase">
                <span className="text-offwhite font-bold">74 / 100 in-flight streams</span>
                <span className="text-emerald-400 font-bold">Memory Leaks: 0</span>
              </div>
              <div className="w-full h-2 bg-[#1A1A1A] overflow-hidden border border-white/10 flex">
                <div className="h-full bg-gorok" style={{ width: '74%' }} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-editorial uppercase">
              <div className="p-2.5 bg-surface border border-white/10">
                <div className="text-offwhite-muted text-[10px]">Queue Sched</div>
                <div className="text-offwhite font-bold mt-0.5">Non-blocking Drop</div>
              </div>
              <div className="p-2.5 bg-surface border border-white/10">
                <div className="text-offwhite-muted text-[10px]">Overflow Code</div>
                <div className="text-gorok font-bold mt-0.5">503 Overloaded</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'terminal-log':
      return (
        <div className="space-y-3 font-code text-xs">
          <div className="p-4 bg-[#050505] border border-white/15 space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-editorial uppercase text-offwhite-muted border-b border-white/10 pb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-gorok" />
              <span>GOROK RUNTIME · PANIC_RECOVERY.GO</span>
            </div>

            <div className="space-y-1.5 text-[11px] leading-relaxed">
              <div className="text-gorok font-medium">
                [PANIC RECOVERED] line 42: runtime error: invalid memory address
              </div>
              <div className="text-offwhite-muted pl-3">
                &gt; Stack trace captured · Client stream isolated
              </div>
              <div className="text-emerald-400 pl-3">
                &gt; 500 Internal Error cleanly dispatched to edge
              </div>
              <div className="text-white font-bold pl-3 border-t border-white/10 pt-1 font-editorial uppercase">
                &gt; Main Yamux Listener: 100% ONLINE (0 drops)
              </div>
            </div>
          </div>
        </div>
      );

    case 'metrics':
      return (
        <div className="space-y-4 font-code text-xs">
          <div className="p-5 bg-[#070707] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-[11px] font-editorial uppercase tracking-wider">
              <span className="text-offwhite-muted">PROMETHEUS SCRAPE TARGET</span>
              <span className="text-gorok font-bold">:9090/metrics</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-surface border border-white/10">
                <div className="text-offwhite-muted text-[10px] font-editorial uppercase">QPS</div>
                <div className="text-xl font-bold font-editorial text-offwhite mt-1">1,420</div>
                <div className="text-emerald-400 text-[10px] mt-0.5 font-editorial">+14% surge</div>
              </div>
              <div className="p-3 bg-surface border border-white/10">
                <div className="text-offwhite-muted text-[10px] font-editorial uppercase">p95 LATENCY</div>
                <div className="text-xl font-bold font-editorial text-gorok mt-1">14ms</div>
                <div className="text-offwhite-muted text-[10px] mt-0.5 font-editorial">TLS edge</div>
              </div>
              <div className="p-3 bg-surface border border-white/10">
                <div className="text-offwhite-muted text-[10px] font-editorial uppercase">THROUGHPUT</div>
                <div className="text-xl font-bold font-editorial text-offwhite mt-1">42 MB/s</div>
                <div className="text-emerald-400 text-[10px] mt-0.5 font-editorial">Zero allocs</div>
              </div>
            </div>

            <div className="p-3 bg-surface border border-white/10">
              <div className="text-[10px] font-editorial uppercase text-offwhite-muted mb-2 flex justify-between">
                <span>REQUEST HISTOGRAM</span>
                <span>LAST 60 SECONDS</span>
              </div>
              <div className="h-8 flex items-end gap-1">
                {[30, 45, 60, 40, 75, 90, 65, 80, 55, 95, 70, 85, 100, 78, 92, 88].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gorok/80 hover:bg-gorok transition-colors"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case 'shutdown':
      return (
        <div className="space-y-4 font-code text-xs">
          <div className="p-5 bg-[#070707] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-[11px] font-editorial uppercase tracking-wider">
              <span className="text-offwhite-muted">SIGNAL HANDLER</span>
              <span className="text-gorok font-bold">SIGINT / SIGTERM</span>
            </div>

            <div className="p-3.5 bg-surface border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-gorok text-xs font-bold font-editorial uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>SIGTERM TRAPPED: 5-SECOND DRAIN PHASE</span>
              </div>
              <div className="text-[11px] text-offwhite-secondary space-y-1">
                <div>[1] Front door closed: No new connections accepted</div>
                <div>[2] In-flight streams (12 active): Draining cleanly</div>
                <div>[3] TCP FIN dispatched: Clean Exit Code 0</div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[11px] font-editorial uppercase text-emerald-400 px-1 font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero dropped TCP frames</span>
              </span>
              <span>0 HTTP 502s</span>
            </div>
          </div>
        </div>
      );

    case 'ring-buffer':
      return (
        <div className="space-y-4 font-code text-xs">
          <div className="p-5 bg-[#070707] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-[11px] font-editorial uppercase tracking-wider">
              <span className="text-offwhite-muted">CIRCULAR RING BUFFER</span>
              <span className="text-emerald-400 font-bold">RAM USAGE: 4.8 MB MAX</span>
            </div>

            <div className="grid grid-cols-10 gap-1.5 p-3 bg-surface border border-white/10">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-3 transition-all ${
                    i < 42
                      ? 'bg-gorok/70'
                      : i < 48
                      ? 'bg-gorok animate-pulse'
                      : 'bg-white/10'
                  }`}
                  title={`Slot #${i + 1}`}
                />
              ))}
            </div>

            <div className="flex justify-between text-[11px] font-editorial uppercase text-offwhite-secondary">
              <span>Slots: 50 Fixed</span>
              <span>Strategy: O(1) Overwrite</span>
              <span className="text-gorok font-bold">Zero Disk Writes</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
