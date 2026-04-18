'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Preload, ScrollControls, useGLTF, Environment, ContactShadows, PerformanceMonitor, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import * as THREE from 'three';
import Experience from './Experience';
import Loader from '../ui/Loader';

export default function Scene() {
  const [tier, setTier] = useState(2); // 0: Low, 1: Medium, 2: High

  return (
    <>
      <Loader />

      <div className="fixed inset-0 z-0">
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
          dpr={tier === 2 ? 1.5 : tier === 1 ? 1 : 0.75}
        >
          <PerformanceMonitor 
            onIncline={() => setTier(prev => Math.min(prev + 1, 2))} 
            onDecline={() => setTier(prev => Math.max(prev - 1, 0))} 
          />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          
          <Suspense fallback={null}>
            <Environment preset={tier > 0 ? "city" : "night"} />
            <Experience tier={tier} />
            <ContactShadows 
              position={[0, -2, 0]} 
              opacity={tier === 0 ? 0.1 : 0.4} 
              scale={20} 
              blur={tier === 0 ? 1 : 2.4} 
              far={4.5} 
              resolution={tier === 2 ? 256 : 128}
              frames={tier === 0 ? 1 : Infinity}
            />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
