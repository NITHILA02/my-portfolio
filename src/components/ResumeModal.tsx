import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Phone, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0B1120] border border-white/20 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="px-6 py-4 bg-[#111827] border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#38BDF8]" />
              <span className="text-sm font-semibold text-white">Nithila_ML_Resume.pdf</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Formatted Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B1120] text-slate-200 font-sans">
            
            {/* Resume Header */}
            <div className="text-center pb-6 border-b border-white/10">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-semibold text-[#38BDF8] mt-1">
                INTEGR. M.TECH IN CS | BA [5 YEARS]
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mt-3">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#14B8A6]" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer" className="text-[#8B5CF6] hover:underline">
                  LinkedIn
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#38BDF8] hover:underline">
                  GitHub
                </a>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-2 border-b border-white/10 pb-1 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>CAREER OBJECTIVE</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 border-b border-white/10 pb-1 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>EXPERIENCE</span>
              </h2>
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.role} className="mb-4">
                  <div className="flex justify-between items-baseline font-semibold text-sm text-white">
                    <span>{exp.role} — {exp.company}, {exp.location}</span>
                    <span className="text-xs text-[#14B8A6]">{exp.period}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 border-b border-white/10 pb-1 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </h2>
              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                    <div>
                      <div className="font-bold text-white text-sm">{edu.degree}</div>
                      {edu.specialization && <div className="text-[#14B8A6] font-medium">[{edu.specialization}]</div>}
                      <div className="text-slate-400">{edu.institution} — {edu.location}</div>
                    </div>
                    <div className="text-right mt-1 sm:mt-0">
                      <div className="font-bold text-[#38BDF8]">{edu.gradeLabel}: {edu.grade}</div>
                      <div className="text-slate-400">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Technical Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 border-b border-white/10 pb-1 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>KEY PROJECTS</span>
              </h2>
              <div className="space-y-3 text-xs">
                {PROJECTS_DATA.map((p) => (
                  <div key={p.id}>
                    <div className="font-bold text-white text-sm">{p.title}</div>
                    <div className="text-[#14B8A6] font-mono text-[11px] mb-1">Tools Used: {p.tools.join(', ')}</div>
                    <p className="text-slate-300">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] mb-3 border-b border-white/10 pb-1 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>ACHIEVEMENTS</span>
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc">
                {CERTIFICATIONS_DATA.map((c, i) => (
                  <li key={i}>
                    <strong className="text-white">{c.title}</strong> ({c.year}) — {c.description}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
