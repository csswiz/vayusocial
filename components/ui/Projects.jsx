'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    { title: 'FashionForward', category: 'Instagram / 2024' },
    { title: 'TechWave AI', category: 'LinkedIn / 2023' },
    { title: 'GlowBrand', category: 'TikTok / 2024' },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-10 md:px-20 py-32 overflow-hidden">
      <div className="w-full max-w-7xl">
        <div className="flex justify-between items-end mb-20">
          <div>
            <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">05 / PORTFOLIO</motion.span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected <span className="text-white/20">Works.</span></h2>
          </div>
          <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">
            View All Projects →
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] bg-white/[0.03] border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-700 opacity-20">
                  <span className="text-white text-9xl font-bold">{project.title[0]}</span>
                </div>
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold tracking-tighter">{project.title}</h3>
                  <p className="text-sm text-white/40 tracking-widest uppercase mt-4 mb-6">{project.category}</p>
                  <div className="w-12 h-px bg-white/20 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
