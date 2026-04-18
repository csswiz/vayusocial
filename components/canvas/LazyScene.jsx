'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import FakeScene from './FakeScene';

const Scene = dynamic(() => import('./Scene'), { 
  ssr: false,
});

export default function LazyScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMounted) return null;

  return isMobile ? <FakeScene /> : <Scene />;
}
