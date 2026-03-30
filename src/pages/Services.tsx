/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Code, Users, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { PartnerModal } from "../components/Layout";

const services = [
  {
    id: "app-dev",
    title: "App Development",
    icon: Code,
    desc: "We build robust, scalable, and high-performance digital products. Our focus is on pure technology development, ensuring your enterprise has the tools it needs to lead.",
    features: [
      "Custom Web Applications",
      "Enterprise Website Development",
      "API Integration & Architecture",
      "UI/UX Design for Performance",
      "Cloud-Native Solutions"
    ],
    cta: "Request Tech Consultation"
  },
  {
    id: "recruitment",
    title: "Recruitment Services",
    icon: Users,
    desc: "Strategic talent sourcing across IT and Non-IT sectors. We leverage our Command Centre to provide vetted candidates with unprecedented speed and accuracy.",
    features: [
      "IT & Tech Sourcing",
      "Non-IT & Operational Hiring",
      "Executive Search",
      "Volume Hiring Campaigns",
      "Candidate Vetting & Assessment"
    ],
    cta: "Start Sourcing Talent"
  },
  {
    id: "hr-payroll",
    title: "HR, Payroll & Compliance",
    icon: Shield,
    desc: "Seamless management of your human capital. We handle the complexities of payroll, statutory compliance, and audits so you can focus on growth.",
    features: [
      "End-to-End Payroll Processing",
      "Statutory Compliance (PF, ESI, LWF)",
      "HR Audit Management",
      "Policy Formulation",
      "Employee Lifecycle Management"
    ],
    cta: "Optimize HR Operations"
  }
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeService = services.find(s => s.id === activeTab)!;

  return (
    <div className="pt-40 pb-24 relative min-h-screen overflow-hidden">
      {/* Atmospheric Backgrounds */}
      <div className="atmosphere-glow top-0 -left-1/4" />
      <div className="atmosphere-glow-alt bottom-0 -right-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 text-vibrant-orange text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            <Shield size={14} />
            <span>Our Offerings</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tight leading-none mb-10"
          >
            Enterprise <span className="text-vibrant-orange">Solutions</span> <br />for Scale.
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-slate-grey max-w-2xl mx-auto font-light leading-relaxed">
            We provide robust technology development and strategic talent sourcing designed to help your enterprise lead in a competitive landscape.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 border ${
                activeTab === service.id 
                ? "bg-vibrant-orange text-white border-vibrant-orange shadow-[0_0_30px_rgba(255,107,0,0.3)] scale-105" 
                : "bg-white/5 text-gray-500 border-white/10 hover:border-vibrant-orange/50 hover:text-white"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="grid lg:grid-cols-2 gap-16 items-center glass-morphism p-8 md:p-24 rounded-[4rem] border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-vibrant-orange/10 text-vibrant-orange rounded-[2rem] flex items-center justify-center mb-10 shadow-xl border border-vibrant-orange/20">
                  <activeService.icon size={48} />
                </div>
                <h4 className="text-5xl font-bold text-white mb-8 tracking-tight">{activeService.title}</h4>
                <p className="text-xl text-slate-grey leading-relaxed mb-12 font-light">
                  {activeService.desc}
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary inline-flex items-center text-xl py-5 px-12 group"
                >
                  {activeService.cta} <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                </button>
              </div>

              <div className="space-y-6 relative z-10">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] mb-10 opacity-50">Key Capabilities</h5>
                {activeService.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center p-8 bg-white/5 rounded-3xl border border-white/5 group hover:border-vibrant-orange/30 hover:bg-white/10 transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center mr-8 shadow-inner group-hover:bg-vibrant-orange group-hover:text-white transition-all duration-500">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Trust Section */}
        <section className="mt-40 py-24 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-7xl font-bold text-white mb-4 tracking-tighter">100%</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">Statutory Compliance</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-7xl font-bold text-white mb-4 tracking-tighter">24/7</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">Enterprise Support</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-7xl font-bold text-white mb-4 tracking-tighter">35+</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">Cities in India</div>
            </motion.div>
          </div>
        </section>
      </div>

      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
