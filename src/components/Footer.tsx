import { Linkedin, Github, Terminal, ArrowUp, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-neutral-900 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8804_1px,transparent_1px),linear-gradient(to_bottom,#00ff8804_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Segment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-neutral-900 pb-12">
          
          {/* Logo Brand / Identity */}
          <div className="md:col-span-4 space-y-3 text-left">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-bold tracking-widest">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>ANUBHAV_0x99 // SEC_ENG</span>
            </div>
            <p className="text-gray-500 text-xs max-w-sm leading-relaxed">
              Premium Penetration Testing, Red Teaming, Vulnerability Research, and Adversary Simulation services for enterprise protection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-gray-400">
            {[
              { label: 'ABOUT', id: 'about' },
              { label: 'SKILLS', id: 'skills' },
              { label: 'SERVICES', id: 'services' },
              { label: 'PROJECTS', id: 'projects' },
              { label: 'EXPERIENCE', id: 'experience' },
              { label: 'BLOG', id: 'blog' },
              { label: 'CONTACT', id: 'contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onNavClick(link.id)}
                className="hover:text-emerald-400 transition-colors uppercase tracking-wider cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social connections */}
          <div className="md:col-span-3 flex justify-start md:justify-end items-center gap-4">
            <a
              href="https://www.linkedin.com/in/anubhav0010/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-neutral-900 border border-neutral-800 rounded text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/hackasticguy"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-neutral-900 border border-neutral-800 rounded text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:hackasticguy@gmail.com"
              className="p-2 bg-neutral-900 border border-neutral-800 rounded text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              title="Email Comms"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={handleScrollTop}
              className="p-2 bg-emerald-950/40 border border-emerald-500/30 rounded text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Bottom Segment */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-mono text-gray-500">
          
          {/* Copyright */}
          <div>
            © {currentYear} ANUBHAV_0x99. All security rights hardened. Created under compliance parameters.
          </div>

          {/* Bruce Schneier Cybersecurity Quote */}
          <div className="italic text-center md:text-right text-gray-400 max-w-md">
            "Security is not a product, but a process." <span className="text-emerald-400/80 font-bold not-italic font-mono">— Bruce Schneier</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
