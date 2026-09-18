import React, { useState } from 'react';
import { 
  CheckCircle2, 
  User, 
  Cpu, 
  FolderGit2, 
  Briefcase, 
  Github, 
  PhoneCall, 
  FileDown,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RecruiterAuditBarProps {
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export const RecruiterAuditBar: React.FC<RecruiterAuditBarProps> = ({ onOpenResume, onSelectProject }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const auditPoints = [
    {
      number: '1',
      question: 'Who is Yaswanth?',
      answer: 'CS Engineering student at RGUKT Ongole (CGPA: 9.3/10). Early-career engineer building practical data & AI systems.',
      icon: User,
      actionLabel: 'Read Bio',
      actionHref: '#about',
    },
    {
      number: '2',
      question: 'Technical Focus',
      answer: 'Data Engineering (Medallion Bronze/Silver/Gold, Star Schema, ETL) • AI/ML (Scikit-learn, XGBoost, Whisper) • Python & SQL.',
      icon: Cpu,
      actionLabel: 'View Skills',
      actionHref: '#skills',
    },
    {
      number: '3',
      question: 'Key Projects Built',
      answer: 'SQL Data Warehouse, Credit Card Churn (95.36% acc), Local Whisper (Docker Speech-to-Text), AGRISMART, Retail Data Pipeline.',
      icon: FolderGit2,
      actionLabel: 'Explore Projects',
      actionHref: '#projects',
    },
    {
      number: '4',
      question: 'Industry Experience',
      answer: 'Software Developer Intern at CodeTantra (3 months) working on enterprise EMS evaluation rules, SolidJS, Java, and MongoDB.',
      icon: Briefcase,
      actionLabel: 'See Role Details',
      actionHref: '#experience',
    },
    {
      number: '5',
      question: 'GitHub Activity',
      answer: 'github.com/Yaswanth332 — 25+ public repositories containing open-source pipelines, ML models, and APIs.',
      icon: Github,
      actionLabel: 'Open GitHub',
      actionHref: PERSONAL_INFO.github,
      external: true,
    },
    {
      number: '6',
      question: 'Contact Details',
      answer: `${PERSONAL_INFO.email} • ${PERSONAL_INFO.phone}`,
      icon: PhoneCall,
      actionLabel: 'Contact Yaswanth',
      actionHref: '#contact',
    },
    {
      number: '7',
      question: 'Resume Access',
      answer: 'One-page ATS formatted engineering resume ready for direct preview and download.',
      icon: FileDown,
      actionLabel: 'Open Resume',
      onClick: onOpenResume,
    },
  ];

  return (
    <section className="relative z-10 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16" id="recruiter-snapshot">
      <div className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold tracking-wide uppercase font-mono text-slate-200">
                10-Second Recruiter Summary
              </h2>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-mono">
                Verified Facts
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-400">
            Designed for engineering hiring managers, technical screeners, and recruiters
          </p>
        </div>

        {/* 7 Recruiter Checks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 pt-4">
          {auditPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.number}
                className="bg-slate-850/70 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700/80 rounded-xl p-3.5 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold text-teal-400 bg-teal-950/60 border border-teal-800/40 px-2 py-0.5 rounded-md">
                      0{item.number} • {item.question}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                    {item.answer}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  {item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="text-xs font-medium text-teal-400 hover:text-teal-300 flex items-center gap-1 transition-colors"
                    >
                      <span>{item.actionLabel}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <a
                      href={item.actionHref}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer noopener' : undefined}
                      className="text-xs font-medium text-teal-400 hover:text-teal-300 flex items-center gap-1 transition-colors"
                    >
                      <span>{item.actionLabel}</span>
                      {item.external ? <ExternalLink className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                    </a>
                  )}

                  {item.number === '6' && (
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                      className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 font-mono transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedField === 'email' ? <Check className="w-3 h-3 text-teal-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {/* Quick Contact & Status Card */}
          <div className="bg-gradient-to-br from-teal-950/30 via-slate-850 to-slate-900 border border-teal-500/20 rounded-xl p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono font-semibold text-teal-300">
                  Current Status
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-200 font-medium mb-1">
                Open to Software / Data Engineering Roles
              </p>
              <p className="text-[11px] text-slate-400 leading-snug">
                Graduating 2027 • Immediate internship availability or technical interviews.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-[11px] font-mono text-slate-300 hover:text-teal-300 transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
