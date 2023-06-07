import React from 'react';
import CV from '../../assets/cv.pdf';
// import IMG from '../../assets/compiler1.jpg';
// import Port from '../../assets/Portfolio1.jpg';
// import Amazon from  '../../assets/Amazon1.png';

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa'
import ME from '../../assets/me.jpeg';
import './Home.css';

const Home = () => {
  return (
    <div>

    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>React Learner</h1>


        <div className="cta">
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>

    <div className="header__socials">
        <a href="https://www.linkedin.com/in/shivani-karna/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Shivani-Karna" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/profile.php?id=100012497558883" target="_blank"><FaFacebookSquare /></a>
    </div>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
    </div>
  )
}

export default Home