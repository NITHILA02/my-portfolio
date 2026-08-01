import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Cpu, BarChart3 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#0B1120] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 text-slate-300 hover:text-white hover:bg-black/80 backdrop-blur-md border border-white/10 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Image Header */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#111827] shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] backdrop-blur-md">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-2">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Overview */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Project Overview
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Architecture & Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architecture && (
                <div className="p-4 rounded-2xl bg-[#111827] border border-white/10 flex items-start gap-3">
                  <Layers className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-medium text-slate-400">System Architecture</div>
                    <div className="text-xs font-semibold text-white mt-0.5">{project.architecture}</div>
                  </div>
                </div>
              )}

              {project.metrics && (
                <div className="p-4 rounded-2xl bg-[#111827] border border-white/10 flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-[#14B8A6] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-medium text-slate-400">Impact Metric</div>
                    <div className="text-xs font-semibold text-emerald-400 mt-0.5">{project.metrics}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Key Accomplishments & Features</span>
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-xl text-xs font-medium bg-[#111827] border border-white/10 text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#38BDF8] via-[#14B8A6] to-[#8B5CF6] hover:opacity-95 shadow-lg shadow-[#38BDF8]/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo / Details</span>
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
