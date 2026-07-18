import { motion } from 'motion/react';
import { servicesData } from '../data';
import * as Icons from 'lucide-react';

export default function Services() {
  
  // Dynamic Lucide icon lookup helper
  const renderIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName];
    if (!IconComponent) return <Icons.Shield className="w-6 h-6 text-emerald-400" />;
    return <IconComponent className="w-6 h-6 text-emerald-400" />;
  };

  return (
    <section className="py-20 bg-[#0d0d0d] border-y border-neutral-900 relative" id="services">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-emerald-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// 03_TACTICAL_CATALOG</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Security <span className="text-emerald-400">Services</span>
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500 mt-2 mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.45) }}
              className="p-6 bg-[#141414] border border-neutral-800 hover:border-emerald-500/40 rounded-lg group hover:bg-[#181818] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-400 transition-colors">
                  {renderIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Sub-Features list */}
              <div className="mt-5 pt-4 border-t border-neutral-800/60 space-y-2">
                <span className="text-[10px] font-mono text-emerald-400/70 tracking-widest block uppercase">Engage Standards:</span>
                <ul className="space-y-1">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-[10px] text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
