import React, { useState } from 'react';
import { RefreshCw, Check, Database, Shield } from 'lucide-react';
import { inspectorRequests } from '../data/gorokContent.js';

export default function InspectorMockup() {
  const [selectedReqId, setSelectedReqId] = useState(inspectorRequests[0].id);
  const [replaying, setReplaying] = useState(false);
  const [replaySuccess, setReplaySuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('payload');

  const currentReq = inspectorRequests.find((r) => r.id === selectedReqId) || inspectorRequests[0];

  const handleReplay = () => {
    setReplaying(true);
    setReplaySuccess(false);

    setTimeout(() => {
      setReplaying(false);
      setReplaySuccess(true);
      setTimeout(() => setReplaySuccess(false), 3500);
    }, 800);
  };

  return (
    <section id="inspector" className="py-24 md:py-36 border-b border-white/10 relative bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="font-editorial text-xs text-gorok tracking-[0.25em] uppercase font-bold mb-3">
            // LOCAL TELEMETRY & REPLAY ENGINE
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl uppercase font-bold text-offwhite tracking-tight mb-6">
            <span className="text-gorok">INSPECT EVERY BYTE.</span> REPLAY WITH ONE CLICK.
          </h2>
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary leading-relaxed">
            Testing webhooks from Stripe, GitHub, or Shopify? GoRok captures full HTTP headers and bodies in a local 50-slot circular Ring Buffer. Fix your bug in code, click Replay, and test again without making another test payment.
          </p>
        </div>

        {/* The Live Inspector UI Card */}
        <div className="border border-white/15 bg-surface overflow-hidden shadow-2xl">
          {/* Top Inspector Bar */}
          <div className="h-12 px-5 bg-[#101010] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-editorial text-xs font-bold text-gorok tracking-wider uppercase">
                GOROK LOCAL INSPECTOR
              </span>
              <span className="font-code text-[11px] px-2 py-0.5 bg-white/5 border border-white/10 text-offwhite-muted">
                http://localhost:4040
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-editorial text-offwhite-muted uppercase tracking-wider">
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-gorok" />
                <span>RING BUFFER: 4/50 SLOTS</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400" />
                <span>CAPTURING</span>
              </span>
            </div>
          </div>

          {/* Main Grid: Left request feed, Right detail inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Column: Request Feed */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0A0A0A] divide-y divide-white/5 overflow-y-auto">
              <div className="p-3 bg-[#0D0D0D] text-[11px] font-editorial text-offwhite-muted uppercase tracking-wider flex justify-between">
                <span>CAPTURED STREAMS</span>
                <span>LATENCY</span>
              </div>

              {inspectorRequests.map((req) => {
                const isSelected = req.id === currentReq.id;
                const is200 = req.status === 200;

                return (
                  <button
                    key={req.id}
                    onClick={() => setSelectedReqId(req.id)}
                    className={`w-full text-left p-4 transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-surface-elevated border-l-4 border-l-gorok'
                        : 'hover:bg-white/[0.03] border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`font-code text-xs font-bold px-2 py-0.5 border ${
                          is200
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-gorok/10 text-gorok border-gorok/30'
                        }`}
                      >
                        {req.status}
                      </span>
                      <div className="min-w-0">
                        <div className="font-code text-xs text-offwhite truncate">
                          <span className="font-bold text-offwhite-secondary mr-2">{req.method}</span>
                          {req.path}
                        </div>
                        <div className="font-code text-[10px] text-offwhite-muted mt-0.5">
                          {req.time} · {req.sizeIn}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-code text-xs text-offwhite-secondary">
                        {req.latency}
                      </span>
                    </div>
                  </button>
                );
              })}

              <div className="p-4 text-center text-xs font-editorial text-offwhite-muted border-t border-white/5 uppercase tracking-wider">
                50-SLOT RING BUFFER · DETERMINISTIC MEMORY
              </div>
            </div>

            {/* Right Column: Detailed Request Inspector */}
            <div className="lg:col-span-7 bg-surface p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Request Header Summary */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-code text-xs font-bold px-2.5 py-1 border ${
                          currentReq.status === 200
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-gorok/10 text-gorok border-gorok/30'
                        }`}
                      >
                        {currentReq.status} {currentReq.statusText}
                      </span>
                      <span className="font-code text-sm font-bold text-offwhite">
                        {currentReq.method} {currentReq.path}
                      </span>
                    </div>
                    <div className="font-code text-xs text-offwhite-muted mt-2">
                      Latency: <span className="text-offwhite">{currentReq.latency}</span> · Payload: <span className="text-offwhite">{currentReq.sizeIn}</span>
                    </div>
                  </div>

                  {/* Tabs: Payload vs Headers */}
                  <div className="flex border border-white/10 bg-[#0B0B0B] text-xs font-editorial uppercase tracking-wider">
                    <button
                      onClick={() => setActiveTab('payload')}
                      className={`px-3.5 py-1.5 transition-colors ${
                        activeTab === 'payload'
                          ? 'bg-surface-elevated text-gorok font-bold'
                          : 'text-offwhite-secondary hover:text-white'
                      }`}
                    >
                      JSON Body
                    </button>
                    <button
                      onClick={() => setActiveTab('headers')}
                      className={`px-3.5 py-1.5 transition-colors border-l border-white/10 ${
                        activeTab === 'headers'
                          ? 'bg-surface-elevated text-gorok font-bold'
                          : 'text-offwhite-secondary hover:text-white'
                      }`}
                    >
                      Headers ({Object.keys(currentReq.headers).length})
                    </button>
                  </div>
                </div>

                {/* Body or Headers view */}
                <div className="my-6">
                  {activeTab === 'payload' ? (
                    <div className="space-y-2">
                      <div className="text-[11px] font-editorial text-offwhite-muted uppercase tracking-widest">
                        RAW INCOMING PAYLOAD (DECODED STREAM)
                      </div>
                      <div className="border border-white/10 bg-[#060606] p-4 font-code text-xs text-offwhite leading-relaxed max-h-60 overflow-y-auto">
                        {currentReq.body ? (
                          <pre className="text-emerald-400/90 whitespace-pre-wrap">
                            {JSON.stringify(currentReq.body, null, 2)}
                          </pre>
                        ) : (
                          <span className="text-offwhite-muted italic">
                            Empty body (HTTP GET request)
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-[11px] font-editorial text-offwhite-muted uppercase tracking-widest">
                        FORWARDED HTTP HEADERS
                      </div>
                      <div className="border border-white/10 bg-[#060606] p-4 font-code text-xs text-offwhite max-h-60 overflow-y-auto space-y-2">
                        {Object.entries(currentReq.headers).map(([key, value]) => (
                          <div key={key} className="flex flex-col sm:flex-row">
                            <span className="text-offwhite-secondary w-44 font-semibold">{key}:</span>
                            <span className="text-offwhite break-all">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Area & Replay Feedback */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                {replaySuccess && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 font-code text-xs text-emerald-400 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Replay dispatched to localhost:3000 (Stream 200 OK · 38ms)</span>
                    </div>
                    <span className="text-[10px] text-emerald-400/70">YAMUX :9000</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Replay Button */}
                  <button
                    onClick={handleReplay}
                    disabled={replaying}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gorok text-black font-editorial font-bold text-xs uppercase tracking-wider hover:bg-gorok-hover transition-all duration-150 shadow-md shadow-gorok/10 disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${replaying ? 'animate-spin' : ''}`} />
                    <span>
                      {replaying
                        ? 'DISPATCHING REPLAY...'
                        : 'REPLAY REQUEST TO LOCALHOST:3000'}
                    </span>
                  </button>

                  <div className="text-xs font-editorial text-offwhite-muted flex items-center gap-1.5 uppercase tracking-wider text-center sm:text-right">
                    <Shield className="w-3.5 h-3.5 text-gorok shrink-0" />
                    <span>ZERO SERVER STORAGE · LOCAL RAM ONLY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
