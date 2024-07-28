import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Experience from './components/Experience';
import TechnicalSkills from './components/TechnicalSkills'; 
import ParticlesBackground from './components/ParticlesBackground'; 
import Projects from './components/Projects';
import Header from './components/Header'; 
import './styles/index.css';
import './styles/App.css';

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App relative bg-gray-900 text-white min-h-screen">
      <ParticlesBackground />
      {showHeader && <Header />}
      <section id="hero" className="relative z-10">
        <Hero />
      </section>
      <section id="about-me" className="relative z-10 mt-16 md:mt-32 container mx-auto">
        <AboutMe />
      </section>
      <section id="experience" className="relative z-10 mt-16 md:mt-32 container mx-auto">
        <Experience />
      </section>
      <section id="technical-skills" className="relative z-10 mt-16 md:mt-32 container mx-auto">
        <TechnicalSkills /> 
      </section>
      <section id="projects" className="relative z-10 mt-16 md:mt-32 container mx-auto">
        <Projects />
      </section>
      <section id="contact-me" className="relative z-10 mt-16 md:mt-32 container mx-auto">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
