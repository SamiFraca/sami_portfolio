'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useRef, useCallback } from 'react';
import * as THREE from 'three';

type DragState = {
  isDragging: boolean;
  lastX: number;
  rotationY: number;
};

type CharacterModelProps = {
  modelPath: string;
  dragState: React.MutableRefObject<DragState>;
};

function CharacterModel({ modelPath, dragState }: CharacterModelProps) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!modelRef.current) return;

    if (!dragState.current.isDragging) {
      dragState.current.rotationY += 0.003;
    }

    modelRef.current.rotation.y = dragState.current.rotationY;
    modelRef.current.position.y = -1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
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
  const dragState = useRef<DragState>({ isDragging: false, lastX: 0, rotationY: 0 });

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragState.current.isDragging = true;
    dragState.current.lastX = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current.isDragging) return;
    const delta = e.clientX - dragState.current.lastX;
    dragState.current.rotationY += delta * 0.01;
    dragState.current.lastX = e.clientX;
  }, []);

  const onPointerUp = useCallback(() => {
    dragState.current.isDragging = false;
  }, []);

  return (
    <div
      className={`relative cursor-grab active:cursor-grabbing ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        <Suspense fallback={<LoadingFallback />}>
          <CharacterModel modelPath={modelPath} dragState={dragState} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm pointer-events-none">
        Drag to rotate
      </div>
    </div>
  );
}
