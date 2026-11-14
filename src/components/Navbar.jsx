import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { GITHUB_REPO_URL } from '../data/gorokContent';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "COMMANDS", href: "#commands" },
    { name: "INSPECTOR", href: "#inspector" },
    { name: "CAPABILITIES", href: "#capabilities" },
    { name: "ECOSYSTEM", href: "#ecosystem" },
    { name: "TIMELINE", href: "#timeline" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`sticky top-0 z-50 h-[72px] transition-colors duration-200 border-b border-white/10 ${
      scrolled ? 'bg-void/90 backdrop-blur-md' : 'bg-void/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-surface-elevated border border-white/15 flex items-center justify-center text-gorok transition-transform duration-200 group-hover:scale-105 group-hover:border-gorok/40">
            <span className="font-mono font-bold text-lg leading-none tracking-tighter">G</span>
          </div>
          <span className="font-mono text-xl font-bold tracking-[0.1em] text-offwhite uppercase">
            GoRok
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-white/10 text-offwhite-muted bg-surface">
            v1.2-edge
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-offwhite-secondary hover:text-gorok transition-colors tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded border border-white/15 bg-surface text-offwhite text-xs font-mono hover:border-white/30 hover:text-white transition-all duration-150"
            title="View GoRok Source Code"
          >
            <Github className="w-4 h-4 text-offwhite-secondary" />
            <span>GitHub</span>
          </a>

          <a
            href="#commands"
            className="flex items-center gap-2 px-4 py-2 rounded bg-gorok text-black text-xs font-mono font-semibold tracking-wide hover:bg-gorok-hover transition-colors shadow-sm"
          >
            <Terminal className="w-4 h-4" />
            <span>Quickstart CLI</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded border border-white/15 text-offwhite hover:text-gorok hover:border-gorok/50 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-void/98 backdrop-blur-xl z-50 flex flex-col p-8 border-b border-white/10 lg:hidden">
          <div className="flex flex-col gap-6 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-lg tracking-wider text-offwhite-secondary hover:text-gorok transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <a
              href="#commands"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded bg-gorok text-black text-center font-mono font-bold text-sm tracking-wide hover:bg-gorok-hover transition-colors"
            >
              Quickstart CLI →
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded border border-white/20 text-offwhite text-center font-mono text-sm hover:border-white/40 flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
