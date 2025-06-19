import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillsData } from '../data/skillsData';

const SkillBox = ({ skill, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <div ref={ref} className={`skill-box ${inView ? 'in-view' : ''}`} style={{transitionDelay: `${index * 100}ms`}}>
      <FontAwesomeIcon icon={skill.icon} />
      <h3>{skill.title}</h3>
      <p>{skill.desc}</p>
      <div className="skill-progress">
        <div 
          className="progress-bar" 
          data-progress={skill.progress}
          style={{ width: inView ? skill.progress : '0' }}
        ></div>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <SkillBox key={skill.title} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;