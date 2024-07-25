// src/components/Hero.js
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const [init, setInit] = useState(false);

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

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="hero" ref={heroRef}>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
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
                enable: false,
                opacity: 0.4,
                width: 2,
              },
              move: {
                direction: "none",
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
                value: 30,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 5, max: 15 },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 200,
                    duration: 2,
                    size: 0,
                    opacity: 0.8,
                  },
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
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
