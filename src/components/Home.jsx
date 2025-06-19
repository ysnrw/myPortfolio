import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { homeData } from '../data/homeData';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm <br /> <span>{homeData.name}</span></h1>
        <h3>{homeData.title}</h3>
        <p>{homeData.intro}</p>
        
        <div className="btn-box">
          {homeData.buttons.map((button, index) => (
            <a key={index} href={button.href}>{button.text}</a>
          ))}
        </div>
      </div>

      <div className="home-sci">
        {homeData.socials.map((social, index) => (
          <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" style={{ '--delay': social.delay }}>
            <FontAwesomeIcon icon={social.icon} />
          </a>
        ))}
      </div>
      
      <div className="home-image">
        <img src={homeData.profileImage} alt="Profile Image" />
      </div>
    </section>
  );
};

export default Home;