'use client';

import { useEffect, useState, useMemo } from 'react';

export default function FakeScene() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const percent = (h.scrollTop || b.scrollTop) / (h.scrollHeight - h.clientHeight);
      setScrollProgress(percent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate a set of static stars once
  const stars = useMemo(() => {
    return [...Array(80)].map((_, i) => ({
      left: Math.random() * 100 + '%',
      top: Math.random() * 200 + '%',
      size: Math.random() * 1.5 + 0.5 + 'px',
      opacity: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 150 + 100,
    }));
  }, []);

  // Simulate movement
  const translateY = scrollProgress * -150;
  const rotation = scrollProgress * 120; // Slower, more elegant rotation

  return (
    <div className="fixed inset-0 z-0 bg-[#050505] overflow-hidden pointer-events-none">
      {/* ── Premium Starfield Simulation ────────────────────────────────── */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full shadow-[0_0_2px_rgba(255,255,255,0.8)]"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
              transform: `translateY(${scrollProgress * -star.speed}px)`,
            }}
          />
        ))}
      </div>

      {/* ── Central Glow Atmosphere ──────────────────────────────────────── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-radial-gradient from-blue-500/5 via-purple-500/5 to-transparent blur-[150px] opacity-40" />

      {/* ── Fake 3D Artifact ────────────────────────────────────────────── */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[350px] max-h-[350px]"
        style={{
          transform: `translate(-50%, calc(-50% + ${translateY}px)) rotate(${rotation}deg)`,
          transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)', // Smooth lerp-like feeling
        }}
      >
        {/* Core Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-blue-500/20 to-purple-500/10 blur-[60px]" />
        
        {/* Abstract "Torus" rings */}
        <div className="absolute inset-0 rounded-full border-[0.5px] border-white/20 rotate-45 skew-x-12 opacity-40" />
        <div className="absolute inset-4 rounded-full border-[1.5px] border-white/10 -rotate-12 skew-y-6 opacity-30" />
        
        {/* The Glass Orb */}
        <div className="absolute inset-[25%] rounded-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]">
          {/* Internal Refraction Glows */}
          <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-white/30 rounded-full blur-xl" />
          <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-2xl" />
        </div>
      </div>

      {/* ── Edge Vignette ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}
