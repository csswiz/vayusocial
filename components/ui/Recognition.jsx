'use client';

import { motion } from 'framer-motion';

const phantomAwards = [
  { 
    name: 'Neural Retention Gold', 
    year: '2026', 
    category: 'Architecture',
    desc: 'Awarded for maintaining 95%+ audience retention on 1M+ view content.'
  },
  { 
    name: 'Viral Velocity Grand Prix', 
    year: '2026', 
    category: 'Engine',
    desc: 'Recognizing content that scales from 0 to 10M organic views in under 24 hours.'
  },
  { 
    name: 'The Obsidian Conversion Seal', 
    year: '2025', 
    category: 'Elite',
    desc: 'Exclusively for agencies delivering a sustained 12x ROAS on high-volume budgets.'
  },
  { 
    name: 'Pattern Interrupt Excellence', 
    year: '2026', 
    category: 'Visual DNA',
    desc: 'For the most effective psychological visual hook architecture in social history.'
  },
  { 
    name: 'Algorithm Mastery Citation', 
    year: '2026', 
    category: 'Labs',
    desc: 'The only agency citation for solving the V5 platform core update within 48 hours.'
  },
  { 
    name: 'Auditory Engine Distinction', 
    year: '2025', 
    category: 'Hooks',
    desc: 'Excellence in sound-driven viral engineering and somatic triggers.'
  }
];

export default function Recognition() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 relative overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">12 / PHANTOM AWARDS</motion.span>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              Vetted by the <br />
              <span className="text-white/30">System.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/50 leading-relaxed font-medium italic underline decoration-white/10 underline-offset-8">
            Exclusively awarded by internal growth labs and algorithmic governing bodies. 
            Real authority is built, not bought.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phantomAwards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group p-10 md:p-14 rounded-[50px] border border-white/5 glass transition-all duration-700 hover:border-white/20 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                   <span className="text-[14px] font-black text-white/20 group-hover:text-white transition-colors">0{i + 1}</span>
                   <span className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-[8px] font-bold text-white/40 uppercase tracking-[0.2em]">{award.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-8 group-hover:text-white/90 transition-colors">{award.name}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-medium mb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {award.desc}
                </p>
              </div>
              
              <div className="flex justify-between items-center pt-8 border-t border-white/5">
                <div className="text-[9px] font-mono tracking-widest text-white/20 uppercase">Auth Ref: VAYU_{award.year}_CORE</div>
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative text blur backgrounds */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
}
