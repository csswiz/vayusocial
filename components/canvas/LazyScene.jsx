'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import FakeScene from './FakeScene';

const Scene = dynamic(() => import('./Scene'), { 
  ssr: false,
});

export default function LazyScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [showFake, setShowFake] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      // Force fake for very old hardware via basic UA sniffing if needed
      const ua = navigator.userAgent.toLowerCase();
      const isVeryOld = ua.includes('windows nt 6.1') || ua.includes('windows nt 5.1'); // Win 7 or XP
      setIsMobile(window.innerWidth < 768 || isVeryOld);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMounted) return null;

  if (isMobile || showFake) {
    return <FakeScene isExtremeLowEnd={showFake} />;
  }

  return <Scene onFallback={() => setShowFake(true)} />;
}
