'use client';

import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Followers Gained', value: '+124.5K' },
    { label: 'Avg. Engagement', value: '8.4%' },
    { label: 'Total Reach', value: '2.1M+' },
    { label: 'Total Impressions', value: '2.4B+' },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-7xl w-full">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block"
          >
            01 / IMPACT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-black tracking-tighter leading-tight uppercase"
          >
            Results that <br />
            <span className="text-white/30">Define Future.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-base md:text-lg text-white/80 leading-relaxed font-medium max-w-md"
          >
            Trusted by 120+ forward-thinking brands, we translate complex data 
            into thumb-stopping visual experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col justify-center border border-white/5"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/30">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
