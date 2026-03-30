/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Users, TrendingUp, Zap, Shield, CheckCircle2, Terminal } from "lucide-react";
import { CLIENTS, METRICS } from "../constants";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
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
    <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
      {count}{suffix}
    </span>
  );
};

const TypingStatus = () => {
  const [text, setText] = useState("");
  const fullText = "SYSTEM_LOG: AI Extraction Node 124 Active... Zero Data Leakage Guaranteed... Candidate Reuse Rate: 70%... Status: Nominal";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setIndex(0);
      }, 3000);
    }
  }, [index]);

  return (
    <div className="flex items-center space-x-3 text-[10px] font-mono text-vibrant-orange/60">
      <Terminal size={12} />
      <span>{text}</span>
      <span className="w-1 h-3 bg-vibrant-orange animate-pulse" />
    </div>
  );
};

export const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - dimensions.width / 2);
    mouseY.set(clientY - dimensions.height / 2);
  };

  return (
    <div className="relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Mouse Follower Glow */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) => `radial-gradient(600px circle at ${Number(x) + dimensions.width / 2}px ${Number(y) + dimensions.height / 2}px, rgba(255, 107, 0, 0.15), transparent 80%)`
          )
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-vibrant-orange/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-golden-yellow/5 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-indigo-500/5 blur-[100px] rounded-full" 
        />
      </div>

      {/* Atmospheric Backgrounds */}
      <div className="atmosphere-glow top-0 -left-1/4" />
      <div className="atmosphere-glow-alt bottom-0 -right-1/4" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="scanline" />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-vibrant-orange text-[10px] font-bold uppercase tracking-[0.4em] mb-10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Zap size={14} className="animate-pulse" />
                <span>Engineering Workforce Growth</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-10 text-white">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ skewX: -10, transition: { duration: 0.1 } }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="block cursor-default"
                >
                  Engineering
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ skewX: 10, transition: { duration: 0.1 } }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-vibrant-orange block cursor-default"
                >
                  Workforce
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ skewX: -5, transition: { duration: 0.1 } }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="block cursor-default"
                >
                  Growth<span className="text-golden-yellow">.</span>
                </motion.span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-lg md:text-3xl text-slate-grey mb-16 leading-relaxed max-w-3xl font-light"
              >
                Expert App Development & AI-Driven Recruitment Solutions. We build the technology that powers your business and find the talent that scales it.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-8"
              >
                <Link to="/services" className="btn-primary flex items-center justify-center group text-xl py-6 px-12 relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Explore Services <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                  </span>
                </Link>
                <Link to="/process" className="btn-secondary flex items-center justify-center text-xl py-6 px-12">
                  See How It Works
                </Link>
              </motion.div>

              {/* Live System Status */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-16 flex items-center space-x-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  <span className="text-white">Active Nodes: 124</span> • <span className="text-green-500">System Nominal</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-8"
              >
                <TypingStatus />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[Zap, Shield, Code, Users].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: (20 + i * 20) + "%", 
                y: (30 + i * 15) + "%",
                opacity: 0 
              }}
              animate={{ 
                y: [null, "-40px", "40px", "0px"],
                opacity: [0, 0.1, 0],
                rotate: [0, 10, -10, 0]
              }}
              style={{
                x: useTransform(glowX, (x) => (Number(x) * (i + 1)) / 50 + (20 + i * 20) + "%"),
                y: useTransform(glowY, (y) => (Number(y) * (i + 1)) / 50 + (30 + i * 15) + "%"),
              }}
              transition={{ 
                duration: 10 + i * 2, 
                repeat: Infinity,
                delay: i * 2
              }}
              className="absolute text-vibrant-orange"
            >
              <Icon size={40 + i * 10} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="hidden lg:block absolute top-1/2 right-10 transform -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 bg-gradient-to-br from-vibrant-orange/5 to-transparent blur-3xl"
        />
      </section>

      {/* Metrics Bar */}
      <section className="relative z-20 -mt-32 px-6">
        <div className="max-w-6xl mx-auto glass-morphism rounded-[3rem] p-8 md:p-16 grid md:grid-cols-3 gap-16 text-center shadow-2xl border-white/10">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="md:border-r last:border-0 border-white/5">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="text-[10px] font-bold text-slate-grey uppercase tracking-[0.5em] mt-6">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Marquee - Stylized Names */}
      <div className="py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h4 className="text-center text-[10px] font-bold text-slate-grey uppercase tracking-[0.6em] opacity-50">Strategic Partnerships</h4>
        </div>
        <div className="flex overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
              <div key={idx} className="mx-20 flex items-center justify-center group">
                <span className="text-4xl md:text-7xl font-display font-bold text-white/10 group-hover:text-white transition-all duration-500 cursor-default tracking-tighter">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
          {/* Gradient Overlays for smooth fade */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-brand-dark to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-brand-dark to-transparent z-10" />
        </div>
      </div>

      {/* About Snapshot */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 text-vibrant-orange text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                <Zap size={14} />
                <span>The Grophi Advantage</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-none">
                Dual Focus. <br />Singular <span className="text-vibrant-orange">Excellence</span>.
              </h2>
              <p className="text-lg md:text-xl text-slate-grey mb-12 leading-relaxed font-light">
                At Grophi, we don't just find talent; we understand the technology they use. Our dual-focus approach combines high-end software engineering with elite recruitment services.
              </p>
              <div className="space-y-6">
                {[
                  "Pure Tech Development (Not just recruitment)",
                  "Elite IT & Non-IT Talent Sourcing",
                  "AI-Driven Candidate Assessment",
                  "100% Statutory Compliance Guarantee"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-vibrant-orange/10 flex items-center justify-center">
                      <CheckCircle2 className="text-vibrant-orange" size={14} />
                    </div>
                    <span className="text-lg font-medium text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-vibrant-orange/20 to-transparent blur-2xl rounded-[4rem]" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Diverse Professionals" 
                className="rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 glass-card p-10 shadow-2xl hidden md:block z-20">
                <p className="text-white font-bold text-3xl mb-1">35+ Cities</p>
                <p className="text-slate-grey text-xs font-bold uppercase tracking-widest">Pan-India Presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="section-padding bg-white/5 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Core Strategic Offerings</h2>
            <p className="text-lg md:text-xl text-slate-grey font-light">Comprehensive solutions designed to engineer your workforce growth and technological edge.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "App Development",
                desc: "Building robust, custom digital products and enterprise websites.",
                icon: Code,
                color: "text-blue-400"
              },
              {
                title: "IT Recruitment",
                desc: "End-to-end talent sourcing for the most demanding technical roles.",
                icon: Users,
                color: "text-vibrant-orange"
              },
              {
                title: "HR & Payroll",
                desc: "Full compliance, statutory management, and seamless payroll processing.",
                icon: TrendingUp,
                color: "text-golden-yellow"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="glass-card group"
              >
                <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center ${item.color} mb-10 group-hover:bg-white group-hover:text-brand-dark transition-all duration-500`}>
                  <item.icon size={32} />
                </div>
                <h4 className="text-3xl font-bold text-white mb-6">{item.title}</h4>
                <p className="text-slate-grey mb-10 leading-relaxed font-light">{item.desc}</p>
                <Link to="/services" className="text-vibrant-orange font-bold flex items-center group-hover:translate-x-3 transition-transform">
                  Learn More <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Teaser */}
      <section className="py-32">
        <div className="container-custom">
          <div className="relative rounded-[4rem] p-12 md:p-24 overflow-hidden border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-light to-brand-dark" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-vibrant-orange/10 blur-[120px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-none">
                  The Grophi <br />
                  <span className="text-vibrant-orange">Command Centre</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
                  Experience the future of recruitment management. Our internal Truth Layer ensures zero data leakage and a 70% candidate reuse rate.
                </p>
                <Link to="/app" className="btn-primary inline-flex items-center text-lg">
                  Explore The App <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
              <div className="relative">
                <div className="glass-morphism rounded-[3rem] p-10 shadow-2xl">
                  <div className="bg-black/40 rounded-[2rem] h-80 flex items-center justify-center border border-white/5">
                    <div className="text-center">
                      <Zap className="text-vibrant-orange mx-auto mb-6 animate-pulse-slow" size={64} />
                      <p className="text-white font-mono text-xs tracking-[0.5em]">AI EXTRACTION ACTIVE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
