import React from "react";
import { Canvas } from "@react-three/fiber";

const Example = () => {
  return (
    <Canvas>
      <mesh rotation-y={Math.PI * 0.28} position={[0, 0, 0]} scale={1.5}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="mediumpurple" wireframe />
      </mesh>
    </Canvas>
  );
};

export default Example;
