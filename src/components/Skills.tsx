import React from 'react';
import { motion } from 'motion/react';
import { Code2, BarChart3, Database, Layout, Cpu, Terminal, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  BarChart3,
  Database,
  Layout,
  Cpu,
  Terminal
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#0B1120]">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Technical <span className="text-[#38BDF8]">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const IconComponent = CATEGORY_ICONS[category.iconName] || Code2;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#111827]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#38BDF8]/40 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1120] border border-white/10 text-[#38BDF8]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[#0B1120] text-slate-200 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
