'use client';

import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import Model from './Model';

// Section sequence configuration for precise 3D mapping
const SECTIONS = [
  { id: 'hero', x: 0, z: 0, s: 1.3 },
  { id: 'impact', x: -2, z: 1, s: 1.5 },
  { id: 'story', x: 3, z: 0.5, s: 1.2 },
  { id: 'live', x: -2.5, z: -1, s: 0.8 },
  { id: 'cases', x: 3, z: -1.5, s: 0.7 },
  { id: 'work', x: -3, z: -1.2, s: 1.3 },
  { id: 'showcase', x: 2.5, z: 0.5, s: 0.9 },
  { id: 'trust', x: -2.5, z: -1, s: 1.1 },
  { id: 'awards', x: 3, z: 0.5, s: 0.9 },
  { id: 'services', x: -2.2, z: -0.5, s: 1.2 },
  { id: 'tech', x: 3.5, z: -0.5, s: 1.2 },
  { id: 'process', x: -2.5, z: 1.5, s: 1.1 },
  { id: 'pricing', x: 0, z: -3.5, s: 2.8 },
  { id: 'insights', x: 2, z: 0.8, s: 1.0 },
  { id: 'audit', x: -2.8, z: -1, s: 1.4 },
  { id: 'cta', x: 0, z: 1.5, s: 0.8 }, // ID-less banner, but we map the space
  { id: 'team', x: 2, z: 1.2, s: 0.8 },
  { id: 'contact', x: 0, z: 0, s: 1.8 }
];

export default function Experience() {
  const group = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const percent = (h.scrollTop || b.scrollTop) / (h.scrollHeight - h.clientHeight);
      setScrollProgress(percent);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame((state) => {
    const t = scrollProgress; 
    const tripDistance = 32; // Expanded for 18 sections

    // ── Camera movement ────────────────────────────────────────────────────────
    const targetCameraX = Math.sin(t * Math.PI) * 3.5 + mouse.current.x * 0.4;
    const targetCameraY = -t * tripDistance + mouse.current.y * 0.4;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCameraX, 0.03);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCameraY, 0.03);
    state.camera.lookAt(0, -t * tripDistance, 0);

    if (!group.current) return;

    // ── Rotation ──────────────────────────────────────────────────────────────
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, t * Math.PI * 30, 0.03);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.sin(t * Math.PI) * 2.5, 0.03);

    // ── Position & Scale mapping ──────────────────────────────────────────────
    const sectionIndex = Math.min(Math.floor(t * SECTIONS.length), SECTIONS.length - 1);
    const section = SECTIONS[sectionIndex];

    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, section.x, 0.03);
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, section.z, 0.03);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -t * tripDistance, 0.03);
    group.current.scale.setScalar(THREE.MathUtils.lerp(group.current.scale.x, section.s, 0.03));
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <spotLight position={[8, 10, 8]} angle={0.2} penumbra={1} intensity={60} castShadow />
      <pointLight position={[-8, -8, -8]} intensity={15} color="#3b82f6" />
      <pointLight position={[8, -4, 4]} intensity={10} color="#8b5cf6" />

      <group ref={group}>
        <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
          <Model />
        </Float>
      </group>

      <Stars />
    </>
  );
}

function Stars() {
  const count = 8000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 450; // Increased range
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return pos;
  }, []);

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
