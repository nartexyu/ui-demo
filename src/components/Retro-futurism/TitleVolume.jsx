import React from "react";
import { useAtom } from "jotai";
import { bookAtom } from "../../atoms/atoms";
import { books } from "./FuturismPages";

const TitleVolume = () => {
  const [currentBook] = useAtom(bookAtom);

  return (
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
  );
};

export default TitleVolume;
