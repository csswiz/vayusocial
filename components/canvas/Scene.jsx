'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Preload, ScrollControls, useGLTF, Environment, ContactShadows, PerformanceMonitor, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import * as THREE from 'three';
import Experience from './Experience';
import Loader from '../ui/Loader';

export default function Scene({ onFallback }) {
  const [tier, setTier] = useState(2); // 0: Low, 1: Medium, 2: High
  const [failureCount, setFailureCount] = useState(0);

  const handleDecline = () => {
    if (tier === 0) {
      setFailureCount(prev => {
        const next = prev + 1;
        if (next >= 2) {
          // If we fail twice at Tier 0, it's a lost cause
          onFallback && onFallback();
        }
        return next;
      });
    } else {
      setTier(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <>
      <Loader />

      <div className="fixed inset-0 z-0 bg-[#050505]">
        <Canvas
          shadows={tier > 0 ? { type: THREE.PCFShadowMap } : false}
          camera={{ position: [0, 0, 5], fov: 35 }}
          gl={{ 
            antialias: tier > 1, 
            alpha: true, 
            stencil: false, 
            depth: true,
            powerPreference: "high-performance",
            precision: tier > 0 ? "highp" : "mediump"
          }}
          dpr={tier === 2 ? 1.5 : tier === 1 ? 1 : 0.65} // Even lower DPR for Tier 0
        >
          <PerformanceMonitor 
            onIncline={() => setTier(prev => Math.min(prev + 1, 2))} 
            onDecline={handleDecline} 
          />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          
          <Suspense fallback={null}>
            {tier > 0 && <Environment preset="city" />}
            <Experience tier={tier} />
            <ContactShadows 
              position={[0, -2, 0]} 
              opacity={tier === 0 ? 0.05 : 0.4} 
              scale={20} 
              blur={tier === 0 ? 0.5 : 2.4} 
              far={4.5} 
              resolution={tier === 2 ? 256 : 64}
              frames={tier === 0 ? 1 : Infinity}
            />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
