'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function LightParallax() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized mouse position (-0.5 to 0.5)
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform values for different layers
  const x1 = useTransform(smoothX, (v) => v * -100);
  const y1 = useTransform(smoothY, (v) => v * -100);
  
  const x2 = useTransform(smoothX, (v) => v * -30);
  const y2 = useTransform(smoothY, (v) => v * -30);
  
  const x3 = useTransform(smoothX, (v) => v * -150);
  const y3 = useTransform(smoothY, (v) => v * -150);

  const xGrid = useTransform(smoothX, (v) => v * -10);
  const yGrid = useTransform(smoothY, (v) => v * -10);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
      {/* Layer 0: Static Stars (Farthest) */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Layer 1: Moving Grid (Far) */}
      <motion.div 
        style={{ 
          x: xGrid, 
          y: yGrid,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 59h58V1H1v58z' fill='%23FFD700' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
        className="absolute inset-[-5%] opacity-[0.04]"
      />
      
      {/* Layer 2: Distant Stars/Dots (Slow) */}
      <motion.div 
        style={{ x: x2, y: y2 }}
        className="absolute inset-[-10%] opacity-15"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '150px 150px',
          }}
        />
      </motion.div>

      {/* Layer 3: Middle Floating Blobs (Medium) - Gold/Amber Tones */}
      <motion.div 
        style={{ x: x1, y: y1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[0%] right-[-10%] w-[700px] h-[700px] bg-yellow-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-[120px]" />
        {/* Central Bright Spot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-400/5 rounded-full blur-[150px] rotate-12" />
      </motion.div>

      {/* Layer 4: Occasional Sharp Accents (Fast) - Golden Highlights */}
      <motion.div 
        style={{ x: x3, y: y3 }}
        className="absolute inset-[-20%] opacity-30"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-amber-200/20 to-transparent rotate-[35deg]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-amber-200/20 to-transparent rotate-[35deg]" />
      </motion.div>

      {/* Grain / Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
    </div>
  );
}
