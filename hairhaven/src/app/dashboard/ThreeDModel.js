import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function ThreeDModel({ modelPath }) {
  const model = useLoader(GLTFLoader, modelPath);

  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <primitive object={model.scene} scale={1.5} />
      <OrbitControls />
      <Environment preset="sunset" />
    </Canvas>
  );
}
