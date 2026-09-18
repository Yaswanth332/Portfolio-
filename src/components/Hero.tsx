import React, { useState } from 'react';
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink,
  Upload,
  Sparkles,
  Database,
  Terminal,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [profileImgSrc, setProfileImgSrc] = useState<string>(PERSONAL_INFO.profileImage);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleCustomImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (typeof uploadEvent.target?.result === 'string') {
          setProfileImgSrc(uploadEvent.target.result);
          try {
            localStorage.setItem('yk_custom_profile_image', uploadEvent.target.result);
          } catch (err) {
            // Storage quota warning ignored for large files
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Check if user previously saved a custom uploaded image in localStorage
  React.useEffect(() => {
    const saved = localStorage.getItem('yk_custom_profile_image');
    if (saved) {
      setProfileImgSrc(saved);
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="relative pt-28 sm:pt-36 pb-20 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-cyan-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Typography & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-750 text-slate-300 text-xs font-mono tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>COMPUTER SCIENCE ENGINEERING • DATA • AI</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Building with <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-cyan-300">
                  Data, AI & Code.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                I'm <span className="text-white font-semibold">{PERSONAL_INFO.displayName}</span>, a Computer Science Engineering student focused on Data Engineering, AI/ML, Python backend development, and building practical systems.
              </p>
              
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                {PERSONAL_INFO.bioSummary}
              </p>
            </div>

            {/* Credential Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/70 text-slate-300">
                RGUKT Ongole • CGPA: {PERSONAL_INFO.cgpa}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-teal-950/50 border border-teal-800/50 text-teal-300">
                Ex-CodeTantra SDE Intern
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/70 text-slate-300">
                B.Tech 2023–2027
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold transition-all duration-150 shadow-lg shadow-teal-950/40 focus:ring-2 focus:ring-teal-400 focus:outline-none"
                id="hero-view-work-btn"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-colors"
                id="hero-github-btn"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-teal-950/50 text-teal-300 hover:text-teal-200 border border-teal-500/30 hover:border-teal-400/50 text-sm font-semibold transition-colors"
                id="hero-resume-btn"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="pt-3 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
              {/* Email with copy */}
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-slate-300 select-all">{PERSONAL_INFO.email}</span>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="ml-1 p-1 hover:text-white text-slate-400 transition-colors"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone with copy */}
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-300 hover:text-teal-300 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="ml-1 p-1 hover:text-white text-slate-400 transition-colors"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedText === 'phone' ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors py-1.5 px-2"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Official Profile Photograph & Tech Orbits (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Subtle Glowing Aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-teal-500/20 to-cyan-500/10 blur-xl opacity-70 pointer-events-none" />

              {/* Frame Card */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-750 p-3 shadow-2xl backdrop-blur-sm group">
                
                {/* Image Container with Professional Crop */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800">
                  <img
                    src={profileImgSrc}
                    alt="Yaswanth Krishna"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] ${
                      imageLoaded ? 'opacity-100' : 'opacity-90'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      // Fallback to local copy if needed
                      if (profileImgSrc !== '/file_00000000537882079ce37f671319d785.png') {
                        setProfileImgSrc('/file_00000000537882079ce37f671319d785.png');
                      }
                    }}
                  />

                  {/* Top-Right Active Status Indicator */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-750 text-[11px] font-mono text-emerald-300 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Open to Roles</span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-12 pb-3 px-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-white text-base font-bold tracking-tight">
                          {PERSONAL_INFO.displayName}
                        </h2>
                        <p className="text-xs text-slate-300 font-mono">
                          B.Tech CSE • Class of 2027
                        </p>
                      </div>
                      <label 
                        className="cursor-pointer p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 text-xs flex items-center gap-1 font-mono"
                        title="Change / Upload photo"
                      >
                        <Upload className="w-3 h-3" />
                        <span className="text-[10px]">Change</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleCustomImageUpload} 
                          className="hidden" 
                        />
                      </label>
                    </div>
                  </div>

                </div>

                {/* Subtle Decorative Technical Badges */}
                <div className="mt-3 grid grid-cols-4 gap-1.5 text-center font-mono text-[11px]">
                  <div className="bg-slate-800/60 border border-slate-750/80 py-1.5 rounded-lg text-teal-300 font-medium">
                    Python
                  </div>
                  <div className="bg-slate-800/60 border border-slate-750/80 py-1.5 rounded-lg text-cyan-300 font-medium">
                    SQL
                  </div>
                  <div className="bg-slate-800/60 border border-slate-750/80 py-1.5 rounded-lg text-emerald-300 font-medium">
                    Data Eng
                  </div>
                  <div className="bg-slate-800/60 border border-slate-750/80 py-1.5 rounded-lg text-indigo-300 font-medium">
                    AI / ML
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
