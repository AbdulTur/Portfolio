import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';
import resume from '../assets/Resume.pdf'; // Adjust the path to your resume file

const Header = ({ isVisible }) => {
  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="hero" smooth={true} duration={500} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about-me" smooth={true} duration={500} className="nav-link">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="experience" smooth={true} duration={500} className="nav-link">Experience</Link>
          </li>
          <li className="nav-item">
            <Link to="technical-skills" smooth={true} duration={500} className="nav-link">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="contact-me" smooth={true} duration={500} className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
      <a href={resume} download className="resume-button">Download Resume</a>
    </header>
  );
};

export default Header;
