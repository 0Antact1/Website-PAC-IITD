import React, { useState, useEffect } from 'react';
import './cosmiconBanner.css'; // Import your CSS file

const CosmiconBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    // Hide banner after 1 second when the page loads
    const timeoutId = setTimeout(() => {
      setIsBannerVisible(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-cover bg-center bg-[url('assets/img/moon-lander.png')]">
      <div className='relative w-screen h-screen bg-black bg-opacity-50' />
      <div className="banner">
        <div className={`text-center ${isBannerVisible ? 'shrink' : ''}`}>
          <h1 className={`text-white ${isBannerVisible ? '' : ''}`}>
            Cosmicon
          </h1>
        </div>
      </div>

      <div className={`about-card opacity-80 relative mt-80 ${isBannerVisible ? 'translate-y-2/3' : ''}`}>
        <div className="about-section">
          <h2 className="text-4xl font-bold">About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        </div>
      </div>
    </div>
  );
};

export default CosmiconBanner;
