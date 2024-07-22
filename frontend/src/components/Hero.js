// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);

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
      subTextRef.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1 },
      '-=0.75'
    );
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="hero h-screen flex items-center justify-center" ref={heroRef}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="text-center text-white relative z-10">
        <h1 className="text-4xl font-bold" ref={textRef}>
          Hi, I'm Abdul, I am a full stack developer
        </h1>
        <p className="mt-4 text-lg" ref={subTextRef}>
          Scroll to view more
        </p>
      </div>
    </div>
  );
};

export default Hero;
