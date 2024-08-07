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
              Hi, I'm Abdul, a senior Computer Engineering student at Memorial University of Newfoundland with a passion for full-stack development and AI. I have hands-on experience in frontend and backend web development, working with Java, Python, JavaScript, and frameworks like React and Flask. I've interned at Angler Solutions and Bluedrop ISM, where I improved system accuracy and developed advanced features. I'm eager to bring my skills to a leading tech company and contribute to innovative projects.
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
