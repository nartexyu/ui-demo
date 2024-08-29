import React from "react";
import {
  CircleSvg,
  TriangleSvg,
  SquareSvg,
  StarSvg,
  CircleSvgRef,
  TriangleSvgRef,
  SquareSvgRef,
  StarSvgRef,
} from "../../assets/svgs/Neubrutalism/nbSvgs";

const Hero = ({ svgRefs }) => {
  return (
    <section className="flex-grow grid lg:grid-cols-2 h-5/6 border-y-4 border-black mb-4 font-mono">
      <div className="w-screen lg:w-full flex items-center justify-center p-8 lg:border-r-4 border-black bg-violet-300 z-20">
        <div className="sm:w-full lg:w-3/4 flex flex-col items-center justify-center bg-white p-16 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl lg:text-5xl font-bold z-50">NEUBRUTALISM</h2>
          <p className="mt-4 text-lg lg:text-2xl">
            Bold Design Meets Raw Functionality.
          </p>
          <button className="text-md lg:text-lg h-12 border-black rounded-lg border-2 mt-8 p-2.5 bg-amber-300 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-transform transform">
            Sample Button
          </button>
        </div>
        {/* Mobile Svgs */}
        <div className="lg:hidden -z-10">
          <CircleSvg />
          <TriangleSvg />
          <SquareSvg />
          <StarSvg />
        </div>
      </div>
      <div className="absolute lg:relative lg:flex items-center justify-center lg:bg-amber-300">
        <CircleSvgRef ref={(el) => (svgRefs.current[0] = el)} />
        <TriangleSvgRef ref={(el) => (svgRefs.current[1] = el)} />
        <SquareSvgRef ref={(el) => (svgRefs.current[2] = el)} />
        <StarSvgRef ref={(el) => (svgRefs.current[3] = el)} />
      </div>
    </section>
  );
};

export default Hero;
