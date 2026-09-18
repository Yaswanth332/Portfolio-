import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header */}
        <div className="p-4 sm:px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 sticky top-0 z-10 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <h2 className="text-base font-bold text-white tracking-tight">
              Yaswanth Krishna — Engineering Resume
            </h2>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20 hidden sm:inline-block">
              ATS-Optimized Single Page
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body (Rendered to match standard single-page ATS format) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans text-xs leading-normal print:p-0 print:m-0">
          
          {/* Header */}
          <div className="text-center pb-4 border-b border-slate-300 space-y-1">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase">
              JONNALAGADDA YASWANTH KRISHNA
            </h1>
            <p className="text-[11px] font-semibold text-slate-700">
              Computer Science Engineering Student | Python | SQL | Full-Stack Development | AI/ML
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-600 pt-0.5">
              <span>Andhra Pradesh, India</span>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline font-medium">
                {PERSONAL_INFO.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline font-medium">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline font-medium text-teal-800">
                github.com/Yaswanth332
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="py-3 border-b border-slate-200">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-1">
              SUMMARY
            </h2>
            <p className="text-[11px] text-slate-700 leading-relaxed text-justify">
              Computer Science Engineering undergraduate with hands-on experience building and debugging production web applications and AI/data projects. Completed a 3-month Software Development Internship at CodeTantra, working with JavaScript, TypeScript, SolidJS, Java, REST APIs, MongoDB, Git, and Docker. Experienced in Python, FastAPI, SQL, Django, Pandas, Machine Learning, and data engineering, with projects spanning AI applications, backend systems, and data pipelines.
            </p>
          </div>

          {/* Education */}
          <div className="py-3 border-b border-slate-200">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-1.5">
              EDUCATION
            </h2>
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-[11px] font-bold text-slate-900">
                  Rajiv Gandhi University of Knowledge Technologies, Ongole
                </h3>
                <p className="text-[11px] text-slate-700 italic">
                  B.Tech in Computer Science and Engineering
                </p>
              </div>
              <div className="text-right text-[11px]">
                <span className="font-semibold text-slate-800">2023 – 2027</span>
                <p className="font-bold text-teal-800">CGPA: 9.3 / 10</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="py-3 border-b border-slate-200">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-1.5">
              EXPERIENCE
            </h2>
            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-[11px] font-bold text-slate-900">
                    CodeTantra
                  </h3>
                  <p className="text-[11px] text-slate-700 italic font-medium">
                    Software Development Intern
                  </p>
                </div>
                <div className="text-right text-[11px] text-slate-700">
                  <span className="font-semibold text-slate-800">Jun 2026 – Sep 2026</span>
                  <p>Hyderabad, India</p>
                </div>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-700 pt-1">
                <li>Developed and maintained production web applications using JavaScript, TypeScript, SolidJS, Java, JSP, REST APIs, MongoDB, Git, and Docker.</li>
                <li>Implemented and enhanced application features involving business rules, backend APIs, and evaluation workflows.</li>
                <li>Implemented and validated the Evaluator Assignment Rules module in the EMS Settings application.</li>
                <li>Investigated and resolved production issues by tracing UI, API, state, navigation, and backend logic.</li>
                <li>Refactored frontend and backend components to improve code readability, maintainability, and quality.</li>
                <li>Collaborated with senior engineers through code reviews, testing, debugging, and feature validation in an Agile environment.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="py-3 border-b border-slate-200">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-1.5">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-[11px] text-slate-700">
              <div><strong className="text-slate-900">Languages:</strong> Python, Java, JavaScript, TypeScript, SQL, C</div>
              <div><strong className="text-slate-900">AI/ML & Data:</strong> Machine Learning, Pandas, NumPy, OCR, ETL, Data Warehousing, Medallion Architecture, Star Schema</div>
              <div><strong className="text-slate-900">Backend:</strong> FastAPI, Django, Django REST Framework, Java/JSP, REST APIs</div>
              <div><strong className="text-slate-900">Frontend:</strong> React, SolidJS, HTML, CSS, Bootstrap</div>
              <div><strong className="text-slate-900">Databases:</strong> PostgreSQL, MySQL, MongoDB, SQLite</div>
              <div><strong className="text-slate-900">Engineering:</strong> Git, GitHub, Docker, Linux, AWS, HTTP, Debugging, Testing, OOP, Data Structures</div>
              <div><strong className="text-slate-900">Tools:</strong> VS Code, SQLAlchemy</div>
            </div>
          </div>

          {/* Projects */}
          <div className="py-3 border-b border-slate-200">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-1.5">
              PROJECTS
            </h2>
            
            <div className="space-y-2.5">
              {/* AGRISMART */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[11px] font-bold text-slate-900">
                    AGRISMART – Intelligent Crop Recommendation System
                  </h3>
                  <span className="text-[10px] text-slate-600 italic">
                    Python, Django, Pandas, OCR, Machine Learning
                  </span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-700 mt-0.5">
                  <li>Built a full-stack Django application for crop recommendation and soil analysis using machine learning and data-processing workflows.</li>
                  <li>Integrated OCR, Pandas, and external weather data to process user and environmental information within application workflows.</li>
                </ul>
              </div>

              {/* Retail Data Warehouse Pipeline */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[11px] font-bold text-slate-900">
                    Retail Data Warehouse Pipeline
                  </h3>
                  <span className="text-[10px] text-slate-600 italic">
                    Python, FastAPI, Pandas, SQLAlchemy, MySQL, AWS
                  </span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-700 mt-0.5">
                  <li>Built an ETL pipeline transforming raw retail data through Bronze, Silver, and Gold layers using a medallion architecture.</li>
                  <li>Developed data ingestion workflows using FastAPI, Pandas, SQLAlchemy, and MySQL, and designed dimensional models and analytics dashboards.</li>
                </ul>
              </div>

              {/* SQL Data Warehouse Project */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[11px] font-bold text-slate-900">
                    SQL Data Warehouse Project
                  </h3>
                  <span className="text-[10px] text-slate-600 italic">
                    PostgreSQL, SQL, ETL
                  </span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-700 mt-0.5">
                  <li>Designed a PostgreSQL data warehouse integrating CRM and ERP datasets for analytical use cases.</li>
                  <li>Automated ETL workflows using SQL stored procedures and structured transformed data for reporting.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Leadership & Achievements */}
          <div className="py-3 border-b border-slate-200">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-1">
              LEADERSHIP & ACHIEVEMENTS
            </h2>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-700">
              <li><strong className="text-slate-900">Team Lead – Smart India Hackathon (SIH) 2025:</strong> Led a 6-member team working on a software solution.</li>
              <li><strong className="text-slate-900">Researcher – Road Crack Detection Project:</strong> Worked on machine-learning-based approaches for automated road crack analysis.</li>
              <li><strong className="text-slate-900">Runner-Up – AQVH Competition 2025.</strong></li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="pt-3">
            <h2 className="text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-1">
              CERTIFICATIONS
            </h2>
            <p className="text-[11px] text-slate-700">
              Django Architecture & API Design &nbsp;|&nbsp; Cloud Computing Fundamentals &nbsp;|&nbsp; NPTEL Cloud Computing
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-400 font-mono">
            Candidate: Jonnalagadda Yaswanth Krishna
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
