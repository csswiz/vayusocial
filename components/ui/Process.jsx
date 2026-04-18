'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    tag: 'Phase 01 / INTEL',
    title: 'Research & Audience Analysis',
    desc: 'We map the psychological triggers of your core demographic and identify untouched market gaps.',
    details: ['Competitor Shadowing', 'Trend Forecasting', 'Gap Discovery']
  },
  {
    tag: 'Phase 02 / LOGIC',
    title: 'Content Strategy System',
    desc: 'Architecture designed for platform-specific algorithms. Every post serves a strategic multi-channel purpose.',
    details: ['Platform Native Tone', 'Visual DNA Mapping', 'Batch Systems']
  },
  {
    tag: 'Phase 03 / ENGINE',
    title: 'Hook-Retention-Conversion Model',
    desc: 'The mathematical approach to engagement. We optimize the first 3 seconds to maximize average watch time.',
    details: ['Auditory Hooks', 'Pattern Interrupts', 'CTA Anchoring']
  },
  {
    tag: 'Phase 04 / FUEL',
    title: 'Ad Funnel Structure',
    desc: 'Precision-targeted ad campaigns engineered for maximum ROAS. We don’t just boost; we build conversion engines.',
    details: ['Retargeting Layers', 'A/B Creative Sprints', 'LTV Optimization']
  },
  {
    tag: 'Phase 05 / ASCENSION',
    title: 'Scaling & Optimization Loop',
    desc: 'Data-driven evolution. We analyze the wins, cut the losses, and multiply the budgets for explosive growth.',
    details: ['Heatmap Analysis', 'ROI Doubling', 'Viral Feedback Loop']
  }
];

export default function Process() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 bg-white/[0.01] relative overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="mb-24">
          <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">04 / THE SYSTEM</motion.span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-12">
            The Viral <br />
            <span className="text-white/30">Architecture.</span>
          </h2>
          <p className="max-w-xl text-lg text-white/50 leading-relaxed font-medium">
            We don’t believe in luck. We believe in high-authority systems designed 
            to dominate social feeds and convert attention into revenue.
          </p>
        </div>
        
        <div className="relative space-y-12">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[19px] top-10 bottom-10 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-0 md:pl-20 group"
            >
              {/* Step Circle */}
              <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full border border-white/20 bg-[#050505] z-10 hidden md:flex items-center justify-center text-[10px] font-black group-hover:border-white transition-colors">
                 0{i + 1}
              </div>

              <div className="glass p-10 md:p-14 rounded-[50px] border border-white/5 group-hover:bg-white/[0.03] transition-all flex flex-col md:flex-row gap-10 md:gap-20 items-start md:items-center">
                 <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block font-bold">{step.tag}</span>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">{step.title}</h3>
                    <p className="text-lg text-white/40 leading-relaxed font-medium max-w-2xl">{step.desc}</p>
                 </div>

                 <div className="grid grid-cols-1 gap-4 w-full md:w-64">
                    {step.details.map((detail, j) => (
                       <div key={j} className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold uppercase tracking-widest text-center whitespace-nowrap">
                          {detail}
                       </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
