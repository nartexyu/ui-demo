import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useAtom } from "jotai";
import { themeAtom, isMenuOpenAtom } from "../../atoms/atoms";

const NbHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  const [, setTheme] = useAtom(themeAtom);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuItemsRef.current, {
        x: 0,
        stagger: -0.3,
        duration: 0,
      });
    } else {
      gsap.to(menuItemsRef.current, {
        x: "100%",
        duration: 0,
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${isMenuOpen ? "" : "overflow-hidden"}`}>
      {/* Mobile Header */}
      <div className="bg-white text-black border-black p-4 lg:hidden relative z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">UI DEMO</h1>
          <button onClick={toggleMenu} className="focus:outline-none z-10">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <nav
          className={`absolute top-0 right-0 w-screen h-screen transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {[
              "BAUHAUS",
              "NEUMORPHISM",
              "RETRO-FUTURISM",
              "GLASSMORPHISM",
              "NEUBRUTALISM",
            ].map((item, index) => (
              <div
                key={item}
                className={`font-bold h-full w-full flex items-center justify-center border-t-4 border-l-4 border-r-4 border-black transition-color duration-200 ${
                  index === 0
                    ? "bg-white text-black hover:bg-red-300"
                    : index === 1
                    ? "bg-white text-black hover:bg-teal-200"
                    : index === 2
                    ? "bg-white text-black hover:bg-purple-400"
                    : index === 3
                    ? "bg-white text-black hover:bg-blue-300"
                    : "bg-black text-white"
                }`}
                style={{ opacity: 100 }}
                ref={(el) => (menuItemsRef.current[index] = el)}
                onClick={() => {
                  setTheme(item.toLowerCase().replace(/ /g, "-"));
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:grid bg-white text-black border-black grid-cols-10 items-end font-mono">
        <h1 className="lg:text-3xl font-bold col-span-5 p-8 flex items-start">
          UI DEMO
        </h1>
        <div
          className="col-span-1 font-bold h-full flex items-center justify-center hover:border-4 border-black hover:bg-red-300 transition-transform transform hover:translate-y-1 hover:-translate-x-1"
          onClick={() => setTheme("bauhaus")}
        >
          BAUHAUS
        </div>
        <div
          className="col-span-1 font-bold h-full flex items-center justify-center hover:border-4 border-black hover:bg-teal-200 transition-transform transform hover:translate-y-1 hover:-translate-x-1"
          onClick={() => setTheme("neumorphism")}
        >
          NEUMORPHISM
        </div>
        <div
          className="col-span-1 font-bold h-full flex items-center justify-center hover:border-4 border-black hover:bg-purple-400 transition-transform transform hover:translate-y-1 hover:-translate-x-1"
          onClick={() => setTheme("retro-futurism")}
        >
          RETRO-FUTURISM
        </div>
        <div
          className="col-span-1 font-bold h-full flex items-center justify-center hover:border-4 border-black hover:bg-blue-300 transition-transform transform hover:translate-y-1 hover:-translate-x-1"
          onClick={() => setTheme("glassmorphism")}
        >
          GLASSMORPHISM
        </div>
        <div
          className="col-span-1 font-bold bg-black text-white h-full flex items-center justify-center hover:border-4 hover:border-black transition-transform transform hover:translate-y-1 hover:-translate-x-1"
          onClick={() => setTheme("neubrutalism")}
        >
          NEUBRUTALISM
        </div>
      </div>
    </header>
  );
};

export default NbHeader;
