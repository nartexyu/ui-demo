import React from "react";

const History = React.forwardRef(({ contentRef, imgRef }, ref) => {
  return (
    <section className="relative p-8 bg-lime-200 -mt-5 lg:-mt-20 z-10 pb-24 overflow-x-hidden">
      <div className="mb-12 sm:w-1/2 lg:w-1/3 mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center p-8 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          History
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="p-12 text-left" ref={contentRef}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            The Birth of Neubrutalism
          </h2>
          <p className="text-xl lg:text-3xl mb-4">
            Neubrutalism is a modern evolution of the Brutalist architecture
            movement that originated in the mid-20th century. Known for its
            stark, raw aesthetic, Brutalism emphasized function over form,
            featuring exposed concrete structures and minimal decoration.
            Neubrutalism carries these principles into the digital realm,
            prioritizing usability and honest design.
          </p>
        </div>
        <div className="p-8 flex justify-center">
          <img
            ref={imgRef}
            src={`${process.env.PUBLIC_URL}/brutalism.jpg`}
            alt="Neubrutalism Example"
            className="bg-auto rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          />
        </div>
      </div>
    </section>
  );
});

export default History;
