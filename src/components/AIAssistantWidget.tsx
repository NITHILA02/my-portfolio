import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const PRESET_QUESTIONS = [
  "What is Nithila's current role at NxtWave?",
  "Tell me about her education & CGPA at VIT Chennai.",
  "What technical skills does she specialize in?",
  "What projects has she built?"
];

export const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Hi there! I'm Nithila's Portfolio Assistant. Ask me anything about her experience as a Software Development Instructor at NxtWave, M.Tech degree at VIT Chennai, or her technical projects!"
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');

  const getAIResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('nxtwave') || q.includes('role') || q.includes('job') || q.includes('instructor') || q.includes('current')) {
      return "Nithila is currently a Software Development Instructor at NxtWave Disruptive Technologies Pvt. Ltd. (April 2026 – Present), based in Hyderabad.";
    }
    if (q.includes('vit') || q.includes('education') || q.includes('cgpa') || q.includes('m.tech') || q.includes('graduat')) {
      return "Nithila holds an Integrated M.Tech degree in Computer Science with a specialization in Business Analytics from VIT Chennai (CGPA: 7.94). Prior to VIT, she completed HSC at San Academy (89.80%) and SSLC at Crescent English High School, Dubai (69.60%).";
    }
    if (q.includes('skill') || q.includes('tech') || q.includes('python') || q.includes('sql') || q.includes('tool')) {
      return "Nithila's core technical skills include Python, R, Java, C++, Power BI Desktop, Tableau Public, MongoDB, SQL, HTML5, CSS3, MATLAB / Simulink, VS Code, and Jupyter Notebook.";
    }
    if (q.includes('project') || q.includes('bess') || q.includes('agro') || q.includes('chatbot') || q.includes('dustbin')) {
      return "Nithila's key technical projects include: 1) Simulation & Performance Analysis of BESS in MATLAB/Simulink & Python, 2) Reactive Power Management & Power BI Visual Analytics, 3) E-commerce Chatbot Assistant, 4) Agro AI Soil Classification, and 5) IoT Smart Dustbin Monitoring System.";
    }
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('linkedin')) {
      return `You can reach Nithila at ${PERSONAL_INFO.email} or call ${PERSONAL_INFO.phone}. LinkedIn: linkedin.com/in/nithila-maran-427a59298, GitHub: github.com/NITHILA02.`;
    }
    return `Nithila ML is a Software Development Instructor at NxtWave with an Integrated M.Tech in CS (Business Analytics) from VIT Chennai (7.94 CGPA). Feel free to reach out to her at ${PERSONAL_INFO.email}!`;
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: Message = { sender: 'user', text: query };
    const responseText = getAIResponse(query);
    const aiMsg: Message = { sender: 'ai', text: responseText };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    if (!textToSend) setInputQuery('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-80 sm:w-96 bg-[#0B1120] border border-white/15 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-2xl flex flex-col h-[460px]"
          >
            {/* Widget Header */}
            <div className="p-4 bg-[#111827] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#14B8A6] text-slate-950">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-serif">Portfolio Assistant</div>
                  <div className="text-[10px] text-[#38BDF8]">Ask about Nithila's profile</div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close assistant widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat History */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#38BDF8] to-[#14B8A6] text-slate-950 font-medium'
                        : 'bg-[#111827] text-slate-200 border border-white/10'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Preset Query Chips */}
            <div className="p-2 border-t border-white/5 bg-[#0B1120] flex gap-1.5 overflow-x-auto no-scrollbar">
              {PRESET_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#111827] text-slate-300 hover:text-white border border-white/10 whitespace-nowrap hover:border-[#38BDF8]/40 transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#111827] border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about Nithila's skills or experience..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-[#0B1120] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#38BDF8]"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#14B8A6] text-slate-950 font-bold hover:opacity-90"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#14B8A6] to-[#8B5CF6] text-slate-950 font-bold shadow-2xl shadow-[#38BDF8]/30 flex items-center gap-2"
      >
        <Bot className="w-6 h-6 text-slate-950" />
        <span className="hidden sm:inline text-xs font-bold text-slate-950 tracking-tight">
          Ask AI Assistant
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#38BDF8]" />
        </span>
      </motion.button>
    </div>
  );
};
