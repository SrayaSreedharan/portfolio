import React from 'react';
import './Education.css';
import git from '../images/giticon.png'
import linkedin from '../images/linkedin.png'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <section className="ContactMe" id="ContactMe">
      <div className="ContactTitleWrapper">
        <div className="sectionTitle Contactmetitle" data-aos="fade-up" style={{color:'white'}}>Contact Me</div>
      </div>
      <div className="container">
        <div className="ContactContentWrapper" data-aos="fade-up">
          <div className="EmailandPhoneWrapper">
            <div className="ContactInfoCard">
              <div className="ContactIconWrapper">
              </div>
              <div className="ContactMeContent">
                <a href="mailto:srayasreedharan111@gmail.com"> <MdEmail /> srayasreedharan111@gmail.com</a>
              </div>
            </div>
            <div className="ContactInfoCard">
              <div className="ContactIconWrapper">
              </div>
              <div className="ContactMeContent"><FaPhone /> +91 8921528107</div>
            </div>
          </div>
          <div className="ContactInfoCard">
            <div className="ContactIconWrapper">
            </div>
            <div className="ContactMeContent"><FaLocationDot /> Kuniyillath, Olavilam PO, Monthal 673313, Kannur</div>
          </div>
        </div>
      </div>
      <div className="SocialMediaWrapper" data-aos="fade-up">
        <a href="https://www.linkedin.com/in/sraya-sreedharan-k-0653a1259/" className="SocialMediaBtn" target="_blank" rel="noopener noreferrer">
          <div className="SocialMediaIconWrapper">
            <img src={linkedin} className="SocialMediaIcon" alt="LinkedInIcon" />
          </div>
        </a>
        <a href="https://github.com/SrayaSreedharan" className="SocialMediaBtn" target="_blank" rel="noopener noreferrer">
          <div className="SocialMediaIconWrapper">
            <img src={git} className="SocialMediaIcon" alt="GitIcon" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
