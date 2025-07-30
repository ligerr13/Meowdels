import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GLTFModelWrapper({ gltfScene, scale = 1, position = [0, 0, 0], autoRotate = true, ...props }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const rotation_speed = 0.5;

  React.useEffect(() => {
    if (gltfScene && meshRef.current) {
      const box = new THREE.Box3().setFromObject(gltfScene);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      gltfScene.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const desiredMaxDim = 2;
      const factor = desiredMaxDim / maxDim;

      gltfScene.scale.set(factor, factor, factor);
    }

    return () => {
      if (gltfScene) {
        gltfScene.traverse((child) => {
          if (child.isMesh) {
            if (child.geometry) {
              child.geometry.dispose();
            }
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(material => material.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
      }
    };

  }, [gltfScene]);

  useFrame((state, delta) => {
    if (meshRef.current && autoRotate && !hovered) {
      meshRef.current.rotation.x += rotation_speed * delta;
      meshRef.current.rotation.y += rotation_speed * delta;
    }
  });

  if (!gltfScene) {
    return null;
  }

  return (
    <group
      ref={meshRef}
      position={position}
      scale={scale}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
      {...props}
      dispose={null}
    >
      <primitive object={gltfScene} />
    </group>
  );
}

export default GLTFModelWrapper;