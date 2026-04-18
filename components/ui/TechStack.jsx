'use client';

import { motion } from 'framer-motion';

const techGroups = [
  {
    category: 'AI Creativity',
    desc: 'Using LLMs and generative vision to architect viral hooks and thumb-stopping visual DNA.',
    tools: ['MidJourney', 'Runway Gen-2', 'AI Scripting'],
    impact: '-60% Production Time'
  },
  {
    category: 'Automation Logic',
    desc: 'Programmatic posting and engagement workflows that scale without human bottleneck.',
    tools: ['Make.com', 'Zapier', 'Python'],
    impact: '24/7 Response Speed'
  },
  {
    category: 'Data Intelligence',
    desc: 'Deep proprietary analytics that predict trend lifecycle and viewer drop-off points.',
    tools: ['Looker Studio', 'Supermetrics', 'Python ML'],
    impact: '340% Avg. ROI Increase'
  }
];

export default function TechStack() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 overflow-hidden relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div>
          <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">05 / FUTURE PROOF</motion.span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-12">
            The Tech <br />
            <span className="text-white/30">Advantage.</span>
          </h2>
          <p className="max-w-xl text-lg text-white/40 leading-relaxed font-medium mb-12">
            We don't just use tools; we build systems. By integrating proprietary AI 
            models and automation, we deliver growth at a scale traditional agencies can't touch.
          </p>

          <div className="space-y-6">
            {techGroups.map((group, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[40px] border border-white/5 group hover:bg-white/[0.03] transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black uppercase tracking-tighter">{group.category}</h3>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-[8px] font-bold text-white uppercase tracking-widest">{group.impact}</span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{group.desc}</p>
                <div className="flex flex-wrap gap-2">
                   {group.tools.map((tool, j) => (
                      <span key={j} className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{tool} {j < group.tools.length - 1 ? '•' : ''}</span>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual System Node */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative aspect-square hidden lg:flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent blur-[100px] rounded-full animate-pulse" />
          <div 
            className="w-full h-full bg-contain bg-center bg-no-repeat opacity-60 mix-blend-screen"
            style={{ backgroundImage: 'url(/ai_tech_interface_asset_1776493226771.png)' }}
          />
          
          {/* Data connections animation */}
          <div className="absolute inset-0 pointer-events-none">
             {[...Array(5)].map((_, i) => (
               <motion.div
                 key={i}
                 animate={{ 
                   opacity: [0, 1, 0],
                   scale: [0.8, 1.2, 0.8],
                   x: (Math.random() - 0.5) * 400,
                   y: (Math.random() - 0.5) * 400
                 }}
                 transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                 className="absolute w-2 h-2 bg-white/20 rounded-full blur-[2px]"
               />
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
