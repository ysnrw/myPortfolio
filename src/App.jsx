import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Preloader from './components/Preloader';

const particlesConfig = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#212529" }, 
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#212529", opacity: 0.2, width: 1 }, 
      move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
};

const particlesDarkConfig = {
  ...particlesConfig,
  particles: {
    ...particlesConfig.particles,
    color: { value: "#8338ec" },
    line_linked: { ...particlesConfig.particles.line_linked, color: "#8338ec" },
  }
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);
  
  const particlesInit = useCallback(async (engine) => { await loadSlim(engine); }, []);

  const floatingElements = [
    { className: 'float-1', style: { width: '100px', height: '100px', animationDelay: '0s' } },
    { className: 'float-2', style: { width: '150px', height: '150px', animationDelay: '2s' } },
    { className: 'float-3', style: { width: '80px', height: '80px', animationDelay: '4s' } },
    { className: 'float-4', style: { width: '120px', height: '120px', animationDelay: '1s' } }
  ];

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Preloader />
      <Particles id="particles-js" init={particlesInit} options={isDarkMode ? particlesDarkConfig : particlesConfig} />
      {floatingElements.map((el, i) => (
          <div key={i} className={`floating-element ${el.className}`} style={el.style}></div>
      ))}
      
      <Routes>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;