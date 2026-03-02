'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function SimpleCharacter() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.position.y = -0.5 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#ffd4a3" />
      </mesh>
      
      <mesh position={[0, 0.7, 0.2]}>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      <mesh position={[-0.15, 0.7, 0.25]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>
      <mesh position={[0.15, 0.7, 0.25]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>
      
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.25, 0.3, 0.8, 32]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      
      <mesh position={[-0.35, -0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      <mesh position={[0.35, -0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      
      <mesh position={[-0.15, -0.8, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
        <meshStandardMaterial color="#2c2c2c" />
      </mesh>
      <mesh position={[0.15, -0.8, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
        <meshStandardMaterial color="#2c2c2c" />
      </mesh>
      
      <mesh position={[-0.15, -1.15, 0.05]}>
        <boxGeometry args={[0.15, 0.1, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.15, -1.15, 0.05]}>
        <boxGeometry args={[0.15, 0.1, 0.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

type Character3DSimpleProps = {
  className?: string;
};

export default function Character3DSimple({ className = '' }: Character3DSimpleProps) {
  return (
    <div className={`relative ${className}`}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />
        <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.3} penumbra={1} />
        
        <SimpleCharacter />
      </Canvas>
      
    </div>
  );
}
