import React from 'react';
import { FaReact, FaNode, FaDocker, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaVuejs, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiNuxtdotjs, SiPostgresql, SiFastapi, SiExpress, SiFlask, SiCplusplus, SiLinux, SiGnubash, SiJira, SiAstro, SiTailwindcss, SiGrafana, SiQt, SiPandas, SiNumpy} from 'react-icons/si';
import '../styles/Experience.css';

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Angler Solutions Inc.",
    period: "May 2024 – August 2024",
    location: "St. John's, NL, Canada", 
    details: [
      "Implemented full-stack solutions with Vue, TypeScript, FastAPI, and PostgreSQL, streamlining system operations.",
      "Corrected data transmission errors, boosting system accuracy by 50% with Vue and FastAPI, ensuring reliable data flow.",
      "Developed a password recovery system with Nuxt, TypeScript, and FastAPI, improving user experience and security.",
      "Enhanced security with token automation, achieving 99.9% system uptime and minimizing unauthorized access incidents.",
      "Created a Random Forest model, predicting wind speeds with 95% accuracy, improving data analysis.",
      "Optimized SQL queries and database performance, enhancing data retrieval speed and reducing latency.",
      "Increased backend data processing speed by 60% using Pandas and NumPy, cutting API response times by 70%"
    ],
    skills: [<FaJsSquare />, <SiTypescript />, <FaVuejs />, <FaPython />, <FaNode/>, <SiNuxtdotjs />, <SiPostgresql />, <FaDocker />, <SiFastapi />, <FaGitAlt />,<SiPandas />, <SiNumpy />, <FaHtml5 />, <FaCss3Alt />]
  },
  {
    title: "Intern Full Stack Developer",
    company: "Bluedrop ISM",
    period: "August 2023 – December 2023",
    location: "St. John's, NL, Canada", 
    details: [
      "Enhanced web platform features, improving frontend performance and user experience with JavaScript and React.",
      "Implemented user metrics tracking with JavaScript, React, and Grafana, covering 96% of activities for over 1000 users.",
      "Utilized PostgreSQL for efficient data management and retrieval, improving application performance.",
      "Managed code updates and collaboration for 30+ members using Git, Jira, and CI/CD.",
      "Conducted unit testing, code reviews, and implemented CI/CD practices to ensure code quality and stability.",
      "Proactively identified and resolved critical bugs, enhancing web platform stability and reducing downtime by 20%.",
      "Developed and modified RESTful APIs for dynamic data interaction, improving system integration using Express and Node.js."
    ],
    skills: [<FaReact />, <FaJsSquare />, <SiPostgresql />, <FaNode/>, <SiExpress />, <FaGitAlt />, <SiJira />, <SiGrafana />, <FaHtml5 />, <FaCss3Alt />]
  },
  {
    title: "Computer Engineering Intern",
    company: "Memorial University of Newfoundland",
    period: "February 2023 – May 2023",
    location: "St. John's, NL, Canada", 
    details: [
      "Integrated AI to generate website guides using API technology, reducing guide creation time by 50%.",
      "Designed a Python Flask-based REST API using OpenAI API to deliver dynamic data in real-time, improving response times for data retrieval.",
      "Created a responsive front-end with HTML, CSS, and JavaScript, interfacing with the Flask API, providing a seamless user experience.",
      "Assisted in managing MUN web pages using WordPress and T4, streamlining content updates.",
      "Enhanced website accessibility and performance, ensuring compliance with web standards and improving load times."
    ],
    skills: [<FaJsSquare />, <FaNode/>, <FaHtml5 />, <FaCss3Alt />, <SiFlask />, <FaReact />, <FaGitAlt />]
  },
  {
    title: "Software Developer",
    company: "Paradigm Engineering (Student Group)",
    period: "October 2023 – May 2024",
    location: "St. John's, NL, Canada", 
    details: [
      "Developed a high-performance path planning algorithm for go-kart navigation using Python and ROS2.",
      "Implemented real-time cone recognition for road navigation using YOLO algorithm.",
      "Utilized Git for effective team collaboration, within a Linux and Bash environment.",
      "Enhanced the Paradigm Engineering website using Astro, Tailwind CSS, and JavaScript."
    ],
    skills: [<FaPython />, <SiCplusplus />, <SiLinux />, <SiGnubash />, <SiAstro />, <SiTailwindcss />, <FaJsSquare />, <FaGitAlt />, <FaNode/>]
  },
  {
    title: "Software Developer",
    company: "Eastern Edge Robotic (Student Group)",
    period: "February 2023 – October 2023",
    location: "St. John's, NL, Canada", 
    details: [
      "Collaborated with a team of over 10 members to develop ROV software, utilizing Git for version control.",
      "Designed the diagnostic segment of the software using Python and Object-Oriented Programming (OOP) principles.",
      "Developed a user-friendly GUI tab with QT and Python."
    ],
    skills: [<FaPython />, <SiCplusplus />, <SiQt />,  <SiLinux />, <FaGitAlt />]
  }
];

const calculateCircleSize = (numSkills) => {
  const baseSize = 150;  
  const increment = 30;  
  return baseSize + increment * Math.ceil(numSkills / 4);
};

const Experience = () => {
    return (
      <>
        <div className="separator-container">
          <div className="separator"></div>
        </div>
        <section className="experience-section py-12 text-white">
          <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className={`experience-container flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center my-8`}>
              <div className="experience-details lg:w-2/3 px-4">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-lg italic">{exp.company}</p>
                <p className="text-lg">{exp.period}</p>
                <p className="text-lg">{exp.location}</p> {/* Added location display */}
                <ul className="mt-4 list-disc list-inside">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className={`experience-skills lg:w-1/3 flex justify-center ${index % 2 === 1 ? 'lg:justify-end' : 'lg:justify-start'} px-4 mt-8 lg:mt-0`}>
                <div
                  className="skills-circle flex flex-wrap justify-center items-center"
                  style={{ width: `${calculateCircleSize(exp.skills.length)}px`, height: `${calculateCircleSize(exp.skills.length)}px` }}
                >
                  {exp.skills.map((skill, i) => (
                    <div key={i} className="skill-icon m-2 text-2xl">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </>
    );
  };
  
export default Experience;
