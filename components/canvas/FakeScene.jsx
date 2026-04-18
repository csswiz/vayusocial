'use client';

import { useEffect, useState, useMemo } from 'react';

export default function FakeScene({ isExtremeLowEnd }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const percent = (h.scrollTop || b.scrollTop) / (h.scrollHeight - h.clientHeight);
      scrollRef.current = percent;
      setScrollProgress(percent);
    };

    const scrollRef = { current: 0 };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const starCount = isExtremeLowEnd ? 40 : 80;
  const stars = useMemo(() => {
    return [...Array(starCount)].map((_, i) => ({
      left: Math.random() * 100 + '%',
      top: Math.random() * 200 + '%',
      size: Math.random() * 1.5 + 0.5 + 'px',
      opacity: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 150 + 100,
    }));
  }, [starCount]);

  const translateY = scrollProgress * -150;
  const rotation = scrollProgress * 120;

  return (
    <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden pointer-events-none">
      {/* ── Starfield ── */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
              transform: `translateY(${scrollProgress * -star.speed}px)`,
              willChange: 'transform' // GPU acceleration hint
            }}
          />
        ))}
      </div>

      {/* ── Central Glow Atmosphere ── */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isExtremeLowEnd ? 'w-[100vw] h-[100vw]' : 'w-[150vw] h-[150vw]'} bg-radial-gradient from-blue-500/10 to-transparent blur-[100px] opacity-40`} />

      {/* ── 2D Artifact Mockup ── */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[300px] max-h-[300px]"
        style={{
          transform: `translate(-50%, calc(-50% + ${translateY}px)) rotate(${rotation}deg)`,
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/10 blur-[40px]" />
        <div className="absolute inset-0 rounded-full border-[0.5px] border-white/10 rotate-45 opacity-20" />
        
        {/* The Glass Orb - Replaced backdrop-blur with simple transparency for extreme low end */}
        <div className={`absolute inset-[25%] rounded-full border border-white/20 bg-white/5 ${isExtremeLowEnd ? '' : 'backdrop-blur-xl'}`}>
          <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-white/20 rounded-full blur-xl" />
        </div>
      </div>

      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] opacity-40" />
    </div>
  );
}
