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
    const cursorDot = document.getElementById('cursor-dot');

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: 'power4.out',
      });
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };
    
    const handleHover = () => {
      gsap.to(cursor, { scale: 2.5, backgroundColor: 'rgba(255,215,0,0.1)', borderColor: 'rgba(255,215,0,0.3)', duration: 0.3 });
      gsap.to(cursorDot, { scale: 0, duration: 0.3 });
    };
    
    const handleUnhover = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255,255,255,0.2)', duration: 0.3 });
      gsap.to(cursorDot, { scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);
    
    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.style.cursor = 'auto';
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-colors duration-300" 
        id="cursor"
      />
      <div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-amber-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" 
        id="cursor-dot"
      />
    </>
  );
}
