import { motion } from 'motion/react';
import { certificationsData } from '../data';
import { Award, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function Certifications() {
  const getCertLogo = (type: 'ai-prime' | 'cyber-ops' | 'security-plus') => {
    switch (type) {
      case 'ai-prime':
        return (
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-emerald-400 flex items-center justify-center relative">
            <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
            <div className="absolute -inset-1 rounded-full bg-emerald-500/10 blur-[6px] -z-10 animate-pulse" />
          </div>
        );
      case 'cyber-ops':
        return (
          <div className="w-12 h-12 rounded-full bg-neutral-900 border border-emerald-500/50 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-emerald-400" />
          </div>
        );
      case 'security-plus':
        return (
          <div className="w-12 h-12 rounded-full bg-neutral-900 border border-yellow-500/50 flex items-center justify-center">
            <ShieldAlert className="w-6 h-6 text-yellow-400" />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
            <Award className="w-6 h-6 text-gray-400" />
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-[#050505] relative" id="certifications">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// 04_SECURITY_VERIFICATION</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Professional <span className="text-emerald-400">Certifications</span>
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500 mt-2 mx-auto" />
        </div>

        {/* Certifications List */}
        <div className="flex flex-wrap justify-center gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-[#141414] border border-neutral-800 hover:border-emerald-500/40 rounded-xl hover:bg-[#181818] transition-all duration-300 relative overflow-hidden flex flex-col justify-between w-full sm:max-w-[320px] min-h-[220px]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/[0.01] via-transparent to-transparent pointer-events-none" />
              
              <div className="space-y-4">
                {/* Logo and Date */}
                <div className="flex justify-between items-start">
                  {getCertLogo(cert.logoType)}
                  <span className="text-[10px] font-mono text-gray-500 bg-neutral-900 border border-neutral-800 px-2.5 py-0.5 rounded-full">
                    {cert.date}
                  </span>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/80">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* ID Bar */}
              {cert.credentialId && (
                <div className="mt-6 pt-3 border-t border-neutral-800/60">
                  <div className="flex justify-between items-center text-[9px] font-mono">
                    <span className="text-gray-600">CRED_ID:</span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/20 px-1.5 py-0.5 rounded border border-emerald-500/10">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
