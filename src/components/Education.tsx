import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#0B1120]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Education <span className="text-[#38BDF8]">Background</span>
          </h2>
        </div>

        {/* Education List */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#111827]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-serif text-white mb-1">
                    {edu.degree}
                  </h3>
                  {edu.specialization && (
                    <div className="text-sm font-semibold text-[#14B8A6] mb-1">
                      [{edu.specialization}]
                    </div>
                  )}
                  <div className="text-sm text-slate-300">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30">
                    <Award className="w-3 h-3" />
                    <span>{edu.gradeLabel}: {edu.grade}</span>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span>{edu.period}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
