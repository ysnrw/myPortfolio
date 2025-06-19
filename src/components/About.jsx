import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { aboutData } from '../data/aboutData';

const About = () => {
  const { ref: refImg, inView: inViewImg } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: refText, inView: inViewText } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      
      <div className="about-content">
        <div ref={refImg} className={`about-img ${inViewImg ? 'in-view' : ''}`}>
          <img src={aboutData.image} alt="About Image" />
        </div>
        
        <div ref={refText} className={`about-text ${inViewText ? 'in-view' : ''}`}>
          <h3>{aboutData.heading}</h3>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          
          <div className="skills-list">
            {aboutData.skills.map(skill => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-icon"><FontAwesomeIcon icon={skill.icon} /></div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;