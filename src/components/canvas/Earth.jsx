import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Constants for camera controls
const MAX_POLAR_ANGLE = Math.PI / 2;
const MIN_POLAR_ANGLE = Math.PI / 2;

// Earth model component
const EarthModel = () => {
  const earth = useGLTF("/3D-portfolio/planet/scene.gltf");
  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

// Camera controls component
const CameraControls = () => (
  <OrbitControls
    autoRotate
    enableZoom={false}
    maxPolarAngle={MAX_POLAR_ANGLE}
    minPolarAngle={MIN_POLAR_ANGLE}
  />
);

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <CameraControls />
        <EarthModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
