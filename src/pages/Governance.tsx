/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ShieldCheck, FileText, Scale, Lock, Info } from "lucide-react";
import { COMPANY } from "../constants";

const policies = [
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: Lock,
    content: `
      <h4 class="text-xl font-bold text-brand-dark mb-4">1. Data Collection</h4>
      <p class="mb-6">Grophi OPC Private Limited ("Grophi", "we", "us") collects information that you provide directly to us, such as when you create an account, apply for a job, or contact us for support. This may include your name, email address, phone number, and professional background.</p>
      
      <h4 class="text-xl font-bold text-brand-dark mb-4">2. Use of Information</h4>
      <p class="mb-6">We use the information we collect to provide, maintain, and improve our services, including our recruitment platform and HR solutions. We also use this information to communicate with you about updates, security alerts, and support messages.</p>
      
      <h4 class="text-xl font-bold text-brand-dark mb-4">3. Data Sharing</h4>
      <p class="mb-6">We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf, or when required by law to comply with legal obligations.</p>
      
      <h4 class="text-xl font-bold text-brand-dark mb-4">4. Security</h4>
      <p class="mb-6">We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
    `
  },
  {
    id: "terms",
    title: "Terms of Service",
    icon: Scale,
    content: `
      <h4 class="text-xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h4>
      <p class="mb-6">By accessing or using the Grophi website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>
      
      <h4 class="text-xl font-bold text-brand-dark mb-4">2. Use of Services</h4>
      <p class="mb-6">You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use the services in any way that violates any applicable federal, state, local, or international law or regulation.</p>
      
      <h4 class="text-xl font-bold text-brand-dark mb-4">3. Intellectual Property</h4>
      <p class="mb-6">The services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Grophi and are protected by copyright, trademark, and other intellectual property laws.</p>
      
      <h4 class="text-xl font-bold text-brand-dark mb-4">4. Limitation of Liability</h4>
      <p class="mb-6">In no event will Grophi, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind arising out of or in connection with your use of the services.</p>
    `
  }
];

export const Governance = () => {
  const [activeTab, setActiveTab] = useState(policies[0].id);

  const activePolicy = policies.find(p => p.id === activeTab)!;

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
            <ShieldCheck size={14} />
            <span>Governance & Compliance</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none mb-10"
          >
            Trust through <span className="text-vibrant-orange">Transparency</span>.
          </motion.h1>
          <p className="mt-6 text-xl text-slate-grey max-w-2xl mx-auto font-light leading-relaxed">
            We maintain the highest standards of statutory compliance and data protection to ensure a secure environment for our partners and talent.
          </p>
        </div>

        {/* Company Credentials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { label: "CIN", value: COMPANY.cin, icon: FileText },
            { label: "Entity", value: "OPC Private Limited", icon: ShieldCheck },
            { label: "Compliance", value: "100% Statutory", icon: Scale },
            { label: "Status", value: "Active / Compliant", icon: Info },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-vibrant-orange/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-white/5 text-vibrant-orange rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl border border-white/5">
                <item.icon size={28} />
              </div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] mb-2 opacity-50">{item.label}</div>
              <div className="text-xl font-bold text-white tracking-tight">{item.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Policy Tabs */}
        <div className="glass-morphism rounded-[4rem] shadow-2xl border border-white/10 overflow-hidden">
          <div className="flex border-b border-white/5 bg-black/40">
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => setActiveTab(policy.id)}
                className={`flex-1 py-10 text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative ${
                  activeTab === policy.id ? "text-vibrant-orange" : "text-gray-500 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-center space-x-4">
                  <policy.icon size={20} />
                  <span>{policy.title}</span>
                </div>
                {activeTab === policy.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-vibrant-orange shadow-[0_0_20px_rgba(255,107,0,0.5)]" 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="p-12 md:p-24 bg-black/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="prose prose-invert prose-lg max-w-none text-slate-grey font-light leading-relaxed"
              >
                <div dangerouslySetInnerHTML={{ __html: activePolicy.content.replace(/text-brand-dark/g, 'text-white') }} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Contact for Legal */}
        <div className="mt-32 text-center">
          <p className="text-gray-500 mb-6 text-lg font-light">For any legal inquiries or data requests, please contact our compliance team:</p>
          <a 
            href={`mailto:${COMPANY.email}`}
            className="text-3xl font-bold text-white hover:text-vibrant-orange transition-all tracking-tight"
          >
            {COMPANY.email}
          </a>
        </div>
      </div>
    </div>
  );
};
