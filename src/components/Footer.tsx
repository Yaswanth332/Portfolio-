import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ArrowUp,
  Heart
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-850 py-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-tight text-base">
                {PERSONAL_INFO.displayName}
              </span>
              <span className="text-xs text-slate-500 font-mono">•</span>
              <span className="text-xs text-teal-400 font-mono">
                Data & AI Engineering
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              "{PERSONAL_INFO.headline}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>Email</span>
            </a>

            <button
              onClick={onOpenResume}
              className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors ml-auto md:ml-4"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Yaswanth Krishna Jonnalagadda. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Andhra Pradesh / Hyderabad, India</span>
            <span>•</span>
            <span>RGUKT Ongole Class of 2027</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
