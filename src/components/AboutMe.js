import React from 'react';
import '../styles/AboutMe.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <>
      <div className="separator"></div>
      <section className="about-me-section bg-gray-800 bg-opacity-50 text-white rounded-lg shadow-lg p-8 mx-4 md:mx-auto md:max-w-4xl lg:max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="about-me-container flex flex-col lg:flex-row items-center">
          <div className="about-me-left flex flex-col items-center lg:items-start mb-8 lg:mb-0 lg:mr-8">
            <div className="about-me-image mb-4 w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden flex-shrink-0">
              <img src={`${process.env.PUBLIC_URL}/images/headshot.jpg`} alt="Abdul" className="w-full h-full object-cover" />
            </div>
            <div className="about-me-icons flex space-x-4 mt-4">
              <a href="https://ca.linkedin.com/in/abdulaziz-turonov-63ab3a260" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl" />
              </a>
              <a href="https://github.com/AbdulTur" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-2xl" />
              </a>
              <a href="mailto:aturonov@mun.ca">
                <FaEnvelope className="text-white text-2xl" />
              </a>
            </div>
          </div>
          <div className="about-me-right text-center lg:text-left mt-8 lg:mt-0">
            <h3 className="text-3xl font-bold mb-4">Education</h3>
            <p className="text-lg lg:text-xl mb-4">
              Bachelor of Computer Engineering, Memorial University of Newfoundland
              <br />
              Expected Graduation: May 2026
            </p>
            <h3 className="text-3xl font-bold mb-4">Who am I?</h3>
            <p className="text-lg lg:text-xl">
              Hi, I’m Abdul — a senior Computer Engineering student at Memorial University of Newfoundland focused on building reliable, scalable software. I’ve completed two Software Development Engineer internships at Amazon Robotics, working on real-time analytics dashboards, AWS-based backend services, and distributed data pipelines. Previously, I’ve built full-stack features in production using Vue/TypeScript/FastAPI/PostgreSQL and improved platform reliability through analytics, APIs, and performance fixes. I’m most interested in backend, infrastructure, and systems-oriented roles where correctness, scale, and real-world impact matter.
              <br />
              Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
