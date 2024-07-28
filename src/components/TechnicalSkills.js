import React from 'react';
import { FaReact, FaFileExcel, FaNode, FaDocker, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaVuejs, FaJsSquare, FaJava, FaAndroid } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiAstro, SiTailwindcss, SiExpress, SiFastapi, SiFlask, SiCplusplus, SiLinux, SiGnubash, SiJira, SiPandas, SiNumpy, SiQt, SiDotnet, SiSqlite, SiPostgresql, SiSqlalchemy, SiFirebase, SiGrafana } from 'react-icons/si';
import { PiDotsNineBold } from "react-icons/pi";
import '../styles/TechnicalSkills.css';

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C/C++", icon: <SiCplusplus /> },
  { name: "C#", icon: <SiCplusplus /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML/CSS/XML", icon: <FaHtml5 /> },
  { name: "React", icon: <FaReact /> },
  { name: "Vue", icon: <FaVuejs /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "", icon: <SiDotnet /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Android SDK", icon: <FaAndroid /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Grafana", icon: <SiGrafana /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Qt", icon: <SiQt /> },
  { name: "Bash", icon: <SiGnubash /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Android Studio", icon: <FaAndroid /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Excel", icon: <FaFileExcel /> },
  { name: "ROS2", icon: <PiDotsNineBold /> },
  { name: "Astro", icon: <SiAstro /> },
  { name: "Tailwind.css", icon: <SiTailwindcss /> }
];

const TechnicalSkills = () => {
  return (
    <>
      <div className="separator-container">
        <div className="separator"></div>
      </div>
      <section className="technical-skills-section py-12 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-icon">
              {skill.icon}
              <p className="mt-2 text-center text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TechnicalSkills;
