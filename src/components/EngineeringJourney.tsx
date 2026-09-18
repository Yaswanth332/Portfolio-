import React from 'react';
import { 
  GitCommit, 
  ArrowDown, 
  Compass, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Cloud, 
  Database,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { ENGINEERING_JOURNEY_STEPS, CURRENTLY_LEARNING_TOPICS } from '../data/portfolioData';

export const EngineeringJourney: React.FC = () => {
  return (
    <section id="learning" className="py-20 relative bg-[#0b0f17] border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 font-mono text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>GROWTH & EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            "My interests have evolved from general software development toward systems built around data, intelligent applications, and scalable backend infrastructure."
          </p>
        </div>

        {/* Timeline Path Flow */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERING_JOURNEY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-teal-400 bg-teal-950/60 border border-teal-800/40 px-2 py-0.5 rounded">
                      Step {step.step}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Milestone</span>
                  <span className="text-teal-400 font-semibold">Completed / Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Exploring & Learning Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-400" />
                <span>Currently Exploring & Learning</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Active study areas, sandbox experiments, and distributed computing coursework.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              No artificial metrics • Real hands-on exploration
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CURRENTLY_LEARNING_TOPICS.map((topic, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/60 border border-slate-800/90 p-5 flex flex-col justify-between hover:border-slate-750 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-teal-400 font-semibold px-2 py-0.5 rounded bg-teal-950/40 border border-teal-800/30">
                      {topic.category}
                    </span>
                    <span className="text-[11px] font-mono text-amber-300/90 bg-amber-950/30 border border-amber-800/30 px-2 py-0.5 rounded">
                      {topic.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight mt-2 mb-1.5">
                    {topic.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {topic.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Lab building & continuous practice</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
