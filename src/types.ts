export type ProjectCategory = 
  | 'All' 
  | 'Data Engineering' 
  | 'AI / ML' 
  | 'Backend' 
  | 'Web' 
  | 'Data Analysis' 
  | 'Practice & Learning';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  architecture?: string[];
  metrics?: ProjectMetric[];
  githubUrl: string;
  demoUrl?: string;
  caseStudyAvailable: boolean;
  problemStatement?: string;
  approach?: string;
  challenges?: string;
  outcome?: string;
  featured: boolean;
  priority: number;
}

export interface SkillItem {
  name: string;
  level: 'Core' | 'Proficient' | 'Exploring';
  highlight?: boolean;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  field: string;
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  roleOrContext: string;
  year: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer?: string;
}

export interface GitHubRepoItem {
  name: string;
  description: string;
  tech: string[];
  url: string;
  category: string;
}
