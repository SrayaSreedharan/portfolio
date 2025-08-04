import React from 'react';
import './Project.css'; 
import newsImg from '../images/temp.png';
import tastyhugImg from '../images/tastyhug.png';
import socialImg from '../images/social.png';
import aiImg from '../images/aicode.png';
import medicareImg from '../images/medicare.png';
import legalImg from '../images/legal.png';
import devImg from '../images/devcomp.png';
import chaayaImg from '../images/chaayakada.png';


const Project = () => {
    const projects = [
    {
        name: 'Newspaper',
        image: newsImg,
    },
    {
        name: 'TastyHug-Ecommerce',
        image: tastyhugImg,
    },
    {
        name: 'Social Media',
        image: socialImg,
    },
    {
        name: 'AI code editor',
        image: aiImg,
    },
    {
        name: 'Medicare',
        image: medicareImg,
    },
    {
        name: 'Legal',
        image: legalImg,
    },
    {
        name: 'Dev companion',
        image: devImg,
    },
    {
        name: 'Chaayakada',
        image: chaayaImg,
    },  
];

  return (
    <section className="Projects" id="portfolio">
      <div className="container">
        <div className="sectionTitle Skillstitle" data-aos="fade-up" style={{color:'white'}}>
          My Works
        </div>
        <div className="ProjectsContainer" data-aos="fade-up">
          {projects.map((project, index) => (
            <div className="ProjectCard" key={index}>
              <div className="ProjectImageWrapper">
                <img
                  src={project.image}
                  className="ProjectImage"
                  alt={`${project.name} screenshot`}
                />
              </div>
              <div className="ProjectInfoWrapper">
                <div className="ProjectName">{project.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
