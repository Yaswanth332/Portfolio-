import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  FileText, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setValidationError('Please enter a message with at least 10 characters.');
      return;
    }

    // Direct mailto link fallback ensuring zero fake backend simulation
    const subjectLine = encodeURIComponent(formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Hello Yaswanth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectLine}&body=${bodyContent}`;
    setFormStatus('submitted');
  };

  return (
    <section id="contact" className="py-20 relative bg-[#0b0f17] border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 font-mono text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Useful.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            I'm interested in opportunities around Data Engineering, AI/ML, backend engineering, and practical software products.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-teal-400 flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  Direct Email
                </span>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm sm:text-base font-medium text-white hover:text-teal-300 transition-colors break-all block font-mono"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-400">
                Best way for recruiters, internship inquiries, and technical discussions.
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-teal-400 flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  Mobile Phone
                </span>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-teal-300 transition-colors block font-mono"
              >
                {PERSONAL_INFO.phone}
              </a>
              <p className="text-xs text-slate-400">
                Available for phone screens and interviews (India Standard Time).
              </p>
            </div>

            {/* Links Strip */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-300 group-hover:text-white" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400" />
              </a>
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="w-full p-4 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 hover:border-teal-400/50 flex items-center justify-center gap-2 text-teal-300 text-xs font-semibold transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Open & Print Engineering Resume (PDF)</span>
            </button>

          </div>

          {/* Right Column: Contact Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
              
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-teal-400" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the form below to initiate an email directly to Yaswanth.
                </p>
              </div>

              {validationError && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 flex items-center gap-2 text-xs text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {formStatus === 'submitted' && (
                <div className="p-3.5 rounded-lg bg-teal-950/40 border border-teal-800/60 space-y-1 text-xs text-teal-300">
                  <div className="flex items-center gap-2 font-semibold">
                    <Check className="w-4 h-4 text-teal-400" />
                    <span>Email client launched!</span>
                  </div>
                  <p className="text-slate-300">
                    If your email client didn't open automatically, please write directly to{' '}
                    <strong className="text-white select-all">{PERSONAL_INFO.email}</strong>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="contact-name">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="contact-email">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. SDE Internship Opportunity / Technical Interview"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="contact-message">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40 resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Direct communication • Replies within 24 hours
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
