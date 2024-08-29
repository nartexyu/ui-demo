import React, { useRef } from "react";
import Hero from "../components/Neubrutalism/Hero";
import Features from "../components/Neubrutalism/Features";
import History from "../components/Neubrutalism/History";
import Footer from "../components/Neubrutalism/Footer";
import { Wave } from "../assets/svgs/Neubrutalism/nbSvgs";
import useGsapAnimations from "../utils/Neubrutalism/useGsapAnimations";

const Neubrutalism = () => {
  const svgRefs = useRef([]);
  const cardRefs = useRef([]);
  const meltRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  useGsapAnimations(svgRefs, cardRefs, meltRef, imgRef, contentRef);

  return (
    <div className="relative h-screen">
      <Hero svgRefs={svgRefs} />
      <Features ref={{ cardRefs }} />
      <Wave ref={meltRef} />
      <History contentRef={contentRef} imgRef={imgRef} />
      <Footer />
    </div>
  );
};

export default Neubrutalism;
