'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Preload, ScrollControls, useGLTF, Environment, ContactShadows, PerformanceMonitor, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';
import Experience from './Experience';
import Loader from '../ui/Loader';

export default function Scene() {
  const [dpr, setDpr] = useState(1.5);
  const [lowPerformance, setLowPerformance] = useState(false);

  return (
    <>
      <Loader />

      <div className="fixed inset-0 z-0">
        <Canvas
          shadows={{ type: THREE.PCFShadowMap }}
          camera={{ position: [0, 0, 5], fov: 35 }}
          gl={{ 
            antialias: !lowPerformance, 
            alpha: true, 
            stencil: false, 
            depth: true,
            powerPreference: "high-performance"
          }}
          dpr={dpr}
        >
          <PerformanceMonitor 
            onIncline={() => setDpr(2)} 
            onDecline={() => {
              setDpr(1);
              setLowPerformance(true);
            }} 
          />
          <AdaptiveDpr pixelated />
          
          <Suspense fallback={null}>
            <Environment preset="city" />
            <Experience lowPerformance={lowPerformance} />
            <ContactShadows 
              position={[0, -2, 0]} 
              opacity={lowPerformance ? 0.2 : 0.4} 
              scale={20} 
              blur={lowPerformance ? 1.5 : 2.4} 
              far={4.5} 
              resolution={lowPerformance ? 128 : 256}
              frames={lowPerformance ? 1 : Infinity}
            />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
