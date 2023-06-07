import React from 'react'
import './About.css';
import {FaAward } from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
// import {VscFolderLibrary} from 'react-icons/vsc';
import aboutMe from '../../assets/me_about.JPG';

const About = () => {
  return (
    <div>
        
<section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 months Working </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Company/Organisation Involved</h5>
              <small>Open Knowledge Nepal</small>
              <small>Entegra Solution</small>
              <small>Women Leaders In Technology(WLiT)</small>
              <small>NAAMI</small>
            </article>
            {/* <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>45+ Completed</small>
            </article> */}
          </div>
          <p>
            Hey, I'm <strong>React Learner</strong>, a Computer Engineer! Graduate from Lalitpur Engineering College,TU</p>
            <br />
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
</section>   
    </div>
 
  )
}

export default About