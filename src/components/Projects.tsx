import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, BatteryCharging, Zap, Bot, Sprout, Radio, Code2 } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  BatteryCharging,
  Zap,
  Bot,
  Sprout,
  Radio,
  Code2
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#0B1120]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight mb-3">
            Key Technical <span className="text-[#38BDF8]">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Practical implementations in machine learning, analytics, and software engineering.
          </p>
        </div>

        {/* Clean Minimal Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project: Project, idx: number) => {
            const IconComponent = ICON_MAP[project.iconName] || Code2;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#111827]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#38BDF8]/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Card Top: Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#0B1120] border border-white/10 text-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {project.title}
                  </h3>

                  {/* 2-3 Line Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#0B1120] text-slate-300 border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-300" />
                      <span>GitHub</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20 text-xs font-semibold text-[#38BDF8] border border-[#38BDF8]/30 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
