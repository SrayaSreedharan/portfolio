import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
  {
    qualification: 'Master of Computer Applications',
    year: '2020-2023',
  },
  {
    qualification: 'Bachelor of Computer Applications',
    year: '2017-2020',
  },
  {
    qualification: 'Plus Two',
    year: '2015-2017',
  },
  {
    qualification: 'S S L C',
    year: '2014-2015',
  },
]

  return (
    <div>
      <div className="EducationBgImgWrapper">
      </div>
      <section className="Education">
        <div className="container">
          <div className="sectionTitle" data-aos="fade-up">Education</div>
          <div className="EducationInfoWrapper">
            {educationData.map((item, index) => (
              <div className="EducationCard" data-aos={item.animation} key={index}>
                <div className="Qualification">{item.qualification}</div>
                <div className="AcademicYear">{item.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
