import React, { useRef } from "react";
import { useAtom } from "jotai";
import {
  fadeAtom,
  currentThemeIndexAtom,
  tokenAtom,
  themeAtom,
} from "../../atoms/atoms"; // Import the atoms

const GlassHeader = () => {
  const themes = [
    "neumorphism",
    "bauhaus",
    "GLASSMORPHISM",
    "retro-futurism",
    "neubrutalism",
  ];
  const startXRef = useRef(null);

  // Use atoms instead of useState
  const [fade, setFade] = useAtom(fadeAtom);
  const [currentThemeIndex, setCurrentThemeIndex] = useAtom(
    currentThemeIndexAtom
  );
  const [token, setToken] = useAtom(tokenAtom);
  const [, setTheme] = useAtom(themeAtom);

  // Function to handle Spotify login redirection
  const handleLogin = () => {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = "https://ui-demo-psi.vercel.app/";
    const scopes = [
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
    ];

    window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
  };

  // Function to handle Spotify logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(""); // Clear the token in the atom
    console.log("Token deleted");
  };

  // Function to capture position of drag/swipe for mobile header
  const handleDragStart = (e) => {
    startXRef.current = e.clientX || e.touches[0].clientX;
  };

  // Function to handle end of drag/swipe, rotating the theme
  const handleDragEnd = (e) => {
    const endX = e.clientX || e.changedTouches[0].clientX;
    if (endX > startXRef.current + 50) {
      rotateTheme(1);
    } else if (endX < startXRef.current - 50) {
      rotateTheme(-1);
    }
  };

  // Function to rotate the theme based on direction for mobile header
  const rotateTheme = (direction) => {
    setFade(true);
    setTimeout(() => {
      setCurrentThemeIndex(
        (prevIndex) => (prevIndex + direction + themes.length) % themes.length
      );
      setFade(false);
    }, 200); // Duration of the fade-out transition
  };

  // Function to set theme on click
  const handleClick = (theme) => {
    setTheme(theme.toLowerCase());
  };

  return (
    <header className="fixed h-[10%] w-screen bg-transparent z-10 text-white drop-shadow-lg">
      {/* Mobile Header */}
      <div className="lg:hidden grid grid-cols-3 items-center justify-center">
        <h1 className="lg:text-xl font-normal col-span-1 p-8">UI Demo</h1>
        <div
          className={`col-span-1 font-medium h-full flex items-center justify-center cursor-pointer transition-opacity duration-200 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onClick={() => handleClick(themes[currentThemeIndex])}
        >
          {themes[currentThemeIndex].toUpperCase()}
        </div>
        <div className="col-span-1 flex justify-center items-center">
          {token ? (
            <button
              className="font-normal px-6 py-2 bg-blue-600 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full"
              onClick={handleLogout}
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
            onClick={() => setTheme(theme.toLowerCase())}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </div>
        ))}
        <div></div>
        <div className="flex justify-center items-center col-span-1">
          {token ? (
            <button
              className="font-normal px-6 py-2 bg-blue-600 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full"
              onClick={handleLogout}
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
