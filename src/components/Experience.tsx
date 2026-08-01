import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Work <span className="text-[#38BDF8]">Experience</span>
          </h2>
        </div>

        {/* Experience Card */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#111827]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-serif text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-[#38BDF8]">
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
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
