import React from "react";
import { useAtom } from "jotai";
import { bookAtom, pageAtom } from "../../atoms/atoms";
import { books } from "./FuturismPages";

const PaginationDots = () => {
  const [currentBook, setCurrentBook] = useAtom(bookAtom);
  const [, setPageAtom] = useAtom(pageAtom);

  const handlePageClick = (index) => {
    setCurrentBook(index);
    setPageAtom(0);
  };

  return (
    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10">
      {books.map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer ${
            index === currentBook ? "bg-transparent" : ""
          }`}
          onClick={() => handlePageClick(index)}
        >
          {index === currentBook && (
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PaginationDots;
