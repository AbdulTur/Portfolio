import React from 'react';
import { FaReact, FaNode, FaDatabase, FaDocker, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaVuejs, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiNuxtdotjs, SiPostgresql, SiFastapi, SiExpress, SiFlask, SiCplusplus, SiLinux, SiGnubash, SiJira, SiAstro, SiTailwindcss, SiGrafana, SiQt, SiPandas, SiNumpy} from 'react-icons/si';
import '../styles/Experience.css';

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Angler Solutions Inc.",
    period: "May 2024 – August 2024",
    location: "St. John's, NL, Canada", 
    details: [
      "Implemented full-stack solutions enhancing frontend and backend integration with Vue, FastAPI, and PostgreSQL.",
      "Corrected data transmission errors, increasing system accuracy by 50% with Vue and FastAPI.",
      "Developed a password recovery system, reducing user recovery time by 30% with Nuxt and FastAPI.",
      "Enhanced security with token automation, achieving 99.9% system uptime and minimizing access breaches.",
      "Reduced API response times by 70% and improved data processing with Python and PostgreSQL.",
      "Created a Random Forest model, predicting wind speeds with 95% accuracy, enhancing data analysis."
    ],
    skills: [<FaJsSquare />, <SiTypescript />, <FaVuejs />, <FaPython />, <FaNode/>, <SiNuxtdotjs />, <SiPostgresql />, <FaDocker />, <SiFastapi />, <FaGitAlt />,<SiPandas />, <SiNumpy />, <FaHtml5 />, <FaCss3Alt />]
  },
  {
    title: "Intern Full Stack Developer",
    company: "Bluedrop ISM",
    period: "August 2023 – December 2023",
    location: "St. John's, NL, Canada", 
    details: [
      "Implemented comprehensive user metrics tracking, covering 96% of user activities, enabling the monitoring of over 1000 active users monthly on the platform using JavaScript, React, and Grafana.",
      "Enhanced web platform features, focusing on frontend improvements with JavaScript and React.",
      "Utilized PostgreSQL for efficient data management and retrieval in application features.",
      "Managed code updates and facilitated team collaboration using Git, Jira, and CI/CD pipelines.",
      "Proactively identified and resolved critical bugs, significantly enhancing web platform stability and reducing downtime by 20%.",
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
      "Assisted in the creation of MUN web pages as a full stack developer using WordPress and T4, reducing content update time by 25%."
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
