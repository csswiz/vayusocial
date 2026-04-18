'use client';

import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="w-full flex items-center justify-center px-6 md:px-20 py-24 relative overflow-hidden">
      <div className="max-w-7xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative w-full p-12 md:p-20 rounded-[60px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Background Text Blur */}
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none text-9xl font-black italic select-none">GROW</div>
          
          <div className="max-w-2xl text-center md:text-left">
             <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 block font-bold">READY TO SCALE?</span>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
               Your Competitors <br />
               <span className="text-white/30">Are Already Here.</span>
             </h2>
             <p className="text-white/40 text-sm md:text-base leading-relaxed font-medium">
               Stop playing catch-up. Deploy our viral architecture and start 
               dominating the attention economy today.
             </p>
          </div>

          <a 
            href="#audit" 
            className="px-12 py-6 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-neutral-200 transition-all shadow-2xl shrink-0"
          >
            Start Your Journey →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
