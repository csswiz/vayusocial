'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const cases = [
  {
    id: 1,
    client: 'FashionForward',
    industry: 'Streetwear',
    challenge: 'Stagnant growth and inconsistent brand voice across Instagram.',
    strategy: 'High-end lifestyle cinematography integrated with trending TikTok audio hooks.',
    timeline: '90 Days',
    metrics: { before: '5.2K Reach', after: '1 strategy / 180K Reach' },
    result: '+240% Sales Growth',
    roas: '5.2x',
    color: '#3b82f6'
  },
  {
    id: 2,
    client: 'TechWave AI',
    industry: 'SaaS / B2B',
    challenge: 'Low quality lead generation and high cost per acquisition.',
    strategy: 'Founder-led "Behind the Scenes" content and educational LinkedIn carousels.',
    timeline: '60 Days',
    metrics: { before: '2.1% Conv.', after: '8.8% Conversion' },
    result: '$45K MRR Increase',
    roas: 'N/A',
    color: '#8b5cf6'
  },
  {
    id: 3,
    client: 'GlowBrand',
    industry: 'Beauty / Skincare',
    challenge: 'Launching a new product line with zero existing TikTok authority.',
    strategy: 'Aggressive influencer seeding combined with high-frequency UGC viral ads.',
    timeline: '30 Days',
    metrics: { before: '0 Impressions', after: '2.4M Impressions' },
    result: 'Sold Out in 4 Days',
    roas: '6.8x',
    color: '#ec4899'
  }
];

export default function CaseStudies() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 relative">
      <div className="max-w-7xl w-full">
        <div className="mb-16 md:mb-24">
          <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">02 / PROOF OF CONCEPT</motion.span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            REAL IMPACT. <br />
            <span className="text-white/30">REAL GROWTH.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass rounded-[40px] p-10 border border-white/5 group hover:bg-white/[0.03] transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter">{item.client}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mt-1">{item.industry}</p>
                  </div>
                  <div className="text-[10px] font-mono p-2 border border-white/10 rounded-lg text-white/40">{item.timeline}</div>
                </div>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-black text-white/10 italic">VS</div>
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-white/20">Initial / Current</div>
                      <div className="text-sm font-bold">{item.metrics.before} → <span className="text-white">{item.metrics.after}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setSelected(item)}
                className="w-full py-4 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                View Full Story
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expandable Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
              onClick={() => setSelected(null)}
            />
            
            <motion.div
              layoutId={`case-${selected.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-[60px] overflow-hidden p-8 md:p-16 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-[100]"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20">
                <div className="min-w-0"> {/* Use min-w-0 to allow flex/grid overflow control */}
                  <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-6 px-4 py-1 border border-white/10 w-fit rounded-full">
                    {selected.industry} / {selected.timeline}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-10 break-words line-clamp-2">
                    {selected.client}
                  </h2>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold">The Challenge</h4>
                      <p className="text-lg text-white/80 leading-relaxed font-medium">{selected.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold">The Strategy</h4>
                      <p className="text-lg text-white/80 leading-relaxed font-medium">{selected.strategy}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-6">
                  <div className="p-8 rounded-[40px] bg-white/[0.03] border border-white/5">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 font-bold">Quantifiable Result</h4>
                    <div className="text-5xl font-black tracking-tighter text-white mb-2">{selected.result}</div>
                    {selected.roas !== 'N/A' && (
                      <div className="text-xl font-bold text-white/40 italic">{selected.roas} ROAS Efficiency</div>
                    )}
                  </div>

                  <div className="p-8 rounded-[40px] border border-white/5 flex flex-col gap-6">
                    <div className="flex justify-between items-end border-b border-white/5 pb-6">
                      <span className="text-[10px] uppercase tracking-widest text-white/30">Previous Reach</span>
                      <span className="text-xl font-bold line-through text-white/10">{selected.metrics.before.split(' ')[0]}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] uppercase tracking-widest text-white/30 underline decoration-white/20 underline-offset-4">Current Reach</span>
                      <span className="text-3xl font-black">{selected.metrics.after}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
