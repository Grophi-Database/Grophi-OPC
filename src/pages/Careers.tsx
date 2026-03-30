/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, X, Upload, CheckCircle2, Globe, Phone, DollarSign, Building2, Calendar, Handshake, MessageSquare } from "lucide-react";
import { JOBS, CONTACT } from "../constants";

const JobModal = ({ job, isOpen, onClose }: { job: any, isOpen: boolean, onClose: () => void }) => {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
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
            className="glass-morphism rounded-[3rem] w-full max-w-6xl max-h-[90vh] overflow-hidden relative z-10 flex flex-col md:flex-row shadow-2xl border-white/10"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20 text-white"
            >
              <X size={24} />
            </button>

            {/* Job Details */}
            <div className="flex-1 p-10 md:p-16 bg-black/40 overflow-y-auto border-r border-white/5">
              <div className="inline-flex items-center space-x-2 bg-vibrant-orange/10 px-4 py-2 rounded-full mb-8">
                <Briefcase className="text-vibrant-orange" size={14} />
                <span className="text-[10px] font-bold text-vibrant-orange uppercase tracking-[0.2em]">{job.category}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-none">{job.title}</h3>
              <div className="flex flex-wrap gap-6 mb-12 text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">
                <div className="flex items-center"><MapPin size={18} className="mr-2 text-vibrant-orange" /> {job.location}</div>
                <div className="flex items-center"><Clock size={18} className="mr-2 text-vibrant-orange" /> {job.type}</div>
              </div>

              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.5em] mb-6 opacity-50">About the role</h4>
                  <p className="text-slate-grey leading-relaxed text-lg font-light">{job.description}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.5em] mb-6 opacity-50">Requirements</h4>
                  <ul className="space-y-4">
                    {job.requirements.map((req: string, idx: number) => (
                      <li key={idx} className="flex items-start text-slate-grey text-lg font-light">
                        <CheckCircle2 size={20} className="text-vibrant-orange mr-4 mt-1 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="flex-1 p-10 md:p-16 bg-black/20 overflow-y-auto">
              {formState === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">Application Sent!</h4>
                  <p className="text-slate-grey mb-10 font-light text-lg">
                    Thank you for your interest. Our talent team will review your profile and get back to you soon.
                  </p>
                  <button onClick={onClose} className="btn-secondary">Close Window</button>
                </div>
              ) : (
                <>
                  <h4 className="text-2xl font-bold text-white mb-10 tracking-tight">Direct Application Form</h4>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Full Name</label>
                        <input required type="text" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Email Address</label>
                        <input required type="email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input required type="tel" className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors" placeholder="+91 00000 00000" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Current Location</label>
                        <div className="relative">
                          <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input required type="text" className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors" placeholder="e.g. Lucknow" />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Current CTC (LPA)</label>
                        <div className="relative">
                          <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input required type="text" className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors" placeholder="e.g. 12.5" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Current Company</label>
                        <div className="relative">
                          <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input required type="text" className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors" placeholder="Current Org" />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Notice Period (Days)</label>
                        <div className="relative">
                          <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input required type="number" className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors" placeholder="e.g. 30" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Last Working Day</label>
                        <div className="relative">
                          <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input type="date" className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Offers in Hand?</label>
                        <div className="relative">
                          <Handshake className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <select required className="w-full pl-14 pr-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors appearance-none">
                            <option value="no" className="bg-brand-dark">No</option>
                            <option value="yes" className="bg-brand-dark">Yes</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Work Environment</label>
                        <div className="relative">
                          <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <select required className="w-full pl-14 pr-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors appearance-none">
                            <option value="remote" className="bg-brand-dark">Remote</option>
                            <option value="hybrid" className="bg-brand-dark">Hybrid</option>
                            <option value="onsite" className="bg-brand-dark">On-site</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Expectations / Notes</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-5 top-5 text-gray-500" size={16} />
                        <textarea rows={3} className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-vibrant-orange transition-colors" placeholder="Tell us more about what you're looking for..." />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-3">Resume / CV</label>
                      <div className="relative">
                        <input 
                          required
                          type="file" 
                          onChange={(e) => setFile(e.target.files?.[0] || null)}
                          className="absolute inset-0 opacity-0 cursor-pointer z-10"
                          accept=".pdf,.doc,.docx,.png"
                        />
                        <div className="w-full px-8 py-10 bg-white/5 border-2 border-dashed border-white/10 rounded-[2rem] flex flex-col items-center justify-center text-gray-500 hover:border-vibrant-orange hover:text-vibrant-orange transition-all group">
                          <Upload size={32} className="mb-4 group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-bold">{file ? file.name : "Upload Resume (PDF/DOC/PNG)"}</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      disabled={formState === "submitting"}
                      className="btn-primary w-full py-5 text-xl flex items-center justify-center"
                    >
                      {formState === "submitting" ? "Processing..." : "Submit Application"}
                    </button>
                    <p className="text-[10px] text-gray-500 text-center leading-relaxed uppercase tracking-widest">
                      By applying, you agree to our privacy policy. Data is routed to <span className="text-white font-bold">{CONTACT.email.talent}</span>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);

  return (
    <div className="relative min-h-screen">
      {/* Atmospheric Backgrounds */}
      <div className="atmosphere-glow top-0 -left-1/4" />
      <div className="atmosphere-glow-alt bottom-0 -right-1/4" />

      <div className="pt-40 pb-24 relative z-10">
        <div className="container-custom">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 text-vibrant-orange text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
            >
              <Briefcase size={14} />
              <span>Careers at Grophi</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl font-bold text-white tracking-tight leading-none mb-10"
            >
              Build the <span className="text-vibrant-orange">Future</span> <br />with Grophi.
            </motion.h1>
            <p className="mt-6 text-lg md:text-xl text-slate-grey max-w-2xl mx-auto font-light leading-relaxed">
              We're looking for passionate individuals to help us scale technology and talent across India. Join a team where engineering meets workforce growth.
            </p>
          </div>

          {/* Job Board Section */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Open Positions</h2>
              <div className="text-[10px] font-bold text-slate-grey uppercase tracking-[0.3em]">
                {JOBS.length} Opportunities Available
              </div>
            </div>

            <div className="space-y-6">
              {JOBS.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedJob(job)}
                  className="glass-card group cursor-pointer hover:border-vibrant-orange/30 transition-all duration-500 p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="flex-1">
                      <div className="inline-flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full mb-6 group-hover:bg-vibrant-orange/10 transition-colors">
                        <Briefcase className="text-gray-500 group-hover:text-vibrant-orange" size={14} />
                        <span className="text-[10px] font-bold text-gray-500 group-hover:text-vibrant-orange uppercase tracking-wider">{job.category}</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-vibrant-orange transition-colors">{job.title}</h4>
                      <div className="flex flex-wrap gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
                        <div className="flex items-center"><MapPin size={16} className="mr-2 text-vibrant-orange" /> {job.location}</div>
                        <div className="flex items-center"><Clock size={16} className="mr-2 text-vibrant-orange" /> {job.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 text-white rounded-2xl flex items-center justify-center group-hover:bg-vibrant-orange group-hover:scale-110 transition-all duration-500 shadow-xl">
                        <ArrowRight size={24} className="md:w-7 md:h-7" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fallback Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-24 p-16 glass-card text-center relative overflow-hidden border-white/5"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-vibrant-orange/5 rounded-full blur-3xl -ml-32 -mt-32" />
              <h4 className="text-3xl font-bold text-white mb-6 relative z-10">Don't see a perfect fit?</h4>
              <p className="text-slate-grey mb-10 max-w-xl mx-auto relative z-10 font-light text-lg">
                We're always looking for exceptional talent. Send your resume directly to our talent team and we'll keep you in mind for future openings.
              </p>
              <a 
                href={`mailto:${CONTACT.email.talent}`}
                className="btn-secondary inline-flex items-center relative z-10 text-lg"
              >
                Send Direct Application <ArrowRight className="ml-2" size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <JobModal 
        job={selectedJob} 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
      />
    </div>
  );
};
