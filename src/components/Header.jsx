import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDarkMode, toggleTheme }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 10);

      if (currentScroll <= 0) {
        setHeaderHidden(false);
      } else if (currentScroll > lastScroll && !headerHidden) {
        setHeaderHidden(true);
      } else if (currentScroll < lastScroll && headerHidden) {
        setHeaderHidden(false);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll, headerHidden]);

  useEffect(() => {
    if (!menuActive) return;
    const closeMenu = () => setMenuActive(false);
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    window.addEventListener('scroll', closeMenu);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', closeMenu);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuActive]);

  return (
    <header 
      ref={headerRef} 
      className={`${headerHidden ? 'hide' : ''} ${isScrolled ? 'scrolled' : ''}`}
    >
      <Link to="/" className="logo" onClick={() => setMenuActive(false)}>YS</Link>

      <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <Link className="nav-link" to="/#home" onClick={() => setMenuActive(false)}>Home</Link>
        <Link className="nav-link" to="/#about" onClick={() => setMenuActive(false)}>About</Link>
        <Link className="nav-link" to="/#skills" onClick={() => setMenuActive(false)}>Skills</Link>
        <Link className="nav-link" to="/#portfolio" onClick={() => setMenuActive(false)}>Portfolio</Link>
        <Link className="nav-link" to="/#contact" onClick={() => setMenuActive(false)}>Contact</Link>
        
        <div className="theme-toggle" onClick={toggleTheme}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} style={{ color: isDarkMode ? '#f8f9fa' : '#212529', position: 'absolute', top: '50%', left: '-25px', transform: 'translateY(-50%)' }} />
          <div className="theme-toggle-ball"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;