import { useState } from 'react';
import { motion } from 'motion/react';
import { toolsData } from '../data';
import { Terminal, Crosshair, Cpu, Eye, ShieldAlert } from 'lucide-react';

export default function ToolsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web App', 'Exploitation', 'Scanning', 'Active Directory', 'Cracking'];

  // Map database tools to our filter-friendly categorization
  const getToolCategory = (tool: typeof toolsData[0]) => {
    if (['Burp Suite Pro', 'Gobuster', 'Dirsearch', 'Nikto', 'SQLMap'].includes(tool.name)) return 'Web App';
    if (['Metasploit', 'PowerShell Empire', 'Hydra'].includes(tool.name)) return 'Exploitation';
    if (['Nmap', 'Nessus', 'Wireshark'].includes(tool.name)) return 'Scanning';
    if (['Responder'].includes(tool.name)) return 'Active Directory';
    if (['John the Ripper'].includes(tool.name)) return 'Cracking';
    return 'Web App';
  };

  const filteredTools = activeCategory === 'All'
    ? toolsData
    : toolsData.filter(t => getToolCategory(t) === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web App':
        return <Eye className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Exploitation':
        return <Crosshair className="w-3.5 h-3.5 text-rose-500" />;
      case 'Scanning':
        return <Cpu className="w-3.5 h-3.5 text-blue-400" />;
      case 'Active Directory':
        return <ShieldAlert className="w-3.5 h-3.5 text-yellow-500" />;
      default:
        return <Terminal className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#0d0d0d] border-y border-neutral-900 relative" id="tools">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-emerald-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// 05_OPERATIONAL_ARSENAL</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Offensive <span className="text-emerald-400">Weaponry</span>
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500 mt-2 mx-auto" />
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-md font-mono text-[11px] transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/50 shadow-[0_0_10px_rgba(0,255,136,0.1)]'
                  : 'bg-neutral-950 text-gray-500 border-neutral-900 hover:text-gray-300 hover:border-neutral-800'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tools Display Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTools.map((tool, idx) => {
            const cat = getToolCategory(tool);
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
                className="p-4 bg-[#141414] border border-neutral-800 hover:border-emerald-500/30 rounded-lg group hover:bg-[#181818] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {tool.name}
                  </span>
                </div>
                
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-neutral-800/60 text-[9px] font-mono">
                  <span className="text-gray-500">{cat.toUpperCase()}</span>
                  <span className="text-emerald-400/60">{getCategoryIcon(cat)}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
