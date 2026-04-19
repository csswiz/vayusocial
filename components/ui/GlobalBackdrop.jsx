'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Particle = ({ i }) => {
  const size = Math.random() * 2 + 0.5;
  const duration = Math.random() * 25 + 15;
  const delay = Math.random() * -20;
  const xStart = Math.random() * 100;
  const xEnd = xStart + (Math.random() - 0.5) * 20;
  
  return (
    <motion.div
      initial={{ 
        x: xStart + 'vw', 
        y: '110vh',
        opacity: 0 
      }}
      animate={{ 
        y: '-10vh',
        x: xEnd + 'vw',
        opacity: [0, 0.4, 0.4, 0],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay,
        ease: "linear" 
      }}
      className="absolute bg-white/30 rounded-full blur-[0.5px]"
      style={{ width: size, height: size }}
    />
  );
};

const Meteor = ({ i }) => {
  const delay = Math.random() * 20;
  const duration = Math.random() * 1.5 + 0.5;
  const top = (Math.random() * 40) + '%';
  const left = (Math.random() * 100) + '%';

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, width: 0 }}
      animate={{ 
        x: [0, -400], 
        y: [0, 400], 
        opacity: [0, 1, 0.5, 0],
        width: [0, 200, 100, 0]
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay, 
        repeatDelay: Math.random() * 12 + 5
      }}
      className="absolute h-[1.5px] bg-gradient-to-l from-amber-300 via-white to-transparent rotate-[45deg] z-0 blur-[0.5px]"
      style={{ top, left }}
    />
  );
};

const FloatingInfo = ({ i }) => {
  const duration = Math.random() * 8 + 12;
  const delay = Math.random() * -15;
  const top = Math.random() * 90 + '%';
  const left = Math.random() * 90 + '%';
  const text = ["ID_772", "PING: 8ms", "NET_CORE_UP", "AUTH_TOK: OK", "V_SOCIAL_SYNC", "PACKET: 2048", "LOAD: 14%"][i % 7];

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: [-40, 40, -40],
        opacity: [0, 0.3, 0.6, 0.3, 0]
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay, 
        ease: "easeInOut" 
      }}
      className="absolute font-mono text-[7px] tracking-[0.2em] text-amber-200/50 border border-white/5 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-md"
      style={{ top, left }}
    >
      {text}
    </motion.div>
  );
};

const GlowingLine = ({ i }) => {
    const isHorizontal = i % 2 === 0;
    const pos = Math.random() * 100 + '%';
    const delay = Math.random() * 10;
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay, repeatDelay: Math.random() * 10 }}
            className={`absolute ${isHorizontal ? 'w-full h-[0.5px]' : 'h-full w-[0.5px]'} bg-amber-400/30 blur-[1px]`}
            style={{ [isHorizontal ? 'top' : 'left']: pos }}
        />
    )
}

export default function GlobalBackdrop() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030712]">
      {/* ── Base Blueish Glow Layer ────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#030712] to-[#0f172a]" />
      
      {/* Atmospheric Nebula - More Vibrant */}
      <div className="absolute top-[-10%] left-[-5%] w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-[180px] opacity-40 animate-pulse" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[100%] h-[100%] bg-indigo-500/10 rounded-full blur-[160px] opacity-30" />
      
      {/* ── Glowing Golden Grid ───────────────────────────────────── */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 120H0V0h120v120zM1 119h118V1H1v118z' fill='%23FFD700' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }} 
      />

      {/* ── Dynamic Elements (Client-Only to avoid hydration mismatch) ── */}
      {mounted && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => <GlowingLine key={i} i={i} />)}
          {[...Array(50)].map((_, i) => <Particle key={i} i={i} />)}
          {[...Array(5)].map((_, i) => <Meteor key={i} i={i} />)}
          {[...Array(15)].map((_, i) => <FloatingInfo key={i} i={i} />)}
        </div>
      )}

      {/* ── Corner Glows ──────────────────────────────────────────── */}
      <div className="absolute top-1/4 right-[5%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[120px]" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
    </div>
  );
}
