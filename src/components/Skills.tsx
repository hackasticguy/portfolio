import { useState } from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data';
import { ShieldAlert, ShieldCheck, Terminal, Server, Code } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Offensive', 'Defensive', 'Languages & Scripts', 'Cloud & DevOps'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Offensive':
        return <ShieldAlert className="w-4 h-4 text-rose-400" />;
      case 'Defensive':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'Cloud & DevOps':
        return <Server className="w-4 h-4 text-blue-400" />;
      case 'Languages & Scripts':
        return <Code className="w-4 h-4 text-yellow-400" />;
      default:
        return <Terminal className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#050505] relative" id="skills">
      {/* Visual Accents */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-emerald-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// 02_MATRIX_CAPABILITIES</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Technical <span className="text-emerald-400">Capabilities</span>
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500 mt-2 mx-auto" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-md font-mono text-xs transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black border-emerald-400 font-semibold shadow-[0_0_15px_rgba(0,255,136,0.3)]'
                  : 'bg-neutral-900 text-gray-400 border-neutral-800 hover:text-white hover:border-emerald-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
              className="p-5 bg-[#141414] border border-neutral-800 hover:border-emerald-500/40 rounded-lg group hover:bg-[#181818] transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner Grid Highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/[0.02] via-transparent to-transparent pointer-events-none" />

              {/* Skill Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-neutral-900 border border-neutral-800 rounded">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  {skill.level}%
                </span>
              </div>

              {/* Skill Progress Bar Container */}
              <div className="space-y-1">
                <div className="h-2 w-full bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden relative p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 relative"
                  >
                    {/* Glowing endpoint on progress bar */}
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white rounded-full shadow-[0_0_8px_#00ff88]" />
                  </motion.div>
                </div>
                
                {/* Tech detail placeholder */}
                <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 pt-1">
                  <span>CATEGORY: {skill.category.toUpperCase()}</span>
                  <span>STATUS: OPTIMIZED</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Exploit Vector Warning Info Bar */}
        <div className="mt-12 p-4 bg-neutral-950 border border-neutral-800 rounded-lg flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left max-w-4xl mx-auto">
          <div className="p-3 bg-emerald-950/40 border border-emerald-500/20 rounded-lg shrink-0">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">System Penetration Standard Verification</h4>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              All skill metrics are updated based on active laboratory exercises, live bug-bounty participations, and simulated cyber warfare exercises in isolated sandbox environments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
