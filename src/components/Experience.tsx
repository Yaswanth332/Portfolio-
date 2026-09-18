import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Terminal,
  Clock,
  ShieldAlert
} from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#0b0f17] border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 font-mono text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Hands-on software development internship experience inside a production codebase.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 hover:border-slate-700/80 transition-all shadow-lg shadow-black/20"
            >
              {/* Header Details */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-2">
                    <span className="text-white font-semibold text-sm">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-teal-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-teal-300">
                      <Clock className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-750 text-xs text-slate-300 font-mono text-left md:text-right">
                  Enterprise Evaluation Systems
                </div>
              </div>

              {/* Body Summary & Key Responsibilities */}
              <div className="py-6 space-y-4 text-sm text-slate-300">
                <p className="leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                    Key Contributions & Engineering Work:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Used Strip */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono border border-slate-750"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
