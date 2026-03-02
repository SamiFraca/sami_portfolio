'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

type CharacterModelProps = {
  modelPath: string;
};

function CharacterModel({ modelPath }: CharacterModelProps) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      modelRef.current.position.y = -1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });
  
  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={1} 
      position={[0, -10, 2.5]}
    />
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="#007BFF" />
    </mesh>
  );
}

type Character3DProps = {
  modelPath: string;
  className?: string;
};

export default function Character3D({ modelPath, className = '' }: Character3DProps) {
  return (
    <div className={`relative ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <Suspense fallback={<LoadingFallback />}>
          <CharacterModel modelPath={modelPath} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
