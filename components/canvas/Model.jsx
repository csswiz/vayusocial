'use client';

import { useGLTF, MeshTransmissionMaterial, Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Model({ tier }) {
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

  // Performance-based geometry settings
  const segments = tier === 2 ? 128 : tier === 1 ? 64 : 32;
  const radialSegments = tier === 2 ? 32 : tier === 1 ? 16 : 8;

  const materialProps = {
    thickness: 0.15,
    roughness: 0.1,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: false,
  };

  return (
    <group ref={group}>
      {/* ── Optimized Glass Artifact ─────────────────────────────────────── */}
      <mesh ref={mesh} scale={1.4} castShadow={tier === 2} receiveShadow={tier === 2}>
        <torusKnotGeometry args={[1, 0.35, segments, radialSegments]} />
        {tier > 0 ? (
          <MeshTransmissionMaterial
            {...materialProps}
            samples={tier === 2 ? 4 : 2}
            resolution={tier === 2 ? 128 : 64}
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
        ) : (
          <meshPhysicalMaterial 
            {...materialProps}
            transparent
            opacity={0.3}
            color="#ffffff"
          />
        )}
      </mesh>
      
      {/* ── Subtler Core ─────────────────────────────────────────────────── */}
      {tier === 2 && (
        <mesh scale={0.7}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.02} />
        </mesh>
      )}

      {/* ── Subtler Wireframe ─────────────────────────────────────────────── */}
      {tier > 0 && (
        <mesh scale={1.41}>
          <torusKnotGeometry args={[1, 0.35, tier === 2 ? 64 : 32, tier === 2 ? 12 : 8]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.01} />
        </mesh>
      )}
      
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
