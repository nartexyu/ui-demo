import { useEffect } from "react";
import { initAnimations } from "./gsapAnimations";

const useGsapAnimations = (svgRefs, cardRefs, meltRef, imgRef, contentRef) => {
  useEffect(() => {
    const handleResize = () =>
      initAnimations(svgRefs, cardRefs, meltRef, imgRef, contentRef);

    initAnimations(svgRefs, cardRefs, meltRef, imgRef, contentRef);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [svgRefs, cardRefs, meltRef, imgRef, contentRef]);
};

export default useGsapAnimations;
