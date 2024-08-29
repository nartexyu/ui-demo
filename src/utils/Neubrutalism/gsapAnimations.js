import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initAnimations = (svgRefs, cardRefs, meltRef, imgRef, contentRef) => {
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
                    once: true,
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
