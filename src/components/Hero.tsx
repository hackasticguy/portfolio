import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Terminal, Download, Shield, ShieldCheck, Crosshair } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ResumeTemplate from './ResumeTemplate';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [copiedFlag, setCopiedFlag] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadResume = async () => {
    if (!resumeRef.current) return;
    setDownloading(true);
    
    // Store original styles to restore later
    const originalStyles: { element: HTMLStyleElement; text: string }[] = [];
    const disabledLinks: HTMLLinkElement[] = [];
    const tempStyleElements: HTMLStyleElement[] = [];

    try {
      // 1. Temporarily sanitize "oklch" color functions in <style> elements to prevent html2canvas parser crash
      const styleElements = document.querySelectorAll('style');
      styleElements.forEach((el) => {
        if (el.textContent && el.textContent.includes('oklch')) {
          originalStyles.push({ element: el as HTMLStyleElement, text: el.textContent });
          // Replace any oklch(...) with a safe fallback color like rgb(80, 80, 80)
          const sanitizedText = el.textContent.replace(/oklch\([^)]+\)/g, 'rgb(80, 80, 80)');
          el.textContent = sanitizedText;
        }
      });

      // 2. Handle same-origin <link rel="stylesheet"> elements that might contain oklch
      const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
      for (let i = 0; i < linkElements.length; i++) {
        const link = linkElements[i] as HTMLLinkElement;
        try {
          const sheet = link.sheet;
          if (sheet) {
            let hasOklch = false;
            try {
              const rules = sheet.cssRules;
              for (let j = 0; j < rules.length; j++) {
                if (rules[j].cssText.includes('oklch')) {
                  hasOklch = true;
                  break;
                }
              }
            } catch (e) {
              // Ignore CORS restriction
            }

            if (hasOklch) {
              // Fetch stylesheet content, sanitize it, inject as style tag, and disable link
              const response = await fetch(link.href);
              const text = await response.text();
              const sanitizedText = text.replace(/oklch\([^)]+\)/g, 'rgb(80, 80, 80)');
              
              const tempStyle = document.createElement('style');
              tempStyle.textContent = sanitizedText;
              document.head.appendChild(tempStyle);
              tempStyleElements.push(tempStyle);
              
              link.disabled = true;
              disabledLinks.push(link);
            }
          }
        } catch (err) {
          console.warn("Failed to sanitize link stylesheet:", err);
        }
      }

      const element = resumeRef.current;
      const canvas = await html2canvas(element, {
        scale: 2.5, // 2.5x scale for hyper-sharp image quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const downloadLink = document.createElement('a');
      downloadLink.href = imgData;
      downloadLink.download = 'Anubhav_Resume.jpg';
      downloadLink.click();
    } catch (err) {
      console.error("Failed to generate resume JPG:", err);
    } finally {
      // Always restore the original styles
      originalStyles.forEach(({ element, text }) => {
        element.textContent = text;
      });
      disabledLinks.forEach((link) => {
        link.disabled = false;
      });
      tempStyleElements.forEach((el) => {
        el.remove();
      });
      setDownloading(false);
    }
  };

  const copyTryHackMe = () => {
    navigator.clipboard.writeText('TryHackMe ID: hackasticguy');
    setCopiedFlag(true);
    setTimeout(() => setCopiedFlag(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-12 md:py-20 overflow-hidden" id="hero">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8808_1px,transparent_1px),linear-gradient(to_bottom,#00ff8808_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Information & Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Cyber Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-full text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>ANUBHAV // SEC_OP ACTIVE // TARGET_SECURE: FALSE</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-[#00FF88] font-mono text-xs md:text-sm tracking-widest uppercase">
              // OFFENSIVE SECURITY SPECIALIST
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight text-white uppercase">
              PENETRATION<br />
              <span className="text-transparent text-stroke-cyber">TESTER</span>
            </h1>
            <p className="text-xs md:text-sm font-mono text-emerald-400 font-semibold tracking-wider">
              [ 6 MONTHS OF ACTIVE OPERATIONS ]
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed italic border-l-2 border-[#00FF88] pl-6 my-4">
            "I help organizations identify, assess, and eliminate critical security vulnerabilities through advanced penetration testing, red teaming, and adversary simulation."
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onContactClick}
              className="px-8 py-3 bg-[#00FF88] text-black font-bold uppercase text-xs tracking-widest hover:bg-[#00C26E] transition-all rounded shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>Request Briefing</span>
            </button>
            <button
              onClick={handleDownloadResume}
              disabled={downloading}
              className="px-8 py-3 border border-[#00FF88]/40 text-[#00FF88] font-bold uppercase text-xs tracking-widest hover:bg-[#00FF88]/10 transition-all rounded hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloading ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#00FF88] border-t-transparent animate-spin mr-1" />
                  <span>Generating JPG...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </>
              )}
            </button>
          </div>

          {/* Professional Stats Overview */}
          <div className="flex gap-6 mt-6 pt-6 border-t border-neutral-900">
            <div className="text-left">
              <div className="text-2xl md:text-3xl font-bold text-[#00FF88] font-mono">4</div>
              <div className="text-[9px] uppercase tracking-wider text-[#B3B3B3] font-mono">Assessments</div>
            </div>
            <div className="w-px h-10 bg-[#00FF88]/20 self-center" />
            <div className="text-left">
              <div className="text-2xl md:text-3xl font-bold text-[#00FF88] font-mono">3</div>
              <div className="text-[9px] uppercase tracking-wider text-[#B3B3B3] font-mono">Vulns Found</div>
            </div>
          </div>

          {/* Social Icons & Platforms */}
          <div className="pt-4 space-y-3">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">// SECURE CONNECT VECTORS</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/anubhav0010/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/hackasticguy"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300"
                title="GitHub Repositories"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hackasticguy@gmail.com"
                className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300"
                title="Secure Mail"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* Custom Badges for TryHackMe / HackTheBox */}
              <a
                href="https://tryhackme.com/p/hackasticguy"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 text-xs font-mono flex items-center gap-2"
                title="TryHackMe Profile"
              >
                <span className="text-orange-500 font-extrabold">THM</span>
                <span className="text-[11px] text-gray-500">hackasticguy</span>
              </a>

              <a
                href="https://app.hackthebox.com/users/3720480"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 text-xs font-mono flex items-center gap-2"
                title="HackTheBox Profile"
              >
                <span className="text-emerald-500 font-extrabold">HTB</span>
                <span className="text-[11px] text-gray-500">hackasticguy</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Profile & Certs Card layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full flex flex-col gap-6"
        >
          {/* Profile Card */}
          <div className="relative w-full bg-[#141414] border border-[#00FF88]/20 rounded-2xl p-6 sm:p-8 overflow-hidden group shadow-[0_0_30px_rgba(0,255,136,0.02)]">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-[#00FF88]/30">STATUS: ACTIVE</div>
            
            <div className="flex flex-col items-center justify-center h-full gap-6">
              <div className="relative">
                {/* 192px/48 w-48 h-48 Circle frame */}
                <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full border-4 border-[#00FF88] shadow-[0_0_30px_#00FF88] overflow-hidden flex items-center justify-center bg-[#0d0d0d]">
                  {!imageError ? (
                    <img
                      src="/profile.jpg"
                      alt="Operator"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Dynamic Backup Crosshair Visual */
                    <div className="w-full h-full relative flex items-center justify-center">
                      <Crosshair className="w-10 h-10 text-emerald-400 animate-pulse" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.15),transparent)]" />
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-1 right-2 bg-[#00FF88] text-black text-[9px] font-mono font-bold px-3 py-1 rounded-full shadow-[0_0_10px_#00FF88]">
                  VERIFIED
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">Anubhav</h3>
                <p className="text-[#00FF88] font-mono text-xs uppercase mt-1.5">Senior Operative // 6 Months Exp</p>
              </div>
            </div>
          </div>

          {/* Mini Certifications Showcase matching design */}
          <div className="h-28 bg-[#0D0D0D] border border-white/5 rounded-2xl p-4 flex justify-around items-center gap-4">
            <div className="flex flex-col items-center opacity-100 cursor-default">
              <div className="w-12 h-12 bg-[#00FF88]/20 rounded-lg mb-1 border border-[#00FF88] shadow-[0_0_15px_rgba(0,255,136,0.3)] flex items-center justify-center">
                <span className="text-[#00FF88] font-bold text-xs font-mono">C|AI</span>
              </div>
              <span className="text-[9px] font-mono text-[#00FF88] font-bold">CYBER AI</span>
            </div>

            <div className="w-px h-12 bg-white/5" />

            <div className="flex flex-col items-center opacity-100 cursor-default">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg mb-1 border border-emerald-500/40 hover:border-emerald-400 transition-colors flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-[10px] font-mono">C_OPS</span>
              </div>
              <span className="text-[9px] font-mono text-gray-400 font-medium">CYBEROPS</span>
            </div>
          </div>
        </motion.div>
      </div>
      <ResumeTemplate innerRef={resumeRef} />
    </section>
  );
}
