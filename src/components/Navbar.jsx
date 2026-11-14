import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
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
    { name: "ARCHITECTURE", href: "#architecture" },
    { name: "COMMANDS", href: "#commands" },
    { name: "INSPECTOR", href: "#inspector" },
    { name: "CAPABILITIES", href: "#capabilities" },
    { name: "ECOSYSTEM", href: "#ecosystem" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`sticky top-0 z-50 h-[72px] transition-colors duration-200 border-b border-white/10 ${
      scrolled ? 'bg-void/90 backdrop-blur-md' : 'bg-void/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand Wordmark - Clean, direct, no generic version pills */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-surface-elevated border border-white/20 flex items-center justify-center text-gorok transition-transform duration-200 group-hover:border-gorok/50">
            <span className="font-editorial font-bold text-lg leading-none">G</span>
          </div>
          <span className="font-editorial text-xl font-bold tracking-[0.14em] text-offwhite uppercase">
            GoRok
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-editorial text-offwhite-secondary hover:text-gorok transition-colors tracking-widest uppercase"
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
            className="flex items-center gap-2 px-3.5 py-2 border border-white/15 bg-surface text-offwhite text-xs font-editorial tracking-wider hover:border-white/30 hover:text-white transition-all duration-150 uppercase"
            title="View GoRok Source Code"
          >
            <GithubIcon className="w-4 h-4 text-offwhite-secondary" />
            <span>GitHub</span>
          </a>

          <a
            href="#commands"
            className="flex items-center gap-2 px-4 py-2 bg-gorok text-black text-xs font-editorial font-bold tracking-wider hover:bg-gorok-hover transition-colors shadow-sm uppercase"
          >
            <Terminal className="w-4 h-4" />
            <span>Quickstart</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 border border-white/15 text-offwhite hover:text-gorok hover:border-gorok/50 transition-colors"
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
                className="font-editorial text-lg tracking-wider text-offwhite-secondary hover:text-gorok transition-colors py-2 border-b border-white/5 uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <a
              href="#commands"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-gorok text-black text-center font-editorial font-bold text-sm tracking-wide hover:bg-gorok-hover transition-colors uppercase"
            >
              Quickstart →
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-white/20 text-offwhite text-center font-editorial text-sm hover:border-white/40 flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
