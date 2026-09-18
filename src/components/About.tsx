import React from 'react';
import { 
  CheckCircle2, 
  Target, 
  Terminal, 
  Layers, 
  Sparkles, 
  Compass,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO, QUICK_STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  const principles = [
    { title: 'Building useful products', desc: 'Prioritizing functional software that solves practical user problems over theoretical demonstrations.' },
    { title: 'Understanding systems deeply', desc: 'Digging into how data moves through end-to-end architectures — from ingestion and transformation to query execution.' },
    { title: 'Working with data', desc: 'Crafting clean schemas, validating data quality, and building reliable pipelines using PostgreSQL, SQL, and Python.' },
    { title: 'Learning continuously', desc: 'Actively expanding from foundational software engineering into distributed data pipelines (Spark, Kafka, dbt, Airflow).' },
    { title: 'Turning ideas into working software', desc: 'Iterating through prototypes, testing edge cases, containerizing with Docker, and pushing working code to GitHub.' },
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 font-mono text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A growing engineer focused on building durable software, reliable data pipelines, and machine learning systems.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main First-Person Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <p>
                I'm <strong className="text-white font-semibold">Yaswanth Krishna</strong>, a Computer Science Engineering student interested in building practical systems around data, artificial intelligence, and backend engineering.
              </p>
              
              <p>
                My work spans Python, SQL, PostgreSQL, Django, Flask, machine learning, computer vision, Docker, modern web technologies, and AI-focused applications.
              </p>
              
              <p>
                I've built projects ranging from machine-learning prediction systems and agricultural applications to SQL data warehouses, speech-to-text tools, APIs, and quantum-computing experiments.
              </p>
              
              <p>
                I'm especially interested in understanding how data moves through a system — from ingestion and transformation to storage, analytics, machine learning, and deployment.
              </p>
              
              <p className="text-slate-200">
                Currently, I'm deepening my skills in Data Engineering, distributed systems, cloud technologies, and AI/ML while continuing to build practical projects.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {QUICK_STATS.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between"
                >
                  <span className="text-xs text-slate-400 font-mono mb-1">{stat.label}</span>
                  <span className="text-base font-bold text-teal-300 tracking-tight">{stat.value}</span>
                  <span className="text-[11px] text-slate-400 mt-1 font-sans">{stat.detail}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: "What I Care About" & Education snippet (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* What I care about card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <Target className="w-4 h-4 text-teal-400" />
                <h3 className="text-base font-semibold text-white tracking-tight">
                  What I Care About
                </h3>
              </div>

              <div className="space-y-3.5">
                {principles.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wide font-mono">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Snapshot Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-teal-300 font-semibold">ACADEMIC PROFILE</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">2023 – 2027</span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  Rajiv Gandhi University of Knowledge Technologies
                </h4>
                <p className="text-xs text-slate-400">
                  B.Tech in Computer Science & Engineering • CGPA: <span className="text-teal-300 font-semibold">9.3 / 10</span>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
