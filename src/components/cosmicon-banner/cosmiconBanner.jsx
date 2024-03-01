import React, { useState, useEffect } from 'react';


const CosmiconBanner = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);


  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsBannerVisible(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className="h-screen relative overflow-hidden items-center justify-center">
      
      {/* Fading background */}
      <div className={`absolute inset-0 bg-black bg-cover bg-center transition-all duration-[2s] 
          ${animationComplete ? 'opacity-0' : 'opacity-100'}`} />


      <div className={`text-white text-uppercase text-8xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        transition-all duration-500 ${animationComplete ? 'opacity-0' : ''}`}
        style={{ letterSpacing: '3px'}}>
          Cosmicon
      </div>

      <div className={`text-white text-uppercase text-8xl font-bold absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[2s]
        ${animationComplete ? ' top-40 transform scale-75' : 'top-1/2'}`}
        style={{ textShadow: '0 0 12px rgba(40, 191, 255, 0.8)',
                letterSpacing: '3px'}}>
            Cosmicon
      </div>

      <div className={`relative mt-80 mx-10 h-full mb-[-100px] bg-opacity-10 bg-white border-2 rounded-2xl shadow-lg p-20
        opacity-80 transition-transform duration-1000 text-white shadow-orange-300
         ${isBannerVisible ? 'translate-y-full' : ''}`}>
        
        <div className="text-center">
          <h2 className="text-4xl font-bold">About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
        </div>
      
      </div>

    </div>
  );
};

// const CosmiconBanner = () => {
//   const [animationComplete, setAnimationComplete] = useState(false);

//   useEffect(() => {
//     // Simulate a delay to trigger the animation after 1 second
//     const timeout = setTimeout(() => {
//       setAnimationComplete(true);
//     }, 1000);

//     // Clear the timeout on component unmount
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className={`h-screen flex items-center justify-center relative 
//         ${animationComplete ? "bg-cover bg-center bg-[url('assets/img/starry-black.jpg')]" : 'bg-black'}`}>
       

//       <div className={`text-white text-6xl font-bold absolute transition-all duration-1000 
//           ${animationComplete ? 'top-1/4 transform scale-75' : 'top-1/2'}`}>
//             Cosmicon
//       </div>

//     </div>
//   );
// };

export default CosmiconBanner;
