'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouch);
    
    if (isTouch) return;

    // Apply cursor-none only on desktop
    document.body.style.cursor = 'none';

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
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (isMobile) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center translate-[-50%,-50%]" 
      id="cursor"
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </div>
  );
}
