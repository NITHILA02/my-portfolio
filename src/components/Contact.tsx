import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#0B1120]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#38BDF8]/10 to-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            Get In <span className="text-[#38BDF8]">Touch</span>
          </h2>
        </div>

        {/* 4 Modern Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Email Card */}
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            whileHover={{ y: -4 }}
            className="bg-[#111827]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#38BDF8]/40 transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0B1120] border border-white/10 rounded-xl text-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                Email
              </span>
            </div>
            <span className="text-xs font-semibold text-[#38BDF8] group-hover:translate-x-1 transition-transform">
              Send →
            </span>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href={`tel:${PERSONAL_INFO.phone}`}
            whileHover={{ y: -4 }}
            className="bg-[#111827]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#14B8A6]/40 transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0B1120] border border-white/10 rounded-xl text-[#14B8A6] group-hover:bg-[#14B8A6]/10 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold text-white group-hover:text-[#14B8A6] transition-colors">
                Phone
              </span>
            </div>
            <span className="text-xs font-semibold text-[#14B8A6] group-hover:translate-x-1 transition-transform">
              Call →
            </span>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/nithila-maran-427a59298"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="bg-[#111827]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#8B5CF6]/40 transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0B1120] border border-white/10 rounded-xl text-[#8B5CF6] group-hover:bg-[#8B5CF6]/10 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                LinkedIn
              </span>
            </div>
            <span className="text-xs font-semibold text-[#8B5CF6] group-hover:translate-x-1 transition-transform">
              Connect →
            </span>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com/NITHILA02"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="bg-[#111827]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#38BDF8]/40 transition-all flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#0B1120] border border-white/10 rounded-xl text-[#38BDF8] group-hover:bg-[#38BDF8]/10 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                GitHub
              </span>
            </div>
            <span className="text-xs font-semibold text-[#38BDF8] group-hover:translate-x-1 transition-transform">
              Visit →
            </span>
          </motion.a>

        </div>

      </div>
    </section>
  );
};
