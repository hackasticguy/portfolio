import { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal, Settings } from 'lucide-react';

interface HeaderProps {
  onNavClick: (id: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'SERVICES', id: 'services' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'BLOG', id: 'blog' },
    { label: 'CONTACT', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section calculation based on scroll offset
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#050505]/85 backdrop-blur-md border-b border-emerald-500/15 py-3 shadow-[0_4px_30px_rgba(0,255,136,0.03)]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => handleLinkClick('hero')} 
          className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-sm tracking-widest cursor-pointer group select-none"
        >
          <div className="p-1.5 bg-emerald-950/40 border border-emerald-500/20 group-hover:border-emerald-400 rounded transition-colors shadow-[0_0_8px_rgba(0,255,136,0.1)]">
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="flex flex-col text-left">
            <span>ANUBHAV_0x99</span>
            <span className="text-[8px] text-gray-500 uppercase tracking-normal">RED_TEAM_SEC</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-xs font-mono tracking-widest hover:text-emerald-400 transition-colors cursor-pointer relative py-1 ${
                    activeSection === item.id ? 'text-emerald-400' : 'text-gray-400'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500 rounded-full shadow-[0_0_8px_#00ff88]" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Comms indicator */}
          <div className="h-4 w-[1px] bg-neutral-800" />
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-3.5 py-1.5 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 text-[10px] font-mono font-semibold tracking-wider rounded transition-all cursor-pointer shadow-[0_0_8px_rgba(0,255,136,0.1)] hover:shadow-[0_0_12px_rgba(0,255,136,0.2)]"
          >
            ESTABLISH COMMS
          </button>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-2.5 py-1 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono font-semibold rounded"
          >
            COMMS
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 bg-neutral-900 border border-neutral-800 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 rounded transition-all cursor-pointer"
            title="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050505] border-b border-emerald-500/20 py-4 px-6 animate-[slideDown_0.3s_ease]">
          <ul className="space-y-4 font-mono text-xs">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left py-2 hover:text-emerald-400 transition-colors cursor-pointer ${
                    activeSection === item.id ? 'text-emerald-400' : 'text-gray-400'
                  }`}
                >
                  &gt;_ {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
