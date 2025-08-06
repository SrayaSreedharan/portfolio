import React from 'react';
import './Landing.css'; 

const Landing = () => {
  return (
    <>
      <div id="header-placeholder"></div>
      <div className="hero">
        <div className="container">
          <div className="heroContainer">
            <div className="bannerTitle">
              I'M<span className="heroName">&nbsp;&nbsp;SRAYA SREEDHARAN K</span>
            </div>
            <div className="bannerSubtitle">REACT JS DEVELOPER</div>
            <div className="buttonContainer">
              <div className="primaryBtnwrapper">
                <a href="#ContactMe" className="primaryButton">Contact Me</a>
                <a href="/srayasreedharan (3).pdf" download className="resumeButton">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
