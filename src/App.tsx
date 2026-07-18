import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ShieldCheck, ShieldAlert, Cpu, Lock, Unlock } from 'lucide-react';

// Component Imports
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ToolsGrid from './components/ToolsGrid';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import InteractiveTerminal from './components/InteractiveTerminal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootLogs, setBootLogs] = useState<string[]>([]);

  // Smooth custom anchor scroll behavior
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!isLoading) return;

    // Incremental progress simulation
    const interval = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    // Progressive loading text logs
    const logTimeline = [
      { text: '📡 INITIALIZING ADVERSARY INTERFACE...', delay: 100 },
      { text: '🔒 SECURING WEB SHELL PROXIES...', delay: 300 },
      { text: '✔ FIREWALL HEURISTIC HOOKS BYPASSED.', delay: 600 },
      { text: '🛠 MOUNTING RED-TEAM PACKET SCHEMAS...', delay: 900 },
      { text: '💥 DECRYPTING INTEL PORTFOLIO DATABASE...', delay: 1200 },
      { text: '✔ ACCESS GRANTED. WELCOME OPERATOR.', delay: 1400 }
    ];

    logTimeline.forEach((item) => {
      setTimeout(() => {
        setBootLogs((prev) => [...prev, item.text]);
      }, item.delay);
    });

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLoading]);

  return (
    <div className="bg-[#050505] text-white min-h-screen relative font-sans antialiased selection:bg-emerald-500 selection:text-black">
      
      {/* Matrix falling digital code canvas background */}
      <MatrixBackground />

      {/* Background Cyber-Grid Effect */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00FF88 0.5px, transparent 0.5px), linear-gradient(to right, #00FF88 0.5px, transparent 0.5px), linear-gradient(to bottom, #00FF88 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px, 40px 40px, 40px 40px'
        }}
      />

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Cybersecurity Decryption Boot Loader Screen */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#050505] z-50 flex flex-col items-center justify-center p-6"
          >
            {/* HUD Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,16,16,0)+50%,rgba(0,0,0,0.25)+50%),linear-gradient(to_right,rgba(255,0,0,0.06)+33%,rgba(0,255,0,0.02)+33%,rgba(0,0,255,0.06)+66%)] bg-[size:100%_4px,6px_100%] pointer-events-none opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent pointer-events-none" />

            <div className="max-w-md w-full space-y-8 font-mono relative">
              
              {/* Circular lock layout icon */}
              <div className="flex justify-center relative">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="p-5 bg-neutral-900 border border-emerald-500/30 rounded-full text-emerald-400 relative"
                >
                  <Lock className="w-8 h-8 text-emerald-400" />
                  <div className="absolute -inset-1.5 rounded-full border border-dashed border-emerald-500/20 animate-[spin_20s_linear_infinite]" />
                </motion.div>
              </div>

              {/* Progress Counters */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs text-emerald-500">
                  <span className="font-bold tracking-widest uppercase animate-pulse">Establishing Secure Uplink</span>
                  <span>{Math.min(bootProgress, 100)}%</span>
                </div>

                <div className="h-1.5 w-full bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden p-[1px]">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_10px_#00ff88]" 
                    style={{ width: `${Math.min(bootProgress, 100)}%` }}
                  />
                </div>
              </div>

              {/* Real-time printed cyber logs */}
              <div className="p-4 bg-neutral-950/80 border border-neutral-900 rounded-lg min-h-[140px] flex flex-col justify-end">
                <div className="space-y-1 text-[10px] text-gray-500 font-mono">
                  {bootLogs.map((log, lIdx) => (
                    <div 
                      key={lIdx} 
                      className={`flex items-center gap-2 ${
                        log.startsWith('✔') ? 'text-emerald-400 font-bold animate-[pulse_0.5s_ease]' : ''
                      }`}
                    >
                      <span>{log}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 text-emerald-400/70 font-bold animate-pulse">
                    <span>$</span>
                    <span className="w-1.5 h-3 bg-emerald-400 inline-block animate-[ping_1s_infinite]" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          /* Main Portfolio Application layout */
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col relative z-10"
          >
            {/* Header / Navigation bar */}
            <Header onNavClick={handleScrollToSection} />

            {/* Main Section Stream */}
            <main className="flex-1">
              
              {/* Hero Presentation */}
              <Hero onContactClick={() => handleScrollToSection('contact')} />

              {/* LIVE CONTROL PANEL TERMINAL STATION */}
              <section className="py-12 bg-transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="text-center mb-8">
                  <p className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase">// INTERACTIVE_TACTICAL_CONSOLE</p>
                  <h3 className="text-xs font-mono text-gray-400 mt-1 uppercase">Interact with the Red Team environment directly</h3>
                </div>
                <InteractiveTerminal />
              </section>

              {/* Achievements banner */}
              <Achievements />

              {/* About segment */}
              <About />

              {/* Technical Capabilities segment */}
              <Skills />

              {/* Services segment */}
              <Services />

              {/* Work History segment */}
              <Experience />

              {/* Projects portfolio segment */}
              <Projects />

              {/* Certifications segment */}
              <Certifications />

              {/* Tool Arsenal segment */}
              <ToolsGrid />

              {/* Blog Intelligence Reports segment */}
              <Blog />

              {/* Secure Transmission Form segment */}
              <Contact />

            </main>

            {/* Footer */}
            <Footer onNavClick={handleScrollToSection} />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
