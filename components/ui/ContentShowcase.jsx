'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const showcaseItems = [
  {
    id: 1,
    title: 'Luxury Streetwear Drop',
    views: '840K',
    likes: '124K',
    engagement: '14.2%',
    type: 'Instagram Reel',
    thumbnail: '/social_reels_previews_1776490252592.png'
  },
  {
    id: 2,
    title: 'AI Product Unboxing',
    views: '1.2M',
    likes: '208K',
    engagement: '18.5%',
    type: 'TikTok',
    thumbnail: '/social_reels_previews_1776490252592.png'
  },
  {
    id: 3,
    title: 'Skincare Aesthetic Night',
    views: '620K',
    likes: '95K',
    engagement: '12.8%',
    type: 'Instagram Reel',
    thumbnail: '/social_reels_previews_1776490252592.png'
  },
  {
    id: 4,
    title: 'Cinematic Transitions',
    views: '2.4M',
    likes: '410K',
    engagement: '21.0%',
    type: 'TikTok / Viral',
    thumbnail: '/social_reels_previews_1776490252592.png'
  }
];

export default function ContentShowcase() {
  const [active, setActive] = useState(null);

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-20 py-32 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">07 / VIRAL SHOWCASE</motion.span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Thumb Stopping <br />
              <span className="text-white/30">Creatives.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/40 leading-relaxed font-medium">
            We don't just post. We engineer virality through data-backed auditory and visual hooks.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[9/16] group cursor-pointer overflow-hidden rounded-[30px] border border-white/10"
              onClick={() => setActive(item)}
            >
              {/* Thumbnail with slight zoom effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 blur-[1px] group-hover:blur-0"
                style={{ backgroundImage: `url(${item.thumbnail})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>

              {/* Metrics */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <div className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-2">{item.type}</div>
                <h3 className="text-xl font-black tracking-tighter mb-4 text-white uppercase">{item.title}</h3>
                
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-white/30">Views</div>
                    <div className="text-sm font-bold">{item.views}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-white/30">Eng %</div>
                    <div className="text-sm font-bold text-green-400">{item.engagement}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setActive(null)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-[400px] aspect-[9/16] rounded-[40px] overflow-hidden border border-white/10 bg-black shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${active.thumbnail})` }}
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                 <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Video Environment Active</p>
              </div>
              
              <button 
                onClick={() => setActive(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition-transform"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
