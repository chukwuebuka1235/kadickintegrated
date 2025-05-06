// App.jsx or AOSExample.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSExample = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true     // only animate once
    });
  }, []);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 data-aos="fade-down">Hello with AOS</h1>
      <p data-aos="fade-left">
        This paragraph will slide in from the left when it enters the viewport.
      </p>
      <div style={{ height: '100vh' }}>   </div> {/* Add space to test scroll animation */}
    </div>
  );
};

export default AOSExample;


