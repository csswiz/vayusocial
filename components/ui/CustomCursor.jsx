'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center" 
      id="cursor"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </div>
  );
}
