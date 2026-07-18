import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { ExternalLink, Terminal, ShieldAlert, Sparkles, HelpCircle, X, Github } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Networking', 'Cybersecurity & Automation', 'Cloud Security'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-[#050505] relative" id="projects">
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// 06_ADVERSARY_SIMULATIONS</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Featured <span className="text-emerald-400">Engagements</span>
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500 mt-2 mx-auto" />
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-md font-mono text-[11px] transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black border-emerald-400 font-semibold'
                  : 'bg-neutral-900 text-gray-400 border-neutral-800 hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
              className="bg-[#141414] border border-neutral-800 hover:border-emerald-500/30 rounded-lg overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              {/* Image Container with scanner line overlay */}
              <div className="relative h-44 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                
                {/* Visual scan animation overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-emerald-400/25 blur-[1px] animate-[bounce_6s_infinite_ease-in-out]" />
                
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-black/80 border border-emerald-500/30 text-emerald-400 font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded text-[9px] font-mono text-gray-500">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[9px] font-mono text-emerald-400/70 py-0.5 px-1.5 bg-emerald-950/20 border border-emerald-500/10 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 bg-neutral-950 hover:bg-emerald-500 border border-emerald-500/20 hover:border-emerald-400 text-emerald-400 hover:text-black font-semibold rounded text-xs font-mono transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>VIEW MISSION SYNOPSIS</span>
                    </button>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={project.github || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 bg-[#0a0a0a] hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-gray-400 hover:text-white font-medium rounded text-[10px] font-mono transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Github className="w-3 h-3" />
                        <span>GITHUB</span>
                      </a>
                      <a
                        href={project.liveDemo || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 bg-[#0a0a0a] hover:bg-emerald-500/10 border border-neutral-800 hover:border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-medium rounded text-[10px] font-mono transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>LIVE DEMO</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exploit Details Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#141414] border border-emerald-500/30 rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 relative flex flex-col scrollbar-thin scrollbar-thumb-emerald-500/20"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1.5 bg-neutral-900 border border-neutral-800 text-gray-400 hover:text-white rounded-full hover:border-emerald-500/30 transition-all cursor-pointer z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Banner Image */}
                <div className="h-48 relative overflow-hidden shrink-0">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-emerald-500 text-black font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 tracking-wider block">// 01_MISSION_SYNOPSIS</span>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Vulnerabilities Disclosed */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 tracking-wider block flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                      <span>02_DISCLOSED_VULNERABILITY_VECTORS</span>
                    </span>
                    <div className="space-y-2">
                      {selectedProject.vulnerabilitiesFound.map((vuln, vIdx) => (
                        <div key={vIdx} className="p-2.5 bg-rose-950/10 border border-rose-500/20 hover:border-rose-500/40 rounded flex gap-2.5 items-start">
                          <span className="text-[9px] font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 px-1 py-0.5 rounded mt-0.5 shrink-0">
                            SEC_FAULT
                          </span>
                          <span className="text-[11px] font-mono text-gray-300 leading-normal">{vuln}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Remediation Block */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 tracking-wider block flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>03_REMEDIATION_&_CONTROL_ROADMAP</span>
                    </span>
                    <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed bg-neutral-900 border border-neutral-800 p-3 rounded font-mono border-l-2 border-l-emerald-500">
                      {selectedProject.remediation}
                    </p>
                  </div>

                  {/* Tech specs and verification footer */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-800">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded text-[9px] font-mono text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
