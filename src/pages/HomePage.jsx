import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = ({ isDarkMode, toggleTheme }) => {
  const location = useLocation();
  useEffect(() => {
    const sectionFromState = location.state?.scrollTo;
    const sectionFromHash = location.hash.substring(1);
    
    const sectionToScroll = sectionFromState || sectionFromHash;

    if (sectionToScroll) {
      setTimeout(() => {
        scroller.scrollTo(sectionToScroll, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -100 
        });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Yusuf Nurwahid - Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Yusuf Nurwahid, a passionate Full Stack Developer based in Indonesia, showcasing projects in React, Node.js, Go, and more." />
      </Helmet>
      
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;