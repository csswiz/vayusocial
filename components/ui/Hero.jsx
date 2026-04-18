'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-10 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6 block">
          Performance Driven SMM Agency
        </span>
        <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-white mb-8 uppercase text-balance">
          GROW YOUR <br />
          <span className="text-white/30">BRAND.</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-white/80 leading-relaxed font-medium mb-12">
          We craft viral strategies and immersive content for ambitious brands 
          ready to dominate the digital landscape.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-colors"
          >
            Start Your Journey
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-colors"
          >
            View Our Work
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
