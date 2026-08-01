import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-[#0B1120]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Achievements & <span className="text-[#8B5CF6]">Certifications</span>
          </h2>
        </div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#111827]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#38BDF8]">
                    {cert.issuer}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-base font-bold font-serif text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-[#14B8A6]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
