import './welcome.css';
import './moon-landing.png';
import rockImage from './rock_image.png'; // Adjust the filename and extension
import astronaut from './astronaut.png'
import React, { useState } from 'react';

export default function Welcome() {
  const [isImageVisible, setImageVisible] = useState(false);

  const handleMouseEnter = () => {
    setImageVisible(true);
  };

  const handleMouseLeave = () => {
    setImageVisible(false);
  };

  return (
    <div className='welcome'>
      <div
        className='image-container'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={rockImage} alt='Rock' className='rock-image' />
        {isImageVisible && (
          <img src={astronaut} alt='astronaut' className='astronaut' />
        )}
      </div>
      <h2 className='text'>Welcome to Physics and Astronomy Club</h2>
      <div className='overlay'>
        <p>See what others don't</p>
      </div>
    </div>
  );
}
