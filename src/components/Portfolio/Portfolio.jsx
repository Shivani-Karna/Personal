import React from 'react';
import './Portfolio.css';
import IMG from '../../assets/compiler1.jpg';
import Amazon from '../../assets/Amazon1.png';
import Port from '../../assets/Portfolio1.jpg';

const Portfolio = () => {
  return (
    <div>
               
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>House Price Prediction</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Shivani-Karna/Major-Project" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Amazon}  alt="" />
          </div>
          <h3>Amazon Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Shivani-Karna/Amazon_Clone" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Port}  alt="" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Shivani-Karna/Portfolio_" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>

        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG}  alt="" />
          </div>
          <h3>ASP.NET</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
            <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG}  alt="" />
          </div>
          <h3>ASP.NET</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
            <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG}  alt="" />
          </div>
          <h3>ASP.NET</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
            <a href="https://www.khemrajshrestha.com.np/coming-soon" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

      </div>
    </section>     
    </div>
  )
}

export default Portfolio