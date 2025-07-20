import React from 'react';
import './Experience.css';

const experienceData = [
  {
    year: '2025',
    title: 'React Developer Intern',
    company: 'Maitexa Technology, Calicut',
    duration: 'Feb 2025 - July 2025',
    description: `Worked on building components in React.\nCollaborated with backend team for API integration.\nParticipated in UI/UX design feedback and sprint planning.`,
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <div className="containers">
        <div className="sectionTitle experienceTitle" data-aos="fade-up" >Experience</div>
        {experienceData.map((exp, index) => (
          <div className="experienceWrapper" data-aos="fade-up" key={index}>
            <div className="content">
              <div className="jobTitle">{exp.title}</div>
              <div className="joblocation">{exp.company}</div>
              <div className="experienceMonth">{exp.duration}</div>
              {exp.description && (
                <div className="jobDescription">
                  {exp.description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
