import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Github, 
  Mail, 
  Menu, 
  X, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'learning', 'github', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Journey', href: '#learning', id: 'learning' },
    { name: 'GitHub', href: '#github', id: 'github' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg"
          id="nav-brand-link"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 via-slate-800 to-slate-900 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold font-mono text-sm tracking-wider shadow-inner group-hover:border-teal-400 transition-colors">
            YK
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 tracking-tight text-base group-hover:text-teal-300 transition-colors">
              {PERSONAL_INFO.displayName}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              Data & AI Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full shadow-inner" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                  isActive
                    ? 'text-teal-300 bg-teal-500/10 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-750 rounded-lg transition-colors"
            title="View GitHub profile"
            id="nav-github-button"
          >
            <Github className="w-3.5 h-3.5 text-slate-400" />
            <span>GitHub</span>
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-teal-300 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 hover:border-teal-400/50 rounded-lg transition-all shadow-sm"
            id="nav-resume-button"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors shadow-sm"
            id="nav-contact-button"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60 focus:outline-none"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0b0f17]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-2 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-teal-300 bg-teal-500/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/30 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download Resume (PDF)</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 rounded-lg"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
