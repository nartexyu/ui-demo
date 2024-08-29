import React, { useState } from "react";

const BauhausHeader = ({ setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div
        className="flex justify-between fixed bg-yellow-300 lg:bg-yellow-50 
        text-black w-screen lg:w-2/3 h-16 z-10"
      >
        <h1 className="flex items-center ml-4 lg:ml-8">UI DEMO</h1>
        <div className="lg:hidden flex items-center mr-4">
          <button
            className="focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden lg:flex justify-start fixed bg-yellow-300 
          lg:bg-yellow-50 text-black w-screen lg:w-2/3 h-16 z-10"
        >
          <div
            className="grid grid-cols-6 items-center justify-center w-full 
            lg:gap-4 lg:px-4 text-xs lg:text-lg"
          >
            <h1 className="col-span-1 flex items-start lg:ml-8">UI DEMO</h1>
            <div
              className="col-span-1 flex justify-center items-center cursor-pointer 
              underline decoration-solid underline-offset-8 hover:scale-105 
              transition duration-200 ease-in-out text-xs lg:text-lg"
              onClick={() => setTheme("bauhaus")}
            >
              BAUHAUS
            </div>
            <div
              className="col-span-1 flex justify-center items-center cursor-pointer 
              hover:scale-105 transition duration-200 ease-in-out text-xs lg:text-lg"
              onClick={() => setTheme("neumorphism")}
            >
              NEUMORPHISM
            </div>
            <div
              className="col-span-1 flex justify-center items-center cursor-pointer 
              hover:scale-105 transition duration-200 ease-in-out text-xs lg:text-lg"
              onClick={() => setTheme("retro-futurism")}
            >
              RETRO-FUTURISM
            </div>
            <div
              className="col-span-1 flex justify-center items-center cursor-pointer 
              hover:scale-105 transition duration-200 ease-in-out text-xs lg:text-lg"
              onClick={() => setTheme("glassmorphism")}
            >
              GLASSMORPHISM
            </div>
            <div
              className="col-span-1 flex justify-center items-center cursor-pointer 
              hover:scale-105 transition duration-200 ease-in-out text-xs lg:text-lg"
              onClick={() => setTheme("neubrutalism")}
            >
              NEUBRUTALISM
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="lg:hidden fixed top-16 left-0 right-0 
          bg-yellow-300 text-black w-full h-full z-10 
          transform transition-all ease-in-out duration-300"
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <div
              className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out 
              text-lg underline decoration-solid underline-offset-8"
              onClick={() => {
                setTheme("bauhaus");
                setIsMenuOpen(false);
              }}
            >
              BAUHAUS
            </div>
            <div
              className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out text-lg"
              onClick={() => {
                setTheme("neumorphism");
                setIsMenuOpen(false);
              }}
            >
              NEUMORPHISM
            </div>
            <div
              className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out text-lg"
              onClick={() => {
                setTheme("retro-futurism");
                setIsMenuOpen(false);
              }}
            >
              RETRO-FUTURISM
            </div>
            <div
              className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out text-lg"
              onClick={() => {
                setTheme("glassmorphism");
                setIsMenuOpen(false);
              }}
            >
              GLASSMORPHISM
            </div>
            <div
              className="cursor-pointer hover:scale-105 transition duration-200 ease-in-out text-lg"
              onClick={() => {
                setTheme("neubrutalism");
                setIsMenuOpen(false);
              }}
            >
              NEUBRUTALISM
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default BauhausHeader;
