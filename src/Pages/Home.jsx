import React from 'react'
import ContactMe from './Contactme'
import Education from './Education'
import Experience from './Experience'
import Landing from './Landing'
import Footer from '../Components/Footer'
import About from './About'
import Skills from './Skills'
import Project from './Projects'

const Home = () => {
  return (
    <div>
        <Landing/>
        <About/>
        <Experience/>
        <Skills/>
        <Project/>
        <Education/>
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default Home
