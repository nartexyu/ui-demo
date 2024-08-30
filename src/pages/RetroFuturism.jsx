import React from "react";
import PaginationDots from "../components/Retro-futurism/PaginationDots";
import TitleVolume from "../components/Retro-futurism/TitleVolume";
import ThreeCanvas from "../components/Retro-futurism/ThreeCanvas";
import ContactButton from "../components/Retro-futurism/ContactButton";

const RetroFuturism = () => (
  <div className="relative w-screen h-screen bg-gray-200 font-mono">
    <PaginationDots />
    <TitleVolume />
    <ThreeCanvas />
    <ContactButton />
  </div>
);

export default RetroFuturism;
