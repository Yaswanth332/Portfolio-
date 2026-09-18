import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  BarChart2, 
  ChevronRight,
  Database,
  Cpu,
  Sparkles
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Data Engineering',
    'AI / ML',
    'Backend',
    'Web',
    'Data Analysis',
    'Practice & Learning',
  ];

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 relative bg-slate-950/70 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 font-mono text-xs font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PRACTICAL IMPLEMENTATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              A selection of projects where I've explored data, AI, backend engineering, and practical software systems.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 font-semibold shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 group"
            >
              {/* Card Header & Content */}
              <div>
                
                {/* Category & Priority Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-slate-800 text-teal-300 border border-slate-700/60">
                    {project.category}
                  </span>
                  {project.priority <= 3 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950/60 text-teal-400 border border-teal-800/40">
                      High Priority
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Model Metrics Callout (e.g. Churn Prediction) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mb-4 p-2.5 rounded-lg bg-teal-950/20 border border-teal-500/20 grid grid-cols-2 gap-2 text-center">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <span className="block text-[10px] font-mono text-slate-400">{m.label}</span>
                        <span className="block text-sm font-bold text-teal-300 font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Architecture Steps Callout */}
                {project.architecture && project.architecture.length > 0 && (
                  <div className="mb-4 p-2.5 rounded-lg bg-slate-950 border border-slate-850">
                    <span className="block text-[10px] font-mono text-teal-400 font-semibold mb-1">
                      Medallion Architecture
                    </span>
                    <p className="text-[11px] font-mono text-slate-400 truncate">
                      Bronze → Silver → Gold Analytics
                    </p>
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-750"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-750 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                  title="View GitHub repository"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
