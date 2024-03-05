import React, { useEffect, useState } from 'react';
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

    document.addEventListener('mousemove', generateStars);

    return () => {
      document.removeEventListener('mousemove', generateStars);
    };
  }, []);

  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-screen h-screen">

      {/* Background with stars rng */}
      <div
        id="star-container"
        className="absolute inset-0 bg-gray-900"
      ></div>
      <div className="absolute inset-0 bg-cover bg-center bg-[url('assets/img/pixlr-supernova.png')] opacity-70"></div>

      {/* <div className='relative group'> */}


      <div className="absolute bottom-0 left-0 w-7/8 h-1/2 p-40 mb-20 text-white"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        >

        {/* <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-5">Welcome to</p>
        <p className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-uppercase font-bold mb-3">Physics and Astronomy Club</p>
        <p className="sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-uppercase font-bold">iit delhi</p> */}

        <p className="lg:text-3xl xl:text-5xl 2xl:text-6xl mb-5">Welcome to</p>
        <p className="lg:text-4xl xl:text-6xl 2xl:text-7xl text-uppercase font-bold mb-3">Physics and Astronomy Club</p>
        <p className="lg:text-xl xl:text-3xl 2xl:text-4xl text-uppercase font-bold">iit delhi</p>

      </div>

      {/* Visible on hover */}
      {/* <div className="absolute top-0 right-0 p-20 mt-40 mr-30 text-2xl text-red-100"
        style={{
          opacity: (isHovered) ? 0.8 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}>
            See what others don't!
      </div> */}

    </div>
  );
};


export default WelcomeBanner;

