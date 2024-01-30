import React, { useState } from 'react';

const FlippableCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`absolute w-64 h-64 transform-style-preserve-3d cursor-pointer transition-transform ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className="absolute w-full h-full z-10 flex items-center justify-center font-bold text-2xl bg-blue-500 text-white pointer-events-auto">
        Front
      </div>
      <div className="absolute w-full h-full -z-10 back flex items-center justify-center font-bold text-2xl bg-red-500 text-white transform rotate-y-180 pointer-events-auto">
        Back
      </div>
    </div>
  );
};

export default FlippableCard;
