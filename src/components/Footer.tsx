import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1120] border-t border-white/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="text-xl font-bold font-serif text-white mb-1">
            Nithila<span className="text-[#38BDF8]">.</span>
          </a>
          <p className="text-xs text-slate-400">
            Software Development Instructor @ NxtWave | M.Tech CS (Business Analytics) VIT Chennai
          </p>
        </div>

        {/* Social Quick Links */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#111827] text-slate-300 hover:text-white border border-white/10 hover:border-[#38BDF8]/40 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#111827] text-slate-300 hover:text-white border border-white/10 hover:border-[#8B5CF6]/40 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-full bg-[#111827] text-slate-300 hover:text-white border border-white/10 hover:border-[#38BDF8]/40 transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#14B8A6] text-slate-950 font-bold hover:scale-110 transition-transform shadow-lg ml-2"
            aria-label="Back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
        <p>© 2026 Nithila ML. All rights reserved.</p>
        <p className="mt-1 text-[11px] text-slate-600">
          Built with React, TypeScript, Tailwind CSS, & Framer Motion.
        </p>
      </div>
    </footer>
  );
};
