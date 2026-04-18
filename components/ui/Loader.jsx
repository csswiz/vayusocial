'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Animate a fake-but-beautiful progress bar over ~1.5 s,
    // then dismiss. This avoids being stuck at 0% when no
    // external assets are loaded (built-in Three.js geometries
    // don't trigger useProgress).
    let start = null;
    const DURATION = 1400; // ms

    const tick = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(elapsed / DURATION, 1);
      // Ease-out-expo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        // Small pause so "100%" is visible, then fade out
        setTimeout(() => setShow(false), 300);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-lg font-bold tracking-tighter text-white select-none"
          >
            VAYU<span className="text-white/25">SOCIAL</span>
          </motion.div>

          {/* Progress bar */}
          <div className="relative w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear', duration: 0.05 }}
              style={{ boxShadow: '0 0 12px rgba(255,255,255,0.5)' }}
            />
          </div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[10px] font-mono tracking-[0.3em] uppercase text-white/30"
          >
            Initializing Experience&hellip;&nbsp;{progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
