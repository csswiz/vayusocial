'use client';

import { motion } from 'framer-motion';
import LightParallax from './LightParallax';

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-10 text-center relative overflow-hidden bg-black">
      {/* Lightweight Parallax Hero Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightParallax />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl z-10"
      >
        <motion.span 
          whileHover={{ scale: 1.05, filter: "brightness(1.5)" }}
          className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6 block cursor-default"
        >
          Performance Driven SMM Agency
        </motion.span>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-white mb-8 uppercase text-balance">
          <motion.div 
            whileHover={{ scaleX: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="cursor-default inline-block origin-center"
          >
            GROW YOUR
          </motion.div>
          <br />
          <motion.div 
            whileHover={{ scaleX: 1.25 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-white/30 cursor-default inline-block origin-center"
          >
            BRAND.
          </motion.div>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-white/80 leading-relaxed font-medium mb-12">
          We craft viral strategies and immersive content for ambitious brands 
          ready to dominate the digital landscape.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-colors cursor-pointer"
          >
            Start Your Journey
          </motion.a>
          <motion.a 
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            View Our Work
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
