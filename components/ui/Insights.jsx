'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'The 3-Second Rule: Mastering Viral Hooks',
    category: 'Creatives',
    preview: 'Why the first 3 seconds of your Reel decide your retention rate and how to fix it.',
    content: 'Full article on auditory and visual hooks. Learn the pattern-interrupt strategy used by top creators.',
    thumbnail: '/blog_insight_thumbnails_1776492368335.png'
  },
  {
    id: 2,
    title: 'Algorithm Warfare: Meta vs TikTok in 2026',
    category: 'Strategy',
    preview: 'Decoding the latest ranking signals for the absolute best organic reach.',
    content: 'A deep dive into cross-platform content distribution and SEO-optimized captions.',
    thumbnail: '/blog_insight_thumbnails_1776492368335.png'
  },
  {
    id: 3,
    title: 'Scalable Ads: From $100 to $10,000/Day',
    category: 'Paid Social',
    preview: 'A step-by-step framework for horizontal and vertical ad scaling without killing ROAS.',
    content: 'Learn how we manage high-budget campaigns and use AI to optimize creative spend.',
    thumbnail: '/blog_insight_thumbnails_1776492368335.png'
  },
  {
    id: 4,
    title: 'Minimalist Content: Why Less is More',
    category: 'Aesthetic',
    preview: 'How "Ugly" content is outperforming high-production videos for Gen Z brands.',
    content: 'The shift from cinematic to authentic. Why raw, BTS-style content converts higher.',
    thumbnail: '/blog_insight_thumbnails_1776492368335.png'
  }
];

export default function Insights() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 relative">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">11 / KNOWLEDGE HUB</motion.span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Strategic <br />
              <span className="text-white/30">Insights.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/40 leading-relaxed font-medium">
            Internal playbooks and trend breakdowns from our growth laboratory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelected(article)}
              className="glass rounded-[30px] overflow-hidden border border-white/5 cursor-pointer group"
            >
              <div 
                className="aspect-video bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${article.thumbnail})` }}
              />
              <div className="p-8">
                <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold mb-4 block underline decoration-white/10 underline-offset-4">{article.category}</span>
                <h3 className="text-xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-white transition-colors">{article.title}</h3>
                <p className="text-[11px] text-white/40 leading-relaxed line-clamp-2">{article.preview}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[4000] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={() => setSelected(null)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-[60px] overflow-hidden p-8 md:p-16 max-h-[80vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-10 right-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                ✕
              </button>

              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block font-bold">{selected.category}</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-12">{selected.title}</h2>
              
              <div 
                className="aspect-video w-full rounded-[40px] mb-12 bg-cover bg-center border border-white/10"
                style={{ backgroundImage: `url(${selected.thumbnail})` }}
              />

              <p className="text-xl text-white/80 leading-relaxed font-medium mb-8">
                {selected.preview}
              </p>
              
              <div className="h-px w-full bg-white/5 mb-8" />
              
              <p className="text-lg text-white/40 leading-relaxed">
                {selected.content}
              </p>
              
              <div className="mt-16 text-center">
                 <p className="text-[10px] uppercase tracking-widest text-white/20 mb-8 font-bold italic">Want the full playbook applied to your brand?</p>
                 <a href="#audit" className="px-10 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-neutral-200 transition-all">Claim Free Strategy Call</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
