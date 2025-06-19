import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link as RouterLink } from 'react-router-dom';

const Header = ({ isDarkMode, toggleTheme }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleHeaderVisibility = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setHeaderHidden(false);
        return;
      }
      if (currentScroll > lastScroll && !headerHidden) {
        setHeaderHidden(true);
      } else if (currentScroll < lastScroll && headerHidden) {
        setHeaderHidden(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleHeaderVisibility);
    return () => window.removeEventListener('scroll', handleHeaderVisibility);
  }, [lastScroll, headerHidden]);

  useEffect(() => {
    if (!menuActive) return;

    const closeMenu = () => {
      setMenuActive(false);
    };

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
    <header ref={headerRef} className={headerHidden ? 'hide' : ''}>
      <RouterLink to="/" className="logo">YS</RouterLink>

      <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="/#home">Home</a>
        <a href="/#about">About</a>
        <a href="/#skills">Skills</a>
        <a href="/#portfolio">Portfolio</a>
        <a href="/#contact">Contact</a>

        <div className="theme-toggle" onClick={toggleTheme}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} style={{ color: isDarkMode ? '#f8f9fa' : '#212529', position: 'absolute', top: '50%', left: '-25px', transform: 'translateY(-50%)' }} />
          <div className="theme-toggle-ball"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;