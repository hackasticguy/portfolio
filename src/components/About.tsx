import { motion } from 'motion/react';
import { Shield, Target, UserCheck, Flame, BookOpen } from 'lucide-react';

export default function About() {
  const specialties = [
    { title: 'Penetration Testing', desc: 'Full-scope active identification of vulnerability landscapes' },
    { title: 'Red Teaming', desc: 'Goal-oriented adversary simulation mimicking APT threat groups' },
    { title: 'Web App Security', desc: 'Deep logical and technical analysis under OWASP & ASVS methodologies' },
    { title: 'Network Security', desc: 'Domain enumeration, Kerberoasting, and Active Directory takeover' },
    { title: 'API Security', desc: 'Authorization reviews, token validation audits, and data validation check' },
    { title: 'Cloud Security', desc: 'Audit of AWS/Azure configurations, IAM controls, and container barriers' },
    { title: 'Security Assessments', desc: 'Strategic threat cataloging and quantitative vulnerability scoring' },
    { title: 'Threat Modeling', desc: 'Constructive pre-engagement evaluation of architectural risks' },
    { title: 'Vulnerability Management', desc: 'Expert triage, reporting, prioritization, and re-testing controls' }
  ];

  return (
    <section className="py-20 bg-[#0d0d0d] border-y border-neutral-900 relative" id="about">
      {/* Abstract Design Elements */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-emerald-500/[0.02] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-12 space-y-2">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">// 01_IDENTITY_RECON</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500 mt-2 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Executive Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white font-sans flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Offensive Security Consultant</span>
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              As Anubhav, a dedicated Red Team Operator and Penetration Tester, I operate with an adversarial mindset to protect enterprise environments. With 6 months of intensive professional offensive security experience, I have partnered with technology, finance, and logistics providers to uncover and address critical exposure points before real threat actors can exploit them.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              My technical expertise spans beyond running automated security tools. I specialize in deep manual source validation, customized script weaponization, and bypassing advanced security controls (such as endpoint detection and web application firewall layers). 
            </p>

            {/* Core Values / Operational Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                <Target className="w-5 h-5 text-emerald-400 mb-1" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Mission Oriented</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Focusing on objectives that matter to business continuity.</p>
              </div>
              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg">
                <UserCheck className="w-5 h-5 text-emerald-400 mb-1" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Executive Communication</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Translating deep technical faults into business risk metrics.</p>
              </div>
            </div>
          </div>

          {/* Specialization Domain Pills / Grid */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-mono text-emerald-400 tracking-wider uppercase mb-3">// RECONNAISSANCE SPECTRUM</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-emerald-500/20 scrollbar-track-transparent">
              {specialties.map((spec, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-neutral-900/40 border border-neutral-800 hover:border-emerald-500/30 hover:bg-neutral-900 rounded-lg transition-all duration-300 flex gap-2.5 items-start group"
                >
                  <div className="p-1 bg-emerald-950/40 border border-emerald-500/10 rounded group-hover:bg-emerald-500/10 transition-colors mt-0.5">
                    <Flame className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">{spec.title}</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5 leading-normal">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Methodologies */}
            <div className="p-4 bg-emerald-950/10 border border-emerald-500/20 rounded-lg mt-4">
              <div className="flex items-center gap-2 mb-1.5">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">Methodological Alignment</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                All engagements are conducted under strict compliance frameworks including **OWASP ASVS**, **OSSTMM**, **MITRE ATT&CK**, **NIST SP 800-115**, and **PTES**.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
