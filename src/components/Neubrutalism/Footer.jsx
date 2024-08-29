import React from "react";
import { scrollToTop } from "../../utils/Neubrutalism/scrollToTop";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 flex justify-center items-center">
      <h1 className="text-sm lg:text-2xl mr-4">
        Continue exploring other designs.
      </h1>
      <button
        onClick={scrollToTop}
        className="text-xs lg:text-lg h-12 border-white text-black rounded-lg p-2.5 bg-amber-300 hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:-translate-x-1 transition-transform transform"
      >
        Return to Start
      </button>
    </footer>
  );
};

export default Footer;
