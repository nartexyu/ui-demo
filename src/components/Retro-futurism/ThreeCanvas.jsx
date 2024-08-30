import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useAtom } from "jotai";
import { pagesAtom, bookAtom } from "../../atoms/atoms";
import { Book } from "./Book";
import DottedPlane from "./DottedPlane";
import { books } from "./FuturismPages";

const ThreeCanvas = () => {
  const [currentBook] = useAtom(bookAtom);
  const [pages, setPages] = useAtom(pagesAtom);

  useEffect(() => {
    setPages(books[currentBook].pages || []);
  }, [currentBook, setPages]);

  console.log("Pages:", pages); // Log to check if pages are correctly fetched

  return (
    <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
      <group position-y={0}>
        <Suspense fallback={null}>
          <Float
            rotation-x={-Math.PI / 4}
            floatIntensity={1}
            speed={1}
            rotationIntensity={1}
          >
            <Book pages={pages} />
          </Float>
          <OrbitControls />
          <Environment preset="studio" />
          <directionalLight
            position={[2, 5, 2]}
            intensity={0.25}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
          <DottedPlane />
        </Suspense>
      </group>
    </Canvas>
  );
};

export default ThreeCanvas;
