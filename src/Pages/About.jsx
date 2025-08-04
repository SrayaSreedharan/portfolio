import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section className="aboutSection" id="about">
      <div className="container">
        <div className="sectionTitle" data-aos="fade-up" style={{color:'white'}} >About Me</div>
        <div className="aboutCard singleCard" data-aos="fade-up">
          <p>
            Hi, I'm a passionate React Developer with experience in building dynamic, responsive, and high-performance web applications. I specialize in modern JavaScript (ES6+), React.js, and component-driven development.
            <br /><br />
            I love creating user-friendly interfaces, optimizing performance, and writing clean, maintainable code. I'm also experienced with state management tools like Redux and Context API. I'm always learning new technologies and contributing to open-source projects.
            <br /><br />
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
