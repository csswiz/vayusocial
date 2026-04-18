'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
  { 
    title: 'Social Media Management', 
    icon: '📱',
    deliverables: ['Daily Community Engagement', '30 Posts / Month', 'Comment Management', 'Profile Optimization'],
    tools: ['Meta Business Suite', 'Buffer', 'Canva Pro'],
    timeline: 'Ongoing / Monthly',
    outcome: 'Sustainable Community Growth & Brand Trust'
  },
  { 
    title: 'Content & Strategy', 
    icon: '🎨',
    deliverables: ['Viral-Engineered Scripting', 'High-End Video Editing', 'Product Photography', 'Content Calendars'],
    tools: ['Adobe Premiere', 'Davinci Resolve', 'AI Hook Generators'],
    timeline: '14-Day Production Sprints',
    outcome: 'Viral Reach & Thumb-Stopping Visual Identity'
  },
  { 
    title: 'Performance Marketing', 
    icon: '🚀',
    deliverables: ['Paid Social Strategy', 'Creative A/B Testing', 'Retargeting Funnels', 'Pixel Setup'],
    tools: ['Meta Ads Manager', 'TikTok Ads', 'Google Ads'],
    timeline: 'Weekly Performance Tuning',
    outcome: 'Guaranteed ROI & Minimum 4x ROAS Scale'
  },
  { 
    title: 'Influencer Campaigns', 
    icon: '🤝',
    deliverables: ['Creator Sourcing', 'Gift Management', 'Content Governance', 'UGC Content Rights'],
    tools: ['Modash', 'GRIN', 'In-House CRM'],
    timeline: '30-Day Campaign Cycles',
    outcome: 'Social Proof & Authentic Conversion'
  },
  { 
    title: 'Brand Identity', 
    icon: '✨',
    deliverables: ['Visual DNA Manual', 'Logo Architecture', 'Brand Color Palette', 'Typography Systems'],
    tools: ['Figma', 'Illustrator', 'MidJourney / AI'],
    timeline: '21-Day Design Sprint',
    outcome: 'Unmistakable & Premium Brand Presence'
  },
  { 
    title: 'Analytics & Reporting', 
    icon: '📊',
    deliverables: ['In-Depth Metric Audits', 'Competitor Analysis', 'Actionable Pivot Lists', 'Weekly Dashboards'],
    tools: ['Supermetrics', 'Looker Studio', 'GA4'],
    timeline: 'Real-Time / Weekly',
    outcome: 'Data-Driven Scalability & Risk Mitigation'
  },
];

export default function ExperienceSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32">
      <div className="max-w-7xl w-full">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block"
        >
          02 / OUR ARSENAL
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-6xl font-black tracking-tighter mb-20 uppercase"
        >
          Grow with <span className="text-white/30">Precision.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.03)' }}
              onClick={() => setSelected(service)}
              className="glass p-10 rounded-[40px] border border-white/5 transition-all duration-500 cursor-pointer group"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-black mb-4 leading-tight uppercase tracking-tight">{service.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed transition-colors group-hover:text-white/60 mb-8">
                Detailed strategies engineered for virality and sustainable reach.
              </p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/20 group-hover:text-white transition-colors">
                View Details →
              </div>
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
            className="fixed inset-0 z-[3000] flex items-center justify-center p-6 md:p-10"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setSelected(null)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[60px] overflow-hidden p-8 md:p-16 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-10 right-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-6 mb-12">
                 <div className="text-6xl">{selected.icon}</div>
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">{selected.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 font-bold">Deliverables</h4>
                  <ul className="space-y-4">
                    {selected.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-4 text-base font-medium text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-12">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 font-bold">Tools & Tech</h4>
                    <div className="flex flex-wrap gap-3">
                       {selected.tools.map((t, i) => (
                         <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/50">{t}</span>
                       ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="p-8 rounded-[40px] bg-white/[0.03] border border-white/5">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold">Execution Timeline</h4>
                    <p className="text-xl font-bold italic">{selected.timeline}</p>
                  </div>
                  <div className="p-8 rounded-[40px] border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold">Primary Outcome</h4>
                    <p className="text-xl font-bold uppercase tracking-tighter">{selected.outcome}</p>
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
