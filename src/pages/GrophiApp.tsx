/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Layout, Users, Briefcase, Settings, Bell, Search, Zap, TrendingUp, Cpu, Database, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

const AppMetric = ({ label, value, icon: Icon }: { label: string; value: number; icon: any }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="glass-card p-6 border-white/5 flex items-center space-x-4">
      <div className="w-12 h-12 bg-vibrant-orange/20 rounded-xl flex items-center justify-center text-vibrant-orange">
        <Icon size={24} />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{count.toLocaleString()}</div>
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</div>
      </div>
    </div>
  );
};

export const GrophiApp = () => {
  const [activeTab, setActiveTab] = useState("all");
  const dashboardRef = useRef<HTMLDivElement>(null);

  const scrollToDashboard = () => {
    dashboardRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      {/* Atmospheric Backgrounds */}
      <div className="atmosphere-glow top-0 -right-1/4" />
      <div className="atmosphere-glow-alt bottom-0 -left-1/4" />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 text-vibrant-orange text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                <Zap size={14} />
                <span>Proprietary Technology</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tight leading-none">
                The <span className="text-vibrant-orange">Command</span> <br />Centre.
              </h1>
              <p className="text-lg md:text-xl text-slate-grey mb-12 leading-relaxed font-light max-w-xl">
                Our internal Truth Layer platform ensures zero data leakage and a 70% candidate reuse rate. We don't just source; we engineer talent data.
              </p>
              <div className="flex flex-wrap gap-6">
                <a 
                  href="https://app.gogrophi.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary text-lg inline-flex items-center"
                >
                  Launch Application <ArrowRight className="ml-2" size={20} />
                </a>
                <div className="flex items-center space-x-4 px-6 py-4 rounded-full bg-white/5 border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">System Online</span>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute -inset-10 bg-vibrant-orange/10 blur-[100px] rounded-full" />
              <div className="glass-card relative z-10 p-12 border-white/10">
                <div className="space-y-8">
                  {[
                    { label: "Data Leakage", value: "0%", color: "text-green-400" },
                    { label: "Candidate Reuse", value: "70%", color: "text-vibrant-orange" },
                    { label: "Extraction Speed", value: "< 2s", color: "text-blue-400" }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-end border-b border-white/5 pb-4">
                      <span className="text-xs font-bold text-slate-grey uppercase tracking-widest">{stat.label}</span>
                      <span className={`text-4xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Mockup Section */}
      <section ref={dashboardRef} className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">Experience the Interface</h2>
            <p className="text-slate-grey text-lg md:text-xl font-light">A glimpse into the Grophi Truth Layer dashboard.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-morphism rounded-[3rem] overflow-hidden shadow-2xl border-white/10"
          >
            {/* Mock Dashboard Header */}
            <div className="bg-black/40 p-6 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center space-x-8">
                <div className="text-xl font-bold tracking-tighter text-white">
                  GROPHI<span className="text-vibrant-orange">.</span>APP
                </div>
                <div className="hidden md:flex space-x-6">
                  {["Dashboard", "Candidates", "Roles", "Analytics"].map(item => (
                    <span key={item} className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-white cursor-pointer transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-vibrant-orange/20 flex items-center justify-center text-vibrant-orange">
                  <Users size={16} />
                </div>
                <div className="hidden sm:block">
                  <div className="text-[10px] font-bold text-white uppercase tracking-widest">Admin User</div>
                  <div className="text-[8px] text-gray-500 uppercase tracking-widest">Super Admin</div>
                </div>
              </div>
            </div>

            <div className="flex h-[700px]">
              {/* Sidebar */}
              <div className="w-20 md:w-64 bg-black/20 border-r border-white/5 p-6 hidden sm:block">
                <div className="space-y-8">
                  <div>
                    <div className="text-[8px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-6">Main Menu</div>
                    <div className="space-y-4">
                      {[
                        { icon: Layout, label: "Overview", active: true },
                        { icon: Users, label: "Talent Pool" },
                        { icon: Briefcase, label: "Active Roles" },
                        { icon: TrendingUp, label: "Performance" }
                      ].map((item, idx) => (
                        <div key={idx} className={`flex items-center space-x-4 p-3 rounded-xl transition-all ${item.active ? "bg-vibrant-orange text-white shadow-lg shadow-vibrant-orange/20" : "text-gray-500 hover:bg-white/5 hover:text-white cursor-pointer"}`}>
                          <item.icon size={18} />
                          <span className="text-xs font-bold hidden md:block">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-black/10 p-8 overflow-y-auto">
                {/* Metrics Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {[
                    { label: "Active Roles", value: 24, change: "+12%", icon: Briefcase },
                    { label: "Total Candidates", value: 12400, change: "+8%", icon: Users },
                    { label: "Interviews Today", value: 48, change: "+4", icon: Clock },
                    { label: "Offers Sent", value: 12, change: "+2", icon: CheckCircle2 }
                  ].map((stat, idx) => (
                    <div key={idx} className="glass-card p-6 border-white/5">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-white/5 rounded-lg text-vibrant-orange">
                          <stat.icon size={16} />
                        </div>
                        <span className="text-[10px] font-bold text-green-400">{stat.change}</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value.toLocaleString()}</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Candidate Table */}
                <div className="glass-card border-white/5 p-0 overflow-hidden">
                  <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <h4 className="text-sm font-bold text-white uppercase tracking-widest">Recent Applications</h4>
                    <div className="flex space-x-2">
                      {["all", "vetted", "shortlisted"].map(tab => (
                        <button 
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === tab ? "bg-vibrant-orange text-white" : "bg-white/5 text-gray-500 hover:bg-white/10"}`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-white/5">
                          <th className="px-6 py-4">Candidate</th>
                          <th className="px-6 py-4">Role</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Score</th>
                          <th className="px-6 py-4">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs">
                        {[
                          { name: "Rahul Sharma", role: "Senior Frontend Engineer", status: "Vetted", score: "94/100", color: "text-green-400" },
                          { name: "Priya Patel", role: "Product Manager", status: "Interview", score: "88/100", color: "text-blue-400" },
                          { name: "Amit Kumar", role: "DevOps Architect", status: "Shortlisted", score: "91/100", color: "text-vibrant-orange" },
                          { name: "Sneha Gupta", role: "UI/UX Designer", status: "Vetted", score: "86/100", color: "text-green-400" }
                        ].map((row, idx) => (
                          <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-bold text-white">{row.name}</td>
                            <td className="px-6 py-4 text-gray-400">{row.role}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-md bg-white/5 ${row.color} font-bold text-[10px] uppercase tracking-widest`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 font-mono text-vibrant-orange">{row.score}</td>
                            <td className="px-6 py-4">
                              <button className="text-gray-500 hover:text-white transition-colors">
                                <ArrowRight size={16} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
