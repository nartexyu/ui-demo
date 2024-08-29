import React, { useState, useEffect, Suspense } from "react";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Book } from '../components/Retro-futurism/Book';
import DottedPlane from "../components/Retro-futurism/DottedPlane";
import { useAtom } from "jotai";
import { books, bookAtom } from "../components/Retro-futurism/FuturismPages";

const RetroFuturism = () => {
  const [currentBook, setCurrentBook] = useAtom(bookAtom);
  const [pages, setPages] = useState(books[currentBook].pages);

  useEffect(() => {
    setPages(books[currentBook].pages);
  }, [currentBook]);

  const handlePageClick = (index) => {
    setCurrentBook(index);
  };

  return (
    <div className="relative w-screen h-screen bg-gray-200 font-mono">
      {/* Pagination */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
        {books.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer ${index === currentBook ? "bg-transparent" : ""}`}
            onClick={() => handlePageClick(index)}
          >
            {index === currentBook && (
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            )}
          </div>
        ))}
      </div>

      <div className="fixed w-full inset-0 flex items-center select-none z-10 pointer-events-none drop-shadow-md">
        <div className="w-full">
          <div className="bg-transparent flex flex-col items-start w-max h-max absolute left-8 bottom-8">
            <h2 className="relative text-white text-8xl italic font-light">
              {books[currentBook].title}
            </h2>
            <h1 className="flex text-white text-8xl font-black left-8">
              <span>Volume {currentBook + 1}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Three.js Canvas Placeholder */}
      <div className="w-full h-full flex items-center justify-center">
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
      </div>

      {/* Contact Button */}
      <div className="absolute bottom-8 right-8">
        <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-200 hover:ring-0 hover:ring-white hover:ring-offset-2 transition duration-200 ease-in-out hover:drop-shadow-lg hover:text-black">
          Book a Session
        </button>
      </div>
    </div>
  );
};

export default RetroFuturism;
