// DottedPlane.js
import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DottedPlane = () => {
    const planeRef = useRef();
    const { scene } = useThree();
    const dots = useRef([]);

  useEffect(() => {
    if (planeRef.current) {
      const vertices = planeRef.current.geometry.attributes.position.array;
      const tempDots = [];

      for (let i = 0; i < vertices.length; i += 3) {
        const [x, y, z] = [vertices[i], vertices[i + 1], vertices[i + 2]];
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.008, 8, 8), // Adjusted sphere size
          new THREE.MeshBasicMaterial({ color: '#1f2937' })
        );
        dot.position.set(x, z - 0.5, -y); // Adjusted position to match plane rotation
        scene.add(dot);
        tempDots.push(dot);
      }

      dots.current = tempDots;
    }
  }, [scene]);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        const planePosition = planeRef.current.position;
        const waveSpeed = 0.5; // Adjust this value to slow down or speed up the wave
        const waveHeight = 0.1; // Adjust this value to increase or decrease the wave height

        dots.current.forEach((dot, index) => {
        const i = index % 50; // assuming widthSegments is 50
        const j = Math.floor(index / 50); // assuming heightSegments is 50
        dot.position.y = planePosition.y + Math.sin(i / 5 + elapsedTime * waveSpeed) * waveHeight + Math.cos(j / 5 + elapsedTime * waveSpeed) * waveHeight;
        dot.position.x = planePosition.x + dot.position.x;
        dot.position.z = planePosition.z + dot.position.z;
        });
    });

  return (
    <mesh ref={planeRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshStandardMaterial transparent opacity={0}/>
    </mesh>
  );
};

export default DottedPlane;
