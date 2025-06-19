import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setVisible(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${fade ? 'fade-out' : ''}`}>
      <div className="loader"></div>
      <p>Wait...</p>
    </div>
  );
};

export default Preloader;