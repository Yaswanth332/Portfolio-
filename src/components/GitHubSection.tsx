import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  GitFork, 
  Star, 
  FolderGit2, 
  Code2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { GITHUB_REPOSITORIES, PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedRepos = showAll ? GITHUB_REPOSITORIES : GITHUB_REPOSITORIES.slice(0, 6);

  return (
    <section id="github" className="py-20 relative bg-slate-950/70 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 font-mono text-xs font-semibold">
              <Github className="w-3.5 h-3.5" />
              <span>OPEN SOURCE & CODE REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              GitHub Repositories
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              "My GitHub is where I experiment, build projects, practice concepts, and document my engineering journey."
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-750 text-xs font-semibold transition-colors shadow-sm"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span>View GitHub Profile (@{PERSONAL_INFO.githubUsername})</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-850/60 transition-all duration-150 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <h3 className="text-sm font-bold text-white tracking-tight font-mono group-hover:text-teal-300 transition-colors truncate max-w-[200px]">
                      {repo.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-300 transition-colors shrink-0" />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2 mb-4">
                  {repo.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {repo.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono border border-slate-750"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{repo.category}</span>
                  <span className="text-slate-400 group-hover:text-teal-400 transition-colors">
                    Public Repo
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Repos Toggle */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-750 text-xs font-semibold transition-colors"
          >
            {showAll ? 'Show Fewer Repositories' : `View All ${GITHUB_REPOSITORIES.length} Featured Repositories`}
          </button>
        </div>

      </div>
    </section>
  );
};
