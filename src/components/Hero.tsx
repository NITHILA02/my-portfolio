import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profile from '../assets/profile.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Blue & Purple Glow Only */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#38BDF8]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[500px] h-[500px] bg-[#8B5CF6]/12 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111827]/80 border border-[#38BDF8]/30 shadow-lg mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38BDF8]"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                Currently Working at <span className="text-[#38BDF8] font-semibold">NxtWave</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight text-white mb-3">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#14B8A6] to-[#8B5CF6]">Nithila ML</span>
            </h1>

            {/* Primary Subtitle */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-4 flex flex-wrap items-center gap-2">
              <span className="text-[#38BDF8]">Software Development Instructor</span>
              <span className="text-slate-500">@</span>
              <span className="text-slate-200">NxtWave</span>
            </h2>

            {/* Accurately Represented Role & Experience Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#111827] border border-[#38BDF8]/30 text-[#38BDF8]">Full Stack Development Explorer</span>
              <span className="px-3 py-1 rounded-full bg-[#111827] border border-[#8B5CF6]/30 text-[#8B5CF6]">AI Enthusiast</span>
              <span className="px-3 py-1 rounded-full bg-[#111827] border border-slate-700 text-slate-300">Computer Science Graduate</span>
            </div>

            {/* Professional Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Software Development Instructor at NxtWave, passionate about mentoring aspiring software engineers in Full Stack Development and Artificial Intelligence. I hold an Integrated M.Tech in Computer Science with a specialization in Business Analytics from VIT Chennai.
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#38BDF8] via-[#14B8A6] to-[#8B5CF6] hover:opacity-95 shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-[#111827]/80 hover:bg-[#111827] border border-white/10 hover:border-[#38BDF8]/40 transition-all duration-300 hover:text-white"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center p-3.5 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                title="Contact Me"
              >
                <Mail className="w-5 h-5 text-[#8B5CF6]" />
              </a>
            </div>

          </motion.div>

          {/* RIGHT SIDE PORTRAIT & PREMIUM GLASS FRAME */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            {/* Soft Blue Glow Behind Card */}
            <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-tr from-[#38BDF8]/30 via-[#14B8A6]/20 to-[#8B5CF6]/25 blur-2xl pointer-events-none" />

            {/* Premium Glassmorphism Portrait Card (28px Border Radius) */}
            <div className="relative w-full max-w-sm bg-[#0F172A]/85 backdrop-blur-xl p-3.5 sm:p-4 rounded-[28px] border border-[#38BDF8]/30 shadow-2xl shadow-[#38BDF8]/10">
              
              {/* Inner Image Container */}
              <div className="relative overflow-hidden rounded-[20px] bg-[#0B1120] border border-white/10">
                <img
                  src={profile}
                  alt="Nithila ML"
                  className="w-full h-auto object-cover rounded-[20px] shadow-sm"
                />

                {/* Bottom Card Label */}
                <div className="mt-3 p-3 bg-[#1E293B]/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">Nithila ML</div>
                    <div className="text-[11px] text-[#38BDF8]">Software Development Instructor @ NxtWave</div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-[#38BDF8] animate-pulse" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
