import React from "react";

const ColorGrid = () => {
  return (
    <div className="w-full h-1/2 flex items-center justify-center bg-yellow-50">
      <div className="w-full h-full grid grid-cols-4 grid-rows-4">
        <div className="bg-blue-500 rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-br-full w-full h-full"></div>
        <div className="bg-red-500 rounded-br-full transition-all duration-500 hover:rounded-br-none hover:rounded-tl-full w-full h-full"></div>
        <div className="bg-yellow-300 rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-tr-none w-full h-full"></div>
        <div className="bg-yellow-300 rounded-tr-full transition-all duration-500 hover:rounded-tr-none hover:rounded-bl-full w-full h-full"></div>
        <div className="bg-blue-500 rounded-tl-full transition-all duration-500 hover:rounded-tl-none hover:rounded-br-full w-full h-full"></div>
        <div className="bg-yellow-50 rounded-tr-full transition-all duration-500 hover:rounded-tr-none hover:rounded-bl-full w-full h-full"></div>
        <div className="bg-black rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-tr-full w-full h-full"></div>
        <div className="bg-red-500 rounded-tl-full transition-all duration-500 hover:rounded-tl-none hover:rounded-br-full w-full h-full"></div>
        <div className="bg-yellow-300 rounded-tl-full rounded-br-full transition-all duration-500 hover:rounded-tr-full hover:rounded-tl-none hover:rounded-bl-full hover:rounded-br-none w-full h-full"></div>
        <div className="bg-blue-500 rounded-tr-full rounded-bl-full transition-all duration-500 hover:rounded-none w-full h-full"></div>
        <div className="bg-red-500 rounded-br-full transition-all duration-500 hover:rounded-br-none hover:rounded-tl-full w-full h-full"></div>
        <div className="bg-black rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-tr-full w-full h-full"></div>
        <div className="bg-red-500 rounded-tl-full transition-all duration-500 hover:rounded-tl-none hover:rounded-br-full w-full h-full"></div>
        <div className="bg-yellow-300 rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-tr-full w-full h-full"></div>
        <div className="bg-yellow-50 rounded-bl-full transition-all duration-500 hover:bg-black hover:rounded-bl-none hover:rounded-tr-full w-full h-full"></div>
        <div className="bg-blue-500 rounded-tl-full transition-all duration-500 hover:rounded-tl-none hover:rounded-br-full w-full h-full"></div>
      </div>
    </div>
  );
};

export default ColorGrid;
