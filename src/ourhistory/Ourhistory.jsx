// OurHistory.jsx
import React from 'react';
import './index.css'; // Import your CSS file
import Astro from './public/image-3@2x.png'
import BG from './public/moonlandingspaceshipimageswhilelandingupscaled-4-1@2x.png'


const OurHistory = () => {
  return (
    <div className="desktop-5">
      <img
        className="moon-landing-spaceship-images-icon"
        alt=""
        src={BG}
      />

      <div className="our-history">OUR HISTORY</div>
      <div className="rectangle-parent">
        <div className="group-child"></div>
        <img
          className="image-3-icon"
          alt=""
          src={Astro}
        />

        <div className="the-physics-and">
          The Physics and Astronomy Club IIT Delhi, is the successor to the
          Astronomy Club of Indian Institute of Technology, Delhi, which had
          been established in 2011, and had been operational under Technocracy,
          CAIC, IIT Delhi
        </div>
        <img className="astronomy-club-inv-1-icon" alt="" />
      </div>
    </div>
  );
};

export default OurHistory;
