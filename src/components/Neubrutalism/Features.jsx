import React from "react";

const Features = React.forwardRef((props, ref) => {
  const { cardRefs } = ref;

  return (
    <section className="p-12 bg-white mb-12">
      <div className="mb-12 sm:w-full lg:w-1/4 mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold text-center p-8 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          FEATURES
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="border-black rounded-lg border-4 rounded-sm hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-transform transform hover:-translate-y-2 hover:-translate-x-2 p-12 hover:font-bold transition-all ease-in-out duration-200"
        >
          <h2 className="text-2xl lg:text-4xl font-bold mb-12">
            Bold Typography
          </h2>
          <p className="text-xl lg:text-2xl">
            Neubrutalism emphasizes strong, bold typography that grabs
            attention. The use of large, clear fonts ensures readability and
            creates a striking visual impact. This approach highlights the
            importance of content and communicates messages with clarity and
            strength.
          </p>
        </div>
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="border-black rounded-lg border-4 rounded-sm hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-transform transform hover:-translate-y-2 hover:-translate-x-2 p-12 hover:bg-black hover:text-white transition-all ease-in-out duration-200"
        >
          <h2 className="text-2xl lg:text-4xl font-bold mb-12">
            High Contrast
          </h2>
          <p className="text-xl lg:text-2xl">
            High contrast color schemes are a hallmark of Neubrutalism. By
            pairing stark, contrasting colors, this design style enhances visual
            hierarchy and guides the user's eye. The bold contrasts create a
            dramatic and memorable interface that stands out in a crowded
            digital landscape.
          </p>
        </div>
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="border-black rounded-lg border-4 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-transform hover:-translate-y-2 hover:-translate-x-2 p-12 transition duration-200 ease-in-out hover:skew-x-2 hover:skew-y-2 hover:shadow-lg"
        >
          <h2 className="text-2xl lg:text-4xl font-bold mb-12">
            Raw Aesthetics
          </h2>
          <p className="text-xl lg:text-2xl">
            Neubrutalism embraces raw, unpolished aesthetics that prioritize
            function over form. Exposed grid layouts, asymmetry, and minimal
            decorative elements create a utilitarian look that is both authentic
            and avant-garde. This honest approach to design celebrates the
            beauty of imperfection and transparency.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Features;
