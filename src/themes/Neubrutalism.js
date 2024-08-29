import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Neubrutalism = () => {
    // Create references for SVGs and other elements
    const svgRefs = useRef([]);
    const cardRefs = useRef([]);
    const meltRef = useRef(null);
    const imgRef = useRef(null);
    const contentRef = useRef(null);
  

    useEffect(() => {
        // Function to initialize GSAP animations
        const initAnimations = () => {
        // Check if the viewport width is greater than 1024 pixels
        if (window.innerWidth > 1024) {
            svgRefs.current.forEach((svg) => {
            gsap.fromTo(
                svg,
                { rotation: 0 }, 
                {
                rotation: 90,
                scrollTrigger: {
                    trigger: svg,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true,
                },
                }
            );
            });

            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardRefs.current[0],
                start: 'top 110%',
                end: 'bottom top',
                once: true,
            },
            });

            cardRefs.current.forEach((card, index) => {
            tl.fromTo(
                card,
                { y: '20%' },
                {
                y: 0,
                duration: 0.3,
                onComplete: () => {
                    // Clear GSAP inline styles after the animation to prevent conflicts
                    gsap.set(card, { clearProps: 'all' });
                },
                },
                index * 0.1 
            );
            });

            gsap.fromTo(
            meltRef.current,
            { y: '-20%' },
            {
                y: '15%', 
                scrollTrigger: {
                trigger: meltRef.current,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
                },
            }
            );

            gsap.fromTo(
            imgRef.current,
            { x: '100%' },
            {
                x: 0,
                duration: 1,
                scrollTrigger: {
                trigger: imgRef.current,
                start: 'top 80%',
                end: 'bottom 60%', 
                once: true
                },
            }
            );
            gsap.fromTo(
                contentRef.current,
                { x: '-100%' },
                {
                  x: 0,
                  opacity: 1,
                  duration: 1,
                  scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    once: true,
                  },
                }
            );
        }
        };

        // Initialize animations on mount
        initAnimations();

        // Add resize event listener to re-check screen size
        window.addEventListener('resize', initAnimations);

        // Cleanup event listener on unmount
        return () => {
        window.removeEventListener('resize', initAnimations);
        };
    }, []);

    // Function to scroll back to the top of the page
    const scrollToTop = () => {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    };

    return (
        <div className='relative h-screen'>
            {/* Main Section with Title and Svgs */}
            <section className="flex-grow grid lg:grid-cols-2 h-5/6 border-y-4 border-black mb-4 font-mono">
                <div className="w-screen lg:w-full flex items-center justify-center p-8 lg:border-r-4 border-black bg-violet-300 z-20">
                <div className='sm:w-full lg:w-3/4 flex flex-col items-center justify-center bg-white p-16 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]'>
                    <h2 className="text-3xl lg:text-5xl font-bold z-50">NEUBRUTALISM</h2>
                    <p className="mt-4 text-lg lg:text-2xl">Bold Design Meets Raw Functionality.</p>
                    <button
                    className="text-md lg:text-lg h-12 border-black rounded-lg border-2 mt-8 p-2.5 bg-amber-300 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-transform transform"
                    >
                    Sample Button
                    </button>
                </div>
                {/* Mobile Svgs */}
                <div className='lg:hidden -z-10'>
                    <svg
                    width="100"
                    height="100"
                    style={{ filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))", position: "absolute", top: "5%", left: "75%" }}
                    className='z-20'
                    >
                    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="#bfdbfe" />
                    </svg>
                    <svg
                    width="240"
                    height="240"
                    style={{ filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))", position: "absolute", top: "0%", left: "10%", transform: "rotate(20deg)" }}
                    >
                    <polygon points="120,30 216,210 24,210" stroke="black" strokeWidth="3" fill="#fbbf24" />
                    </svg>
                    <svg
                    width="120"
                    height="120"
                    style={{ filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))", position: "absolute", top: "60%", left: "-10%" }}
                    >
                    <rect x="10" y="10" width="80" height="80" stroke="black" strokeWidth="3" fill="#34d399" />
                    </svg>
                    <svg
                    width="180"
                    height="180"
                    viewBox="0 0 50 50"
                    style={{ filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))", position: "absolute", top: "68%", left: "50%", transform: "rotate(-10deg)" }}
                    >
                    <polygon points="25,1 30,20 49,25 30,30 25,49 20,30 1,25 20,20" stroke="black" strokeWidth="1" fill="#f87171" />
                    </svg>
                </div>
                {/* Desktop Svgs */}
                </div>
                <div className="absolute lg:relative lg:flex items-center justify-center lg:bg-amber-300">
                <svg
                    ref={(el) => svgRefs.current[0] = el}
                    width="100"
                    height="100"
                    style={{ filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))", position: "absolute", top: "10%", left: "70%" }}
                >
                    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="#c4b5fd" />
                </svg>
                <svg
                    ref={(el) => svgRefs.current[1] = el}
                    width="240"
                    height="240"
                    style={{ filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))", position: "absolute", top: "10%", left: "20%", transform: "rotate(20deg)" }}
                >
                    <polygon points="120,30 216,210 24,210" stroke="black" strokeWidth="3" fill="#fbbf24" />
                </svg>
                <svg
                    ref={(el) => svgRefs.current[2] = el}
                    width="120"
                    height="120"
                    style={{ filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))", position: "absolute", top: "75%", left: "20%" }}
                >
                    <rect x="10" y="10" width="80" height="80" stroke="black" strokeWidth="3" fill="#34d399" />
                </svg>
                <svg
                    ref={(el) => svgRefs.current[3] = el}
                    width="240"
                    height="240"
                    viewBox="0 0 50 50"
                    style={{ filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))", position: "absolute", top: "65%", left: "60%", transform: "rotate(-10deg)" }}
                >
                    <polygon points="25,1 30,20 49,25 30,30 25,49 20,30 1,25 20,20" stroke="black" strokeWidth="1" fill="#f87171" />
                </svg>
                </div>
            </section>

            {/* Features Section */}
            <section className="p-12 bg-white mb-12">
                <div className="mb-12 sm:w-full lg:w-1/4 mx-auto">
                <h1 className="text-3xl lg:text-5xl font-bold text-center p-8 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">FEATURES</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                <div
                    ref={(el) => cardRefs.current[0] = el}
                    className="border-black rounded-lg border-4 rounded-sm hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-transform transform hover:-translate-y-2 hover:-translate-x-2 p-12 hover:font-bold transition-all ease-in-out duration-200"
                >
                    <h2 className="text-2xl lg:text-4xl font-bold mb-12">Bold Typography</h2>
                    <p className="text-xl lg:text-2xl">Neubrutalism emphasizes strong, bold typography that grabs attention. The use of large, clear fonts ensures readability and creates a striking visual impact. This approach highlights the importance of content and communicates messages with clarity and strength.</p>
                </div>
                <div
                    ref={(el) => cardRefs.current[1] = el}
                    className="border-black rounded-lg border-4 rounded-sm hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-transform transform hover:-translate-y-2 hover:-translate-x-2 p-12 hover:bg-black hover:text-white transition-all ease-in-out duration-200"
                >
                    <h2 className="text-2xl lg:text-4xl font-bold mb-12">High Contrast</h2>
                    <p className="text-xl lg:text-2xl">High contrast color schemes are a hallmark of Neubrutalism. By pairing stark, contrasting colors, this design style enhances visual hierarchy and guides the user's eye. The bold contrasts create a dramatic and memorable interface that stands out in a crowded digital landscape.</p>
                </div>
                <div
                    ref={(el) => cardRefs.current[2] = el}
                    className="border-black rounded-lg border-4 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-transform hover:-translate-y-2 hover:-translate-x-2 p-12 transition duration-200 ease-in-out hover:skew-x-2 hover:skew-y-2 hover:shadow-lg"
                >
                    <h2 className="text-2xl lg:text-4xl font-bold mb-12">Raw Aesthetics</h2>
                    <p className="text-xl lg:text-2xl">Neubrutalism embraces raw, unpolished aesthetics that prioritize function over form. Exposed grid layouts, asymmetry, and minimal decorative elements create a utilitarian look that is both authentic and avant-garde. This honest approach to design celebrates the beauty of imperfection and transparency.</p>
                </div>
                </div>
            </section>

            {/* Wave Svg that drips down on scroll */}
            <div className='relative'>
                <svg
                ref={meltRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                >
                <path
                    fill="#d9f99d"
                    fillOpacity="1"
                    d="M0,0L21.8,26.7C43.6,53,87,107,131,128C174.5,149,218,139,262,117.3C305.5,96,349,64,393,74.7C436.4,85,480,139,524,154.7C567.3,171,611,149,655,144C698.2,139,742,149,785,138.7C829.1,128,873,96,916,90.7C960,85,1004,107,1047,101.3C1090.9,96,1135,64,1178,58.7C1221.8,53,1265,75,1309,80C1352.7,85,1396,75,1418,69.3L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
                />
                <path
                    fill="none"
                    stroke="black"
                    strokeWidth="4"
                    strokeDasharray="4800"
                    strokeDashoffset="0"
                    d="M0,0L21.8,26.7C43.6,53,87,107,131,128C174.5,149,218,139,262,117.3C305.5,96,349,64,393,74.7C436.4,85,480,139,524,154.7C567.3,171,611,149,655,144C698.2,139,742,149,785,138.7C829.1,128,873,96,916,90.7C960,85,1004,107,1047,101.3C1090.9,96,1135,64,1178,58.7C1221.8,53,1265,75,1309,80C1352.7,85,1396,75,1418,69.3L1440,64"
                />
                </svg>
            </div>

            {/* History section */}
            <section className="relative p-8 bg-lime-200 -mt-5 lg:-mt-20 z-10 pb-24 overflow-x-hidden">
                <div className="mb-12 sm:w-1/2 lg:w-1/3 mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold text-center p-8 rounded-lg border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">History</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="p-12 text-left" ref={contentRef}>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">The Birth of Neubrutalism</h2>
                    <p className="text-xl lg:text-3xl mb-4">
                        Neubrutalism is a modern evolution of the Brutalist architecture movement that originated in the mid-20th century. Known for its stark, raw aesthetic, Brutalism emphasized function over form, featuring exposed concrete structures and minimal decoration. Neubrutalism carries these principles into the digital realm, prioritizing usability and honest design.
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
            
            <footer className='bg-black text-white p-8 flex justify-center items-center'>
                <h1 className='text-sm lg:text-2xl mr-4'>
                Continue exploring other designs.
                </h1>
                <button
                onClick={scrollToTop}
                className="text-xs lg:text-lg h-12 border-white text-black rounded-lg p-2.5 bg-amber-300 hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:-translate-x-1 transition-transform transform"
                >
                    Return to Start
                </button>
            </footer>
        </div>
    );
};

export default Neubrutalism;
