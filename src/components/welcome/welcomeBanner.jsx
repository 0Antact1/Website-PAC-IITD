import React, { useEffect } from 'react';
import "./star.css"

const WelcomeBanner = () => {
  useEffect(() => {
    const starContainer = document.getElementById('star-container');

    const generateStars = (event) => {
      
      const numberOfStars = 50;

      // Clear existing stars
      starContainer.innerHTML = '';

      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        starContainer.appendChild(star);
      }
    };

    // Add event listener for mousemove
    document.addEventListener('mousemove', generateStars);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', generateStars);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen">

      {/* Background with stars rng */}
      <div
        id="star-container"
        className="absolute inset-0 bg-gray-900"
      ></div>
      <div className="absolute inset-0 bg-cover bg-center bg-[url('assets/img/pixlr-supernova.png')] opacity-70"></div>


      <div className="absolute bottom-0 left-0 w-3/4 h-1/2 p-40 mb-20 text-white">
        <div className="text-5xl mb-6">Welcome to</div>
      
        <div className="text-6xl text-uppercase font-bold mb-2">Physics and Astronomy Club</div>
        
        <div className="text-2xl text-uppercase font-bold">iit delhi</div>
        
      </div>

    </div>
  );
};


export default WelcomeBanner;

