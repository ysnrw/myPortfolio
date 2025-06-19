import React from 'react';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { footerData } from '../data/footerData';

const Footer = () => {
  const scrollToTop = () => {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100
    });
  }

  return (
    <footer className="new-footer">
      <div className="footer-content">
        <div className="footer-column footer-about">
          <h4 className="footer-logo">Yusuf Nurwahid</h4>
          <p>{footerData.bio}</p>
          <div className="footer-socials">
            {footerData.socials.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.icon.iconName}>
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column footer-links">
          <h4>Quick Links</h4>
          <ul>
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <span onClick={() => scrollToSection(link.section)}>{link.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact Info</h4>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {footerData.contactInfo.address}</p>
          <p><FontAwesomeIcon icon={faPhone} /> {footerData.contactInfo.phone}</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> {footerData.contactInfo.email}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; {new Date().getFullYear()} by Yusuf Nurwahid | All Rights Reserved.</p>
        <div className="footer-iconTop" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;