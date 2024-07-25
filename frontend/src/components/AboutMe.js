// src/components/AboutMe.js
import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-image flex-shrink-0 mb-8 lg:mb-0 lg:mr-8 w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden">
        <img src={`${process.env.PUBLIC_URL}/images/headshot.jpg`} alt="Abdul" className="w-full h-full object-cover" />
      </div>
      <div className="about-me-text lg:ml-8 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg lg:text-xl mb-4">
          Hi, I'm Abdul. I am a passionate full stack developer with a love for creating dynamic and responsive web applications. I have experience with various technologies and frameworks, and I am always eager to learn more and improve my skills. In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest industry trends.
        </p>
        <p className="text-lg lg:text-xl">
          Let's connect and create something amazing together!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
