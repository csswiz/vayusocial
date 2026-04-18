'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Preload, ScrollControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import Experience from './Experience';
import Loader from '../ui/Loader';

export default function Scene() {
  return (
    <>
      <Loader />

      <div className="fixed inset-0 z-0">
        <Canvas
          shadows={{ type: THREE.PCFShadowMap }}
          camera={{ position: [0, 0, 5], fov: 35 }}
          gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <Environment preset="city" />
            <Experience />
            <ContactShadows 
              position={[0, -2, 0]} 
              opacity={0.4} 
              scale={20} 
              blur={2.4} 
              far={4.5} 
            />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
