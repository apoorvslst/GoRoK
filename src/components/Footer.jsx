import React from 'react';
import { GITHUB_REPO_URL, siteMetadata } from '../data/gorokContent';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const docLinks = [
    { name: "CLI Reference", href: "#commands" },
    { name: "Architecture Specs", href: "#capabilities" },
    { name: "Yamux Protocol", href: `${GITHUB_REPO_URL}#protocol` },
    { name: "Prometheus Metrics", href: `${GITHUB_REPO_URL}#metrics` },
  ];

  const ossLinks = [
    { name: "GitHub Repository", href: GITHUB_REPO_URL },
    { name: "Release Binaries", href: `${GITHUB_REPO_URL}/releases` },
    { name: "Issue Tracker", href: `${GITHUB_REPO_URL}/issues` },
    { name: "Benchmarks", href: `${GITHUB_REPO_URL}#benchmarks` },
  ];

  const secLinks = [
    { name: "Local Privacy Guarantee", href: "#inspector" },
    { name: "Zero Retention Policy", href: "#capabilities" },
    { name: "Token Authentication", href: "#commands" },
    { name: "Ring Buffer Specs", href: "#inspector" },
  ];

  return (
    <footer className="bg-[#050505] text-offwhite border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded bg-surface-elevated border border-white/15 flex items-center justify-center text-gorok">
                <span className="font-mono font-bold text-xs leading-none">G</span>
              </div>
              <span className="font-mono text-xl font-bold tracking-[0.1em] text-offwhite uppercase">
                {siteMetadata.name}
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-offwhite-secondary">
              {siteMetadata.tagline}
            </p>
          </div>

          {/* System Status Pill with pulsing green dot */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface border border-white/10 text-xs font-mono text-offwhite-secondary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wider">{siteMetadata.statusPill}</span>
          </div>
        </div>

        {/* Middle Row: 3 Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Column 1: Documentation */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-gorok font-bold mb-4">
              DOCUMENTATION
            </div>
            <ul className="space-y-3 font-mono text-xs text-offwhite-secondary">
              {docLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-gorok transition-colors flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Open Source */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-gorok font-bold mb-4">
              OPEN SOURCE
            </div>
            <ul className="space-y-3 font-mono text-xs text-offwhite-secondary">
              {ossLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gorok transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Security */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-gorok font-bold mb-4">
              SECURITY & PRIVACY
            </div>
            <ul className="space-y-3 font-mono text-xs text-offwhite-secondary">
              {secLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-gorok transition-colors flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-offwhite-muted gap-4">
          <div>{siteMetadata.copyright}</div>
          <div className="flex items-center gap-6">
            <span>Built with Go & Yamux</span>
            <span className="opacity-30">·</span>
            <span>No Cookies or Tracking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

