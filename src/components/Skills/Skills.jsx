import React from 'react'; 
import './Skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
  return (
    <div>

    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technical_Skills</h3>
          <div className="experience__content">

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>HTML</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>CSS</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Bootstrap</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>MaterialUI</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>JavaScript</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Figma</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Python</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>React</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article> 

          </div>
        </div>

        <div className="experience__backend">
        <h3>Soft_Skills</h3>
          <div className="experience__content">

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Presentation</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Public_Speaking</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Team management</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Leadership</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Problem Solving</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Adaptability</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Leadership</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article> 

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h6>Communication</h6>
              {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>  
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Skills