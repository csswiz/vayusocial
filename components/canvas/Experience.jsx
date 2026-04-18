'use client';

import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import Model from './Model';

export default function Experience({ tier }) {
  const group = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();

    // ── Camera movement (Subtle parralax) ──────────────────────────────────
    const targetCameraX = mouse.current.x * 0.5;
    const targetCameraY = mouse.current.y * 0.5;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCameraX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCameraY, 0.05);
    state.camera.lookAt(0, 0, 0);

    // ── Group Floating ───────────────────────────────────────────────────
    group.current.rotation.y = t * 0.1;
    group.current.position.y = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <>
      <ambientLight intensity={tier > 0 ? 0.25 : 0.5} />
      <spotLight 
        position={[8, 10, 8]} 
        angle={0.2} 
        penumbra={1} 
        intensity={tier === 2 ? 80 : 40} 
        castShadow={tier === 2} 
      />
      {tier > 0 && (
        <>
          <pointLight position={[-8, -8, -8]} intensity={tier === 2 ? 15 : 8} color="#3b82f6" />
          <pointLight position={[8, -4, 4]} intensity={tier === 2 ? 10 : 5} color="#8b5cf6" />
        </>
      )}

      <group ref={group} scale={1.3}>
        <Float speed={tier === 2 ? 2 : 1} rotationIntensity={0.8} floatIntensity={1}>
          <Model tier={tier} />
        </Float>
      </group>

      <Stars count={tier === 2 ? 4000 : tier === 1 ? 2000 : 800} />
    </>
  );
}
function Stars({ count }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 450;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return pos;
  }, [count]);

  const ref = useRef();
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0003;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.012} color="#ffffff" transparent opacity={0.15} sizeAttenuation />
    </points>
  );
}
