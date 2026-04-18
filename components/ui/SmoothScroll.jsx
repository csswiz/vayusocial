'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ 
        lerp: 0.12, // Slightly faster response = less frame accumulation
        duration: 1.2, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        smoothTouch: false, // Touch is already smooth on modern phones, don't double-process
    }}>
      {children}
    </ReactLenis>
  );
}
