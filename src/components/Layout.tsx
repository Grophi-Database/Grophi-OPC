/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY, CONTACT } from "../constants";
import { Menu, X, Globe, MapPin, Mail, Phone, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const PartnerModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSending(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative glass-morphism w-full max-w-xl rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-y-auto max-h-[90vh] border border-white/10"
          >
            <div className="p-6 sm:p-8 md:p-16">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 sm:top-10 sm:right-10 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>

              {!isSubmitted ? (
                <>
                  <h4 className="text-4xl font-bold text-white mb-4 tracking-tight">Partner With Us</h4>
                  <p className="text-slate-grey mb-10 font-light text-lg">Start your journey with Grophi's strategic solutions.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-vibrant-orange transition-colors" />
                      <input required type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-vibrant-orange transition-colors" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <input required type="text" placeholder="Company Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-vibrant-orange transition-colors" />
                      <input required type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-vibrant-orange transition-colors" />
                    </div>
                    <select required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-vibrant-orange transition-colors appearance-none">
                      <option value="" className="bg-brand-dark">Select Service</option>
                      <option value="app-dev" className="bg-brand-dark">App Development</option>
                      <option value="it-recruitment" className="bg-brand-dark">IT Recruitment</option>
                      <option value="non-it-recruitment" className="bg-brand-dark">Non-IT Recruitment</option>
                      <option value="payroll" className="bg-brand-dark">HR & Payroll</option>
                    </select>
                    <textarea placeholder="Tell us about your requirements" rows={3} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-vibrant-orange transition-colors" />
                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="w-full btn-primary py-5 text-xl flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                          Processing...
                        </div>
                      ) : (
                        <>
                          Submit Request <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-16 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h4 className="text-4xl font-bold text-white mb-6 tracking-tight">Request Sent!</h4>
                  <p className="text-slate-grey text-lg font-light leading-relaxed">Our team will reach out to you at <span className="text-white font-bold">{CONTACT.email.connect}</span> shortly.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Process", path: "/process" },
    { name: "Grophi App", path: "/app" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Governance", path: "/governance" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group">
              <span className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-vibrant-orange via-white to-cyan-400 group-hover:animate-pulse transition-all bg-vibrant-orange">
                GROPHI<span className="text-vibrant-orange inline-block animate-pulse">.</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-vibrant-orange ${location.pathname === link.path ? "text-vibrant-orange" : "text-gray-400"}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://app.gogrophi.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:text-vibrant-orange transition-colors border-b border-white/20 pb-1"
                >
                  Launch App
                </a>
                <button 
                  onClick={() => setIsPartnerModalOpen(true)}
                  className="btn-primary text-[10px] py-3 px-8"
                >
                  Partner With Us
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 pt-4 pb-10 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-4 text-lg font-light tracking-wide rounded-2xl ${location.pathname === link.path ? "text-vibrant-orange bg-white/5" : "text-gray-300 hover:bg-white/5"}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 space-y-4">
                  <a 
                    href="https://app.gogrophi.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 text-lg font-light text-white border border-white/10 rounded-2xl"
                  >
                    Launch App
                  </a>
                  <button 
                    onClick={() => { setIsOpen(false); setIsPartnerModalOpen(true); }}
                    className="w-full btn-primary py-5 text-lg"
                  >
                    Partner With Us
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <PartnerModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="mb-10">
              <div className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-vibrant-orange via-white to-cyan-400 bg-vibrant-orange">
                GROPHI<span className="text-vibrant-orange inline-block animate-pulse">.</span>
              </div>
            </div>
            <p className="text-slate-grey max-w-md mb-12 leading-relaxed text-lg font-light">
              Scaling technology and talent for modern business. Expert App Development & AI-Driven Recruitment Solutions.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 text-slate-grey">
                <MapPin size={24} className="text-vibrant-orange shrink-0 mt-1" />
                <span className="text-lg font-light leading-relaxed">{COMPANY.address}</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-grey">
                <Mail size={24} className="text-vibrant-orange shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50 mb-1">Partnerships</span>
                  <span className="text-lg font-light">{CONTACT.email.connect}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-slate-grey">
                <Mail size={24} className="text-vibrant-orange shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50 mb-1">Recruitment</span>
                  <span className="text-lg font-light">{CONTACT.email.talent}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-slate-grey">
                <Phone size={24} className="text-vibrant-orange shrink-0" />
                <span className="text-lg font-light">{CONTACT.phones.join(" / ")}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 opacity-50">Navigation</h4>
            <ul className="space-y-6 text-slate-grey text-lg font-light">
              <li><Link to="/" className="hover:text-vibrant-orange transition-colors">Home</Link></li>
              <li><Link to="/process" className="hover:text-vibrant-orange transition-colors">Process</Link></li>
              <li><Link to="/app" className="hover:text-vibrant-orange transition-colors">Grophi App</Link></li>
              <li><Link to="/services" className="hover:text-vibrant-orange transition-colors">Services</Link></li>
              <li><Link to="/careers" className="hover:text-vibrant-orange transition-colors">Careers</Link></li>
              <li><Link to="/governance" className="hover:text-vibrant-orange transition-colors">Governance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 opacity-50">Connect</h4>
            <ul className="space-y-6 text-slate-grey text-lg font-light">
              <li>
                <a 
                  href={COMPANY.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-vibrant-orange transition-colors"
                >
                  <Linkedin size={22} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li><Link to="/governance" className="hover:text-vibrant-orange transition-colors">Privacy Policy</Link></li>
              <li><Link to="/governance" className="hover:text-vibrant-orange transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
          <div>{COMPANY.name} | CIN: {COMPANY.cin}</div>
          <div>© 2026 Grophi Solutions. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
