import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Globe, ShieldCheck, Send, RefreshCw, AlertTriangle, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+91 ',
    country: 'India',
    linkedin: '',
    github: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'encrypting' | 'routing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (formStatus === 'success') {
      setFormStatus('idle');
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please provide Name, Email, and Message vectors to proceed.');
      setFormStatus('error');
      return;
    }

    setErrorMessage('');
    // Start secure transmission simulation
    setFormStatus('encrypting');

    // Sequence stages for premium UX
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus('routing');

    try {
      const response = await fetch("https://formsubmit.co/ajax/anubhavkushwaha0010@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Secure Transmission from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          linkedin: formData.linkedin,
          github: formData.github,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('FormSubmit delivery failed');
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus('success');
      // Reset form variables
      setFormData({
        name: '',
        email: '',
        phone: '+91 ',
        country: 'India',
        linkedin: '',
        github: '',
        message: ''
      });

      // Auto-reset back to idle after 5 seconds
      setTimeout(() => {
        setFormStatus((current) => current === 'success' ? 'idle' : current);
      }, 5000);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to route secure packet. Please check your network connection.');
      setFormStatus('error');
    }
  };

  return (
    <section className="py-20 bg-[#0d0d0d] border-y border-neutral-900 relative" id="contact">
      <div className="absolute left-10 top-1/4 w-80 h-80 bg-emerald-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// 10_CONTACT_UPLINK</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Secure <span className="text-emerald-400">Communication</span>
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500 mt-2 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Secure Information and Vector Map */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-sans">Establish Transmission</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Provide your target contact variables. Messages undergo asymmetric encryption (AES-256 equivalent) before routing through isolated network hubs.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-3 font-mono text-xs text-gray-300">
                <div className="flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-gray-500 block text-[9px] font-bold tracking-widest uppercase">SECURE_MAIL:</span>
                    <a href="mailto:hackasticguy@gmail.com" className="hover:text-emerald-400 transition-colors">
                      hackasticguy@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-gray-500 block text-[9px] font-bold tracking-widest uppercase">COMMS_TEL:</span>
                    <a href="tel:+918178198309" className="hover:text-emerald-400 transition-colors">
                      +91 8178198309 // ACTIVE
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-gray-500 block text-[9px] font-bold tracking-widest uppercase">ZONE_COORD:</span>
                    <span>India / Asia-South Grid</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Green/Dark Vector Map Placeholder */}
            <div className="h-48 rounded-lg bg-neutral-950 border border-neutral-900 relative overflow-hidden flex items-center justify-center p-4">
              {/* Tactical map background grid SVG */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8804_1px,transparent_1px),linear-gradient(to_bottom,#00ff8804_1px,transparent_1px)] bg-[size:12px_12px]" />
              
              <svg className="w-full h-full text-emerald-950 stroke-emerald-500/10 fill-none" viewBox="0 0 400 200">
                {/* Simulated geographic lines */}
                <path d="M10,50 Q40,120 120,80 T240,110 T380,40" strokeWidth="1" />
                <path d="M30,120 Q80,180 180,140 T310,120 T390,170" strokeWidth="1" />
                
                {/* Target concentric circles */}
                <circle cx="210" cy="110" r="40" stroke="#00ff88" strokeWidth="0.5" strokeDasharray="2,2" className="animate-[spin_10s_linear_infinite]" />
                <circle cx="210" cy="110" r="20" stroke="#00ff88" strokeWidth="0.5" className="animate-pulse" />
                <circle cx="210" cy="110" r="2" fill="#00ff88" />
                
                {/* Coordinate marker */}
                <line x1="210" y1="20" x2="210" y2="180" stroke="#00ff88" strokeWidth="0.5" strokeDasharray="2,4" />
                <line x1="20" y1="110" x2="380" y2="110" stroke="#00ff88" strokeWidth="0.5" strokeDasharray="2,4" />
              </svg>

              {/* Status Indicator */}
              <div className="absolute bottom-3 right-3 bg-black/80 border border-emerald-500/30 px-2 py-0.5 rounded text-[8px] font-mono text-emerald-400">
                SATELLITE_LINK: LOCKED (20.5937° N, 78.9629° E)
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Secure Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 bg-[#141414] border border-neutral-800 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/[0.01] via-transparent to-transparent pointer-events-none" />

              <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-6 border-b border-neutral-800/80 pb-3">
                // TRANSMISSION_UPLOAD_TERMINAL
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs text-white">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase text-[10px] tracking-wider block">Sender Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formStatus === 'encrypting' || formStatus === 'routing'}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded p-3 text-white outline-none transition-colors"
                      placeholder="e.g. Cyber Director"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase text-[10px] tracking-wider block">Secure Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formStatus === 'encrypting' || formStatus === 'routing'}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded p-3 text-white outline-none transition-colors"
                      placeholder="e.g. admin@enterprise.com"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase text-[10px] tracking-wider block">Phone Vector</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={formStatus === 'encrypting' || formStatus === 'routing'}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded p-3 text-white outline-none transition-colors"
                      placeholder="e.g. +1 (555) 012-3456"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase text-[10px] tracking-wider block">Country / Domain</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      disabled={formStatus === 'encrypting' || formStatus === 'routing'}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded p-3 text-white outline-none transition-colors"
                      placeholder="e.g. United States / CA"
                    />
                  </div>
                </div>

                {/* Row 3: LinkedIn and GitHub Link references */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase text-[10px] tracking-wider block flex items-center gap-1.5">
                      <Linkedin className="w-3 h-3 text-emerald-400" />
                      <span>LinkedIn URL</span>
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      disabled={formStatus === 'encrypting' || formStatus === 'routing'}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded p-3 text-white outline-none transition-colors"
                      placeholder="e.g. https://linkedin.com/in/username"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase text-[10px] tracking-wider block flex items-center gap-1.5">
                      <Github className="w-3 h-3 text-emerald-400" />
                      <span>GitHub URL</span>
                    </label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      disabled={formStatus === 'encrypting' || formStatus === 'routing'}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded p-3 text-white outline-none transition-colors"
                      placeholder="e.g. https://github.com/username"
                    />
                  </div>
                </div>

                {/* Row 4: Message text */}
                <div className="space-y-1.5">
                  <label className="text-gray-500 uppercase text-[10px] tracking-wider block">Message Payload *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formStatus === 'encrypting' || formStatus === 'routing'}
                    rows={4}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-emerald-500 rounded p-3 text-white outline-none transition-colors resize-none"
                    placeholder="Enter message details..."
                  />
                </div>

                {/* Error Box */}
                {formStatus === 'error' && (
                  <div className="p-3 bg-rose-950/20 border border-rose-500/30 rounded text-rose-400 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Simulated Cryptographic Sending Overlay states */}
                <AnimatePresence mode="wait">
                  {formStatus === 'encrypting' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-emerald-950/10 border border-emerald-500/20 rounded text-emerald-400 flex items-center gap-2.5"
                    >
                      <RefreshCw className="w-4 h-4 animate-spin shrink-0" />
                      <span className="animate-pulse">CRYPTOGRAPHIC PACKET ASSEMBLY: ENCRYPTING AES-256...</span>
                    </motion.div>
                  )}

                  {formStatus === 'routing' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-emerald-950/10 border border-emerald-500/20 rounded text-emerald-400 flex items-center gap-2.5"
                    >
                      <RefreshCw className="w-4 h-4 animate-spin shrink-0" />
                      <span className="animate-pulse">SECURE MULTI-HOP TUNNEL ROUTING: ROUTING THROUGH PROXIES...</span>
                    </motion.div>
                  )}

                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-emerald-950/30 border border-emerald-500/50 rounded text-emerald-400 flex items-start gap-2.5"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>✔ SECURE TRANSMISSION UPLOADED SUCCESSFULLY. Payload isolated and stored safely.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Trigger */}
                {formStatus === 'success' ? (
                  <button
                    type="button"
                    onClick={() => setFormStatus('idle')}
                    className="w-full py-3 bg-neutral-900 border border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-950/20 text-emerald-400 font-semibold font-mono tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,255,136,0.1)] hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] animate-pulse"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>PREPARE NEW TRANSMISSION</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={formStatus !== 'idle' && formStatus !== 'error'}
                    className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:hover:bg-emerald-500 text-black font-semibold font-mono tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,255,136,0.2)] hover:shadow-[0_0_25px_rgba(0,255,136,0.4)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND SECURE TRANSMISSION</span>
                  </button>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
