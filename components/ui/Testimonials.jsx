'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    brand: 'VOGUE Luxe',
    text: "Vayu Social completely transformed our online presence. Our engagement shot up by 300% in the first month alone.",
    type: 'text',
    rating: 5
  },
  {
    name: 'Marcus Chen',
    brand: 'LYNX Tech',
    text: "The best SMM agency we've worked with. Their data-driven approach is a game-changer for lead gen.",
    type: 'video',
    rating: 5
  },
  {
    name: 'Feedback',
    brand: 'WhatsApp / Direct',
    text: "Bro the last reel just crossed 1M!! The sales are crazy right now, we need to restock ASAP! 🔥",
    type: 'dm',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-20 py-32 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-24">
          <motion.span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block">08 / SOCIAL PROOF</motion.span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            Trusted by the <br />
            <span className="text-white/30">Industry Leaders.</span>
          </h2>
        </div>

        {/* Logo Scrollbar */}
        <div className="w-full h-24 mb-32 relative overflow-hidden flex items-center">
            <motion.div 
               animate={{ x: [0, -1000] }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="flex gap-20 items-center whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity duration-700 cursor-default"
            >
                {[...Array(3)].map((_, i) => (
                   <img key={i} src="/brand_logos_set_1776490785773.png" alt="Logos" className="h-10 md:h-12 object-contain grayscale brightness-200" />
                ))}
            </motion.div>
            <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`p-10 rounded-[40px] border flex flex-col justify-between h-96 transition-all duration-500 overflow-hidden relative group cursor-default
                ${t.type === 'dm' ? 'bg-green-500/5 border-green-500/20' : 'glass border-white/5'}
              `}
            >
              {t.type === 'dm' && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-green-500/20 rounded-full text-[8px] font-bold text-green-400 uppercase tracking-widest">
                  Verified DM
                </div>
              )}

              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                     <div key={i} className="text-xs text-white">★</div>
                  ))}
                </div>

                {t.type === 'video' ? (
                   <div className="relative aspect-video rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                         <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                      </div>
                      <span className="absolute bottom-4 left-4 text-[8px] uppercase tracking-widest text-white/30">Video Testimonial</span>
                   </div>
                ) : (
                  <p className={`text-xl md:text-2xl font-black italic tracking-tight leading-tight mb-8 ${t.type === 'dm' ? 'text-green-100' : 'text-white'}`}>
                    "{t.text}"
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold ring-1 ring-white/10">
                   {t.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tighter">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">{t.brand}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
