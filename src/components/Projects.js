import React from 'react';
import { FaReact, FaJava, FaAndroid, FaBootstrap, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaArrowRight } from 'react-icons/fa';
import { SiFlask, SiTailwindcss, SiSqlite, SiFirebase, SiExpress, SiMongodb } from 'react-icons/si';
import '../styles/Projects.css';

const projects = [
  {
    title: "Softstep",
    link: "https://github.com/AbdulTur/SoftStep",
    image: `${process.env.PUBLIC_URL}/images/softstep.png`,
    description: "SoftStep is an innovative mobile application designed to assist patients with Parkinson's disease. The app provides a personalized exercise library tailored to each user's unique condition and needs, helping them maintain and improve their physical health.",
    skills: [FaJava, FaAndroid, SiSqlite, SiFirebase]
  },
  {
    title: "Onshape Guide Generator",
    link: "https://github.com/AbdulTur/onshape-guide-generator",
    image: `${process.env.PUBLIC_URL}/images/darkPre.png`,
    description: "Onshape Guide Generator is a full stack web application made with Flask that helps users create step-by-step guides for designing parts using Onshape. The application takes user input in the form of text and uses GPT-3.5-turbo AI to generate a detailed guide.",
    skills: [FaJsSquare, FaReact, SiTailwindcss, SiFlask, FaPython]
  },
  {
    title: "CarbonRepay",
    link: "https://carbonrepay-bb68f998cf59.herokuapp.com",
    image: `${process.env.PUBLIC_URL}/images/CarbonRepay.png`,
    description: "CarbonRepay is a web application that helps individuals and companies track and offset their transportation-related carbon emissions. It features a user-friendly interface for inputting vehicle data, monitoring distances traveled, and calculating emissions. The platform also enables companies to aggregate fleet data for better environmental accountability and facilitates donations to offset carbon footprints.",
    skills: [FaJsSquare, FaReact, FaBootstrap, SiExpress, SiMongodb ]
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/AbdulTur/Portfolio",
    image: null,
    description: "This portfolio website showcases various projects and experiences.",
    skills: [FaJsSquare, FaReact, FaHtml5, FaCss3Alt]
  }
];

const ProjectItem = ({ project }) => {
  return (
    <div className="project-container">
      {project.image ? (
        <img src={project.image} alt={project.title} className="project-image" />
      ) : (
        <div className="project-placeholder">
          <p>Portfolio Website</p>
        </div>
      )}
      <div className="project-title-container">
        <h3 className="project-title">
          {project.title}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaArrowRight className="ml-2" />
            </a>
          )}
        </h3>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-skills">
        {project.skills.map((SkillIcon, index) => (
          <SkillIcon key={index} className="skill-icon" />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <div className="separator-container">
        <div className="separator"></div>
      </div>
      <section className="projects-section py-12 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
