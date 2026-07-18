import { motion } from 'motion/react';
import { experienceData } from '../data';
import { Calendar, Briefcase, Terminal } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-20 bg-[#0d0d0d] border-y border-neutral-900 relative" id="experience">
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// 07_ENGAGEMENT_HISTORY</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500 mt-2 mx-auto" />
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-emerald-500/20 pl-6 md:pl-10 space-y-12 max-w-3xl mx-auto">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-emerald-500 group-hover:bg-emerald-500 shadow-[0_0_8px_rgba(0,255,136,0.3)] group-hover:shadow-[0_0_15px_#00ff88] transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-black" />
              </div>

              {/* Card Container */}
              <div className="p-6 bg-[#141414] border border-neutral-800 hover:border-emerald-500/30 rounded-xl group-hover:bg-[#181818] transition-all duration-300 space-y-4">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-neutral-800/60 pb-3">
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-sans">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400/80 font-semibold flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-gray-400 bg-neutral-900 border border-neutral-800 px-2.5 py-0.5 rounded-full h-fit w-fit">
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Narrative bullet points */}
                <ul className="space-y-2.5">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 text-xs text-gray-300 leading-relaxed">
                      <span className="text-emerald-500 font-bold shrink-0 mt-0.5 select-none font-mono">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 bg-neutral-950 border border-neutral-800 rounded text-[9px] font-mono text-gray-500 group-hover:border-emerald-500/10 group-hover:text-gray-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
