import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, RefreshCw, Zap, Server, Shield, Laptop, Globe, Database, Activity } from 'lucide-react';

export default function ArchitectureFlowchart() {
  const [activeFlow, setActiveFlow] = useState('incoming'); // 'incoming' | 'replay'
  const [selectedNode, setSelectedNode] = useState('yamux');

  const nodes = [
    {
      id: 'app',
      label: 'LOCAL SERVER',
      sub: 'localhost:3000',
      tag: 'PORT 3000',
      icon: <Laptop className="w-4 h-4 text-offwhite" />,
      desc: 'Your actual web application running locally (Next.js, FastAPI, Gin, Express). Never touched directly by the internet.',
      specs: ['HTTP/1.1 or HTTP/2', 'Host: localhost:3000', 'Zero code changes needed']
    },
    {
      id: 'agent',
      label: 'GOROK CLIENT',
      sub: 'Single Go Binary',
      tag: 'LOCAL AGENT',
      icon: <Server className="w-4 h-4 text-gorok" />,
      desc: 'The gorok client process running on your laptop. Holds the Yamux session, 50-slot circular ring buffer, and channel semaphores.',
      specs: ['Bounded 100-stream semaphore', '50-slot circular buffer in RAM', 'Local inspector on :4040']
    },
    {
      id: 'yamux',
      label: 'YAMUX OUTBOUND TLS',
      sub: 'Multiplexed TCP Pipe',
      tag: 'OUTBOUND ONLY',
      icon: <Zap className="w-4 h-4 text-gorok" />,
      desc: 'Single long-lived outbound TCP connection. Yamux multiplexes hundreds of concurrent logical request/response streams over 1 socket.',
      specs: ['Zero inbound router firewall holes', 'TLS 1.3 encrypted tunnel', 'Window-based flow control']
    },
    {
      id: 'edge',
      label: 'EDGE GATEWAY',
      sub: 'gorokd Cluster',
      tag: 'PUBLIC EDGE',
      icon: <Shield className="w-4 h-4 text-offwhite" />,
      desc: 'Public reverse-proxy node terminating HTTPS and forwarding incoming subdomain HTTP requests into the matching Yamux tunnel.',
      specs: ['45-second subdomain grace period', 'Token authentication validation', 'Prometheus metrics exported on :9090']
    },
    {
      id: 'public',
      label: 'PUBLIC WEB',
      sub: '*.gorok.dev',
      tag: 'WEBHOOKS & USERS',
      icon: <Globe className="w-4 h-4 text-offwhite" />,
      desc: 'Public internet callers: Stripe, GitHub, Shopify webhooks, or mobile browsers accessing your custom subdomain URL.',
      specs: ['HTTPS on port 443', 'Global low-latency DNS', 'Automatic TLS certificates']
    }
  ];

  const currentNodeData = nodes.find(n => n.id === selectedNode) || nodes[2];

  return (
    <section id="architecture" className="py-24 md:py-36 border-b border-white/10 relative bg-[#060606]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="font-editorial text-xs text-gorok tracking-[0.25em] uppercase font-bold mb-3">
            // SYSTEM TOPOLOGY & FLOW ARCHITECTURE
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl uppercase font-bold text-offwhite tracking-tight mb-6">
            HOW GOROK CONNECTS<br />EDGE TO LOCALHOST
          </h2>
          <p className="font-sans text-base sm:text-lg text-offwhite-secondary leading-relaxed">
            Unlike fragile SSH tunnels that spawn separate OS processes or port-forwarding hacks that compromise your local router, GoRok establishes an outbound multiplexed Yamux channel that never opens an inbound port.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-white/10">
          <span className="font-editorial text-xs uppercase text-offwhite-muted tracking-wider mr-2">
            SIMULATE FLOW:
          </span>
          <button
            onClick={() => setActiveFlow('incoming')}
            className={`px-4 py-2 font-editorial text-xs uppercase tracking-wider transition-all border ${
              activeFlow === 'incoming'
                ? 'bg-gorok text-black border-gorok font-bold'
                : 'bg-surface text-offwhite-secondary border-white/15 hover:border-white/30'
            }`}
          >
            01 / Inbound Webhook Delivery Flow
          </button>
          <button
            onClick={() => setActiveFlow('replay')}
            className={`px-4 py-2 font-editorial text-xs uppercase tracking-wider transition-all border ${
              activeFlow === 'replay'
                ? 'bg-gorok text-black border-gorok font-bold'
                : 'bg-surface text-offwhite-secondary border-white/15 hover:border-white/30'
            }`}
          >
            02 / Local Ring Buffer 1-Click Replay Flow
          </button>
        </div>

        {/* The Visual Architecture Flowchart */}
        <div className="border border-white/15 bg-surface p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          {/* Flow Direction Indicator */}
          <div className="flex items-center justify-between text-xs font-editorial uppercase tracking-widest text-offwhite-muted mb-8 pb-4 border-b border-white/10">
            <span>
              {activeFlow === 'incoming'
                ? 'Direction: Public Web → Edge Router → Yamux Stream → Localhost'
                : 'Direction: Local Inspector (:4040) → Circular Ring Buffer → Localhost:3000'}
            </span>
            <span className="text-gorok font-bold">
              {activeFlow === 'incoming' ? 'TRAFFIC INGRESS' : 'LOCAL REPLAY (0 SERVER CALLS)'}
            </span>
          </div>

          {/* Flowchart Diagram Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10 items-stretch">
            {nodes.map((node, index) => {
              const isSelected = selectedNode === node.id;
              const isEdge = node.id === 'edge' || node.id === 'yamux';

              return (
                <div key={node.id} className="flex flex-col justify-between">
                  {/* Card Node */}
                  <button
                    onClick={() => setSelectedNode(node.id)}
                    className={`h-full text-left p-5 border transition-all relative group flex flex-col justify-between ${
                      isSelected
                        ? 'border-gorok bg-[#141414] shadow-lg shadow-gorok/10'
                        : 'border-white/10 bg-[#0A0A0A] hover:border-white/25 hover:bg-[#0F0F0F]'
                    }`}
                  >
                    {/* Top Tag & Index */}
                    <div>
                      <div className="flex items-center justify-between mb-3 text-[10px] font-editorial uppercase tracking-wider">
                        <span className="text-offwhite-muted">0{index + 1}</span>
                        <span className={isSelected ? 'text-gorok font-bold' : 'text-offwhite-muted'}>
                          {node.tag}
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-2 mb-2">
                        {node.icon}
                        <h3 className="font-editorial text-sm font-bold text-offwhite tracking-wide uppercase">
                          {node.label}
                        </h3>
                      </div>

                      <div className="font-code text-xs text-gorok font-medium mb-3">
                        {node.sub}
                      </div>

                      <p className="font-sans text-xs text-offwhite-secondary leading-relaxed line-clamp-3">
                        {node.desc}
                      </p>
                    </div>

                    {/* Footer State */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-editorial text-offwhite-muted uppercase">
                      <span>Click to inspect</span>
                      <span className={isSelected ? 'text-gorok font-bold' : 'group-hover:text-white'}>
                        →
                      </span>
                    </div>

                    {/* Active Indicator Bar */}
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gorok" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Connection Cables Visualization (Desktop) */}
          <div className="hidden md:flex items-center justify-between px-12 py-6 text-gorok/40 text-xs font-editorial">
            <div className="flex-1 flex items-center justify-center gap-2">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase tracking-wider text-offwhite-muted">IPC / Loopback</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-2">
              <span className="h-px flex-1 bg-gorok/30" />
              <span className="text-[10px] uppercase tracking-wider text-gorok font-bold">Outbound TLS 1.3</span>
              <span className="h-px flex-1 bg-gorok/30" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-2">
              <span className="h-px flex-1 bg-gorok/30" />
              <span className="text-[10px] uppercase tracking-wider text-gorok font-bold">Multiplexed Pipe</span>
              <span className="h-px flex-1 bg-gorok/30" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-2">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase tracking-wider text-offwhite-muted">HTTPS 443</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
          </div>

          {/* Node Inspector Detailed Drawer */}
          <div className="mt-8 pt-6 border-t border-white/10 bg-[#090909] p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-xs font-bold text-gorok uppercase tracking-wider">
                    [ NODE SPECS ] {currentNodeData.label}
                  </span>
                  <span className="font-code text-xs px-2 py-0.5 bg-white/5 border border-white/10 text-offwhite">
                    {currentNodeData.sub}
                  </span>
                </div>
                <p className="font-sans text-sm text-offwhite-secondary max-w-2xl leading-relaxed">
                  {currentNodeData.desc}
                </p>
              </div>

              {/* Technical specifications pills */}
              <div className="flex flex-col sm:flex-row gap-3">
                {currentNodeData.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 bg-[#111111] border border-white/10 font-code text-xs text-offwhite whitespace-nowrap"
                  >
                    <div className="text-[10px] font-editorial text-offwhite-muted uppercase mb-1">
                      SPEC 0{i + 1}
                    </div>
                    <div>{spec}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

