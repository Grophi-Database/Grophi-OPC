/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PROCESS_STEPS } from "../constants";
import { Search, Database, Cpu, Presentation, CheckCircle2, FileSearch, ArrowRight } from "lucide-react";

const stepIcons = [
  Search,
  FileSearch,
  Database,
  Cpu,
  Presentation,
  CheckCircle2
];

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="pt-40 pb-24 relative min-h-screen overflow-hidden">
      {/* Atmospheric Backgrounds */}
      <div className="atmosphere-glow top-0 -left-1/4" />
      <div className="atmosphere-glow-alt bottom-0 -right-1/4" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 text-vibrant-orange text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            <Cpu size={14} />
            <span>Our Methodology</span>
          </motion.div>
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-10 tracking-tight leading-none">
            The Grophi <span className="text-vibrant-orange">Workflow</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-grey leading-relaxed font-light max-w-2xl mx-auto">
            A precise, AI-enhanced methodology designed to deliver elite talent and robust technology solutions with zero friction.
          </p>
        </div>

        {/* Interactive Tabbed Interface */}
        <div className="glass-morphism rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 relative">
          <div className="grid lg:grid-cols-3">
            {/* Sidebar Tabs */}
            <div className="bg-black/40 p-8 md:p-16 border-r border-white/5">
              <div className="space-y-4 md:space-y-6">
                {PROCESS_STEPS.map((step, idx) => {
                  const Icon = stepIcons[idx];
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`w-full flex items-center space-x-6 p-6 rounded-3xl transition-all duration-500 text-left group ${activeStep === idx ? "bg-vibrant-orange text-white shadow-[0_0_30px_rgba(255,107,0,0.2)]" : "text-gray-500 hover:bg-white/5 hover:text-white"}`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeStep === idx ? "bg-white/20 scale-110" : "bg-white/5 group-hover:bg-white/10"}`}>
                        <Icon size={24} />
                      </div>
                      <span className="font-bold text-[10px] uppercase tracking-[0.2em]">{step.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-2 p-8 md:p-24 flex flex-col justify-center relative overflow-hidden bg-black/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="relative z-10"
                >
                  <div className="text-vibrant-orange font-mono text-[10px] mb-8 tracking-[0.5em] uppercase font-bold opacity-70">Phase 0{activeStep + 1}</div>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-grey leading-relaxed mb-12 font-light max-w-xl">
                    {PROCESS_STEPS[activeStep].description}
                  </p>
                  
                  <div className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-sm">
                    <h4 className="text-[10px] font-bold text-white mb-8 flex items-center uppercase tracking-[0.3em] opacity-50">
                      <CheckCircle2 className="text-vibrant-orange mr-3" size={18} />
                      Key Deliverables
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-6">
                      {[
                        "Strategic Alignment",
                        "Data-Driven Insights",
                        "Real-Time Updates",
                        "Statutory Compliance"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center space-x-4 text-slate-grey text-lg font-light">
                          <div className="w-2 h-2 bg-vibrant-orange rounded-full shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="mt-16 flex justify-between items-center pt-10 border-t border-white/5">
                <button 
                  onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                  className="text-gray-500 hover:text-vibrant-orange font-bold text-[10px] uppercase tracking-widest flex items-center transition-all group"
                >
                  <ArrowRight className="mr-3 rotate-180 group-hover:-translate-x-2 transition-transform" size={16} /> Previous
                </button>
                <div className="flex space-x-3">
                  {PROCESS_STEPS.map((_, idx) => (
                    <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${activeStep === idx ? "w-12 bg-vibrant-orange shadow-[0_0_10px_rgba(255,107,0,0.3)]" : "w-3 bg-white/10"}`} />
                  ))}
                </div>
                <button 
                  onClick={() => setActiveStep(prev => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
                  className="text-white hover:text-vibrant-orange font-bold text-[10px] uppercase tracking-widest flex items-center transition-all group"
                >
                  Next Phase <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <p className="text-slate-grey mb-10 text-xl font-light">Ready to see this process in action for your business?</p>
          <button className="btn-primary py-5 px-12 text-xl">Start Your Partnership</button>
        </div>
      </div>
    </div>
  );
};
