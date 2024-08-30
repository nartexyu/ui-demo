import React, { useRef } from "react";
import { useAtom } from "jotai";
import {
  fadeAtom,
  currentThemeIndexAtom,
  tokenAtom,
  themeAtom,
} from "../../atoms/atoms";

import { handleLogin } from "../../utils/Glassmorphism/handleLogin";
import { handleLogout } from "../../utils/Glassmorphism/handleLogout";
import { handleDragStart } from "../../utils/Glassmorphism/handleDragStart";
import { handleDragEnd } from "../../utils/Glassmorphism/handleDragEnd";
import { rotateTheme } from "../../utils/Glassmorphism/rotateTheme";
import { handleClick } from "../../utils/Glassmorphism/handleClick";

const GlassHeader = () => {
  const themes = [
    "neumorphism",
    "bauhaus",
    "GLASSMORPHISM",
    "retro-futurism",
    "neubrutalism",
  ];
  const startXRef = useRef(null);
  const [fade, setFade] = useAtom(fadeAtom);
  const [currentThemeIndex, setCurrentThemeIndex] = useAtom(
    currentThemeIndexAtom
  );
  const [token, setToken] = useAtom(tokenAtom);
  const [, setTheme] = useAtom(themeAtom);

  return (
    <header className="fixed h-[10%] w-screen bg-transparent z-10 text-white drop-shadow-lg">
      {/* Mobile Header */}
      <div className="lg:hidden grid grid-cols-3 items-center justify-center">
        <h1 className="lg:text-xl font-normal col-span-1 p-8">UI Demo</h1>
        <div
          className={`col-span-1 font-medium h-full flex items-center justify-center cursor-pointer transition-opacity duration-200 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          onMouseDown={(e) => handleDragStart(e, startXRef)}
          onMouseUp={(e) =>
            handleDragEnd(e, startXRef, (direction) =>
              rotateTheme(direction, setFade, setCurrentThemeIndex, themes)
            )
          }
          onTouchStart={(e) => handleDragStart(e, startXRef)}
          onTouchEnd={(e) =>
            handleDragEnd(e, startXRef, (direction) =>
              rotateTheme(direction, setFade, setCurrentThemeIndex, themes)
            )
          }
          onClick={() => handleClick(themes[currentThemeIndex], setTheme)}
        >
          {themes[currentThemeIndex].toUpperCase()}
        </div>
        <div className="col-span-1 flex justify-center items-center">
          {token ? (
            <button
              className="font-normal px-6 py-2 bg-blue-600 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full"
              onClick={() => handleLogout(setToken)}
            >
              Logout
            </button>
          ) : (
            <button
              className="font-normal px-6 py-2 bg-blue-600 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full"
              onClick={handleLogin}
            >
              Login to Spotify
            </button>
          )}
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:grid grid-cols-9">
        <h1 className="lg:text-xl font-normal col-span-2 p-8 flex items-start">
          UI Demo
        </h1>
        {themes.map((theme, index) => (
          <div
            key={index}
            className="col-span-1 font-normal h-full flex items-center justify-center cursor-pointer hover:scale-105 transition duration-300 ease-in-out hover:drop-shadow-lg"
            onClick={() => handleClick(theme.toLowerCase(), setTheme)}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </div>
        ))}
        <div></div>
        <div className="flex justify-center items-center col-span-1">
          {token ? (
            <button
              className="font-normal px-6 py-2 bg-blue-600 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full"
              onClick={() => handleLogout(setToken)}
            >
              Logout
            </button>
          ) : (
            <button
              className="font-normal px-6 py-2 bg-blue-600 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default GlassHeader;
