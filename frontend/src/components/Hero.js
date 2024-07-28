import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.to(heroRef.current, { opacity: 1, duration: 1 });
    tl.fromTo(
      textRef.current,
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1 },
      '-=0.5'
    );
    tl.fromTo(
      subTitleRef.current,
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1 },
      '-=0.75'
    );
    tl.fromTo(
      subTextRef.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1 },
      '-=0.75'
    );
  }, []);

  return (
    <div className="hero relative h-screen flex items-center justify-center" ref={heroRef}>
      <div className="text-center text-white relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold" ref={textRef}>
          Hi, my name is Abdul
        </h1>
        <h2 className="text-2xl md:text-4xl mt-2" ref={subTitleRef}>
          I am a full stack developer
        </h2>
        <p className="mt-4 text-lg md:text-xl" ref={subTextRef}>
          Scroll to view more
        </p>
      </div>
    </div>
  );
};

export default Hero;
