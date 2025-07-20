import React from 'react';
import './Skills.css';
import htmlIcon from '../images/htmlimg.png';
import css from '../images/css.png';
import bootstrap from '../images/bootstrap.png';
import tailwind from '../images/tailwind.png';
import jsIcon from '../images/js.png';
import reactIcon from '../images/react.jpeg';
import reduxIcon from '../images/redux.png';
import mui from '../images/mui.png';
import nextjsIcon from '../images/next.js.png';
import gitIcon from '../images/giticon.png';


const Skills = () => {
  const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: css },
  { name: 'Bootstrap', icon: bootstrap},
  { name: 'Tailwind', icon: tailwind},
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React Js', icon: reactIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'Material UI', icon: mui },
  { name: 'Next js', icon: nextjsIcon},
  { name: 'Git hub', icon: gitIcon},
];

  return (
    <section className="Skills" id="skills">
      <div className="container">
        <div className="sectionTitle Skillstitle" data-aos="fade-up">My Skills</div>
        <div className="SkillsSectionContainer" data-aos="fade-up">
          {skills.map((skill, index) => (
            <div className="SkillCard" key={index}>
              <div className="SkillImgWrapper">
                <img src={skill.icon} className="SkillIcon" alt={`${skill.name} icon`} />
              </div>
              <div className="SkillName">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
