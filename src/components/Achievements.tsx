import { motion } from 'motion/react';
import { achievementsData } from '../data';
import { Shield, Users, Crosshair, Zap } from 'lucide-react';

export default function Achievements() {
  const getIcon = (label: string) => {
    if (label.includes('Experience')) return <Zap className="w-5 h-5 text-yellow-400" />;
    if (label.includes('Assessments')) return <Shield className="w-5 h-5 text-emerald-400" />;
    if (label.includes('Clients')) return <Users className="w-5 h-5 text-blue-400" />;
    return <Crosshair className="w-5 h-5 text-rose-500 animate-pulse" />;
  };

  return (
    <section className="py-16 bg-[#050505] relative" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Achievements Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 bg-[#141414] border border-neutral-800 hover:border-emerald-500/30 rounded-xl relative group overflow-hidden flex flex-col justify-between w-full sm:max-w-[340px] min-h-[200px]"
            >
              {/* Corner Grid Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/[0.01] via-transparent to-transparent pointer-events-none" />

              <div className="space-y-4">
                {/* Header Icon */}
                <div className="flex justify-between items-center">
                  <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg group-hover:border-emerald-500/20 transition-colors">
                    {getIcon(item.label)}
                  </div>
                  <span className="text-[8px] font-mono text-gray-600">// METRIC_OK</span>
                </div>

                {/* Counter Metric */}
                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                    {item.value}
                  </h3>
                  <p className="text-xs font-bold text-gray-300 tracking-wide font-sans uppercase">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Description subtext */}
              <p className="text-[10px] text-gray-500 leading-normal mt-3 pt-2 border-t border-neutral-800/60 font-mono">
                {item.subtext}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
