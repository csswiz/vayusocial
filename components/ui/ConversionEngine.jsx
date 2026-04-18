'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ConversionEngine() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setShowExitIntent(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <>
      {/* Sticky Book a Call Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[1000] pointer-events-auto"
      >
        <a 
          href="#audit" 
          className="group relative flex items-center justify-center p-1"
        >
          <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
          <div className="bg-white text-black px-6 py-4 md:px-8 md:py-5 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3 md:gap-4 shadow-2xl transition-all group-hover:bg-neutral-100">
             Book A Call
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          </div>
        </a>
      </motion.div>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5000] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setShowExitIntent(false)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="relative w-full max-w-xl glass p-12 md:p-16 rounded-[60px] border border-white/10 text-center"
            >
              <button 
                onClick={() => setShowExitIntent(false)}
                className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors"
              >
                ✕
              </button>

              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 block font-bold">WAIT — DON'T LEAVE YOUR GROWTH TO LUCK</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                Get the Viral <br />
                <span className="text-white/30">Blueprint.</span>
              </h2>
              <p className="text-white/40 text-sm mb-12 leading-relaxed">
                Before you go, download our internal 2026 Growth Blueprint used to scale brands past 1M+ views.
              </p>
              
              <div className="space-y-4">
                 <a 
                   href="#audit" 
                   onClick={() => setShowExitIntent(false)}
                   className="block w-full py-6 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-neutral-200 transition-all shadow-xl"
                 >
                   Download Blueprint & Book Call →
                 </a>
                 <button 
                    onClick={() => setShowExitIntent(false)}
                    className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors py-2"
                 >
                   No thanks, I'll figure it out myself
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
