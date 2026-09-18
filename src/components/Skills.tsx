import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  BrainCircuit, 
  Server, 
  Layout, 
  Wrench,
  Sparkles,
  Search
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code': return <Code2 className="w-4 h-4 text-teal-400" />;
      case 'Database': return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-emerald-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-4 h-4 text-purple-400" />;
      case 'Server': return <Server className="w-4 h-4 text-amber-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-pink-400" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-blue-400" />;
      default: return <Code2 className="w-4 h-4 text-teal-400" />;
    }
  };

  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (activeCategory !== 'All' && group.category !== activeCategory) {
      return null;
    }
    const matchingSkills = group.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchingSkills.length === 0) return null;
    return { ...group, skills: matchingSkills };
  }).filter(Boolean);

  const categories = ['All', ...SKILL_GROUPS.map((g) => g.category)];

  return (
    <section id="skills" className="py-20 relative bg-[#0b0f17] border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 font-mono text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>STACK & COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Categorized technical proficiencies. Technologies marked with "Exploring" represent active current learning and lab exploration.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., Python, SQL, Spark)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
            />
          </div>
        </div>

        {/* Legend for Skill Badges */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-xs font-mono text-slate-400">
          <span className="text-slate-300 font-semibold">Legend:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            <span className="text-slate-200">Core Strength (Daily / Extensive Project Work)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
            <span className="text-slate-300">Proficient (Production / Solid Foundations)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-300/40" />
            <span className="text-amber-300/90">Exploring / In Progress (Current Study)</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            if (!group) return null;
            return (
              <div
                key={group.category}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 p-5 hover:border-slate-700/80 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700/50">
                        {getIcon(group.iconName)}
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {group.skills.length} items
                    </span>
                  </div>

                  {/* Skills Chip List */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const isCore = skill.level === 'Core';
                      const isExploring = skill.level === 'Exploring';
                      return (
                        <div
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-sans transition-all ${
                            isCore
                              ? 'bg-teal-950/40 border border-teal-500/30 text-teal-200 font-medium'
                              : isExploring
                              ? 'bg-amber-950/30 border border-dashed border-amber-500/40 text-amber-200/90 font-mono text-[11px]'
                              : 'bg-slate-800/70 border border-slate-700/60 text-slate-300'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isCore
                                ? 'bg-teal-400'
                                : isExploring
                                ? 'bg-amber-400'
                                : 'bg-slate-400'
                            }`}
                          />
                          <span>{skill.name}</span>
                          {isExploring && (
                            <span className="text-[9px] uppercase tracking-wider text-amber-400/80 font-mono">
                              (learning)
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Category Focus</span>
                  <span className="text-slate-400">
                    {group.skills.some((s) => s.level === 'Core') ? 'Core Stack' : 'Supplementary'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
