/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterAuditBar } from './components/RecruiterAuditBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { EducationAchievements } from './components/EducationAchievements';
import { EngineeringJourney } from './components/EngineeringJourney';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Project } from './types';
import { FEATURED_PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleSelectProjectById = (projectId: string) => {
    const proj = FEATURED_PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-teal-500/30 selection:text-teal-200">
      {/* Top Fixed Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 2. Recruiter 10-Second Audit Bar */}
        <RecruiterAuditBar 
          onOpenResume={() => setResumeOpen(true)}
          onSelectProject={handleSelectProjectById}
        />

        {/* 3. About Section */}
        <About />

        {/* 4. Technical Skills Section */}
        <Skills />

        {/* 5. Featured Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Professional Experience Section */}
        <Experience />

        {/* 7. Education & Leadership Achievements */}
        <EducationAchievements />

        {/* 8. Engineering Journey & Current Learning */}
        <EngineeringJourney />

        {/* 9. GitHub Repositories Showcase */}
        <GitHubSection />

        {/* 10. Contact Section */}
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Case Study Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* ATS Resume Viewer / Print Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}

