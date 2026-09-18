import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  Trophy, 
  Sparkles,
  Users
} from 'lucide-react';
import { EDUCATION_HISTORY, LEADERSHIP_ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const EducationAchievements: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/60 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 font-mono text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMICS & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Undergraduate foundations in Computer Science Engineering alongside validated team leadership and competitive accomplishments.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-mono font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-teal-400" />
              Education
            </h3>

            {EDUCATION_HISTORY.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-4 hover:border-slate-750 transition-colors shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {edu.grade}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {edu.location}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <h5 className="text-[11px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                    Program Highlights:
                  </h5>
                  <div className="space-y-1.5">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications Card */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Certifications
              </h4>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert, cIdx) => (
                  <div 
                    key={cIdx}
                    className="p-2.5 rounded-lg bg-slate-850/60 border border-slate-800 flex items-center justify-between gap-2"
                  >
                    <span className="text-xs text-slate-200 font-medium">
                      {cert.title}
                    </span>
                    {cert.issuer && (
                      <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                        {cert.issuer}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Leadership & Achievements Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Trophy className="w-4 h-4 text-teal-400" />
              Leadership & Achievements
            </h3>

            <div className="space-y-4">
              {LEADERSHIP_ACHIEVEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 sm:p-6 hover:border-slate-700/80 transition-all shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-teal-300 self-start sm:self-auto border border-slate-750">
                      {item.year}
                    </span>
                  </div>

                  <div className="inline-block text-xs font-mono text-slate-400 mb-2.5">
                    {item.roleOrContext}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
