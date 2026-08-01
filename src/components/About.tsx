import React from 'react';
import { motion } from 'motion/react';
import { User, Briefcase, GraduationCap, Award } from 'lucide-react';
import { ABOUT_SUMMARY, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Background & <span className="text-[#38BDF8]">Objective</span>
          </h2>
        </div>

        {/* Concise About Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden"
        >
          <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              {ABOUT_SUMMARY}
            </p>
          </div>

          {/* Key Facts Row */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B1120] border border-white/5">
              <Briefcase className="w-5 h-5 text-[#38BDF8]" />
              <div>
                <div className="text-white font-semibold">Current Role</div>
                <div className="text-slate-400">Software Instructor @ NxtWave</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B1120] border border-white/5">
              <GraduationCap className="w-5 h-5 text-[#14B8A6]" />
              <div>
                <div className="text-white font-semibold">Education</div>
                <div className="text-slate-400">Integr. M.Tech CS (VIT Chennai)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B1120] border border-white/5">
              <Award className="w-5 h-5 text-[#8B5CF6]" />
              <div>
                <div className="text-white font-semibold">Academic Merit</div>
                <div className="text-slate-400">7.94 CGPA | 89.80% HSC</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
