'use client';

import { useGLTF, MeshTransmissionMaterial, Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Model({ lowPerformance }) {
  const mesh = useRef();
  const group = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.cos(time / 4) * 0.2;
      mesh.current.rotation.y = Math.sin(time / 2) * 0.2;
    }
    if (group.current) {
      group.current.rotation.z = Math.sin(time / 8) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* ── Optimized Glass Artifact ─────────────────────────────────────── */}
      <mesh ref={mesh} scale={1.4} castShadow={!lowPerformance} receiveShadow={!lowPerformance}>
        <torusKnotGeometry args={[1, 0.35, lowPerformance ? 64 : 128, lowPerformance ? 16 : 32]} />
        <MeshTransmissionMaterial
          backside={false}
          samples={lowPerformance ? 2 : 4}
          resolution={lowPerformance ? 64 : 128}
          thickness={0.15}
          roughness={0.1}
          anisotropy={0}
          chromaticAberration={0.02}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.05}
          clearcoat={0.5}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
          color="#ffffff"
          transparent
          opacity={0.4}
        />
      </mesh>
      
      {/* ── Subtler Core ─────────────────────────────────────────────────── */}
      {!lowPerformance && (
        <mesh scale={0.7}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.02} />
        </mesh>
      )}

      {/* ── Subtler Wireframe ─────────────────────────────────────────────── */}
      <mesh scale={1.41}>
        <torusKnotGeometry args={[1, 0.35, lowPerformance ? 32 : 64, lowPerformance ? 8 : 12]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.01} />
      </mesh>
      
      {/* ── Orbital Rings ─────────────────────────────────────────────────── */}
      <group rotation={[Math.PI / 4, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.001, 8, 64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
        </mesh>
      </group>
    </group>
  );
}
