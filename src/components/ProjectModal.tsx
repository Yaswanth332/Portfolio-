import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Database,
  BarChart3,
  ShieldCheck
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-900/90 flex items-start justify-between gap-4 sticky top-0 z-10 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  Priority 0{project.priority}
                </span>
              )}
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto text-slate-300 text-sm leading-relaxed">
          
          {/* Architecture Pipeline (if available) */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-teal-400">
                <Layers className="w-4 h-4" />
                <span>DATA ARCHITECTURE PIPELINE FLOW</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                {project.architecture.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-750 text-slate-200 font-medium">
                      {step}
                    </div>
                    {idx < project.architecture!.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Documented Model Results (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-850/70 border border-teal-500/20 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-teal-400">
                <span className="flex items-center gap-1.5 font-semibold">
                  <BarChart3 className="w-4 h-4" />
                  DOCUMENTED MODEL METRICS (TEST EVALUATION)
                </span>
                <span className="text-[10px] text-slate-400">From project repository evaluation</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <span className="block text-[11px] text-slate-400 font-mono">{m.label}</span>
                    <span className="block text-base font-bold text-teal-300 font-mono mt-0.5">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-850/40 border border-slate-800 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-amber-400 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                Problem Statement
              </h3>
              <p className="text-xs text-slate-300 leading-normal">
                {project.problemStatement || 'Implementation details available in repository.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-850/40 border border-slate-800 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-teal-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Technical Approach
              </h3>
              <p className="text-xs text-slate-300 leading-normal">
                {project.approach || 'Implementation details available in repository.'}
              </p>
            </div>
          </div>

          {/* Key Implementation Highlights */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
              Key Implementation Details
            </h3>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Outcome */}
          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            {project.challenges && (
              <div>
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase">Engineering Challenges:</span>
                <p className="text-xs text-slate-300 mt-1">{project.challenges}</p>
              </div>
            )}

            {project.outcome && (
              <div>
                <span className="text-xs font-mono font-semibold text-teal-400 uppercase">Result & Outcome:</span>
                <p className="text-xs text-slate-300 mt-1">{project.outcome}</p>
              </div>
            )}
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase">Technologies & Libraries</span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-medium transition-colors ml-auto"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
