import React, {useState} from 'react'
import imgurl from './img.jpg'
import Data from './testimonial.json'
import Left from './Left.png'
import Right from './Right.png'

const WhatWeDo = () => {
    const [nextIndex, setnextIndex] = useState(1);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [prevIndex, setprevIndex] = useState(Data.length - 1);

  const handleNext = () => {
    setcurrentIndex((currentIndex) => (currentIndex + 1) % Data.length);
    setnextIndex((nextIndex) => (nextIndex + 1) % Data.length);
    setprevIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };
  const handlePrev = () => {
    setcurrentIndex((currentIndex) =>
      currentIndex === 0 ? Data.length - 1 : currentIndex - 1
    );
    setnextIndex((nextIndex) =>
      nextIndex === 0 ? Data.length - 1 : nextIndex - 1
    );
    setprevIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  };
  const { name, data, image } = Data[currentIndex];
  const { image: nextImage, data: nextData, name: nextname} = Data[nextIndex];
  const { image: prevImage, data: prevData, name: prevname } = Data[prevIndex];
  return (
    <div
    className="flex flex-col items-center justify-between h-screen w-scren"
    style={{ backgroundImage: `url(${imgurl})`, backgroundSize: 'cover' }}
  >
    <div className='flex h-[20%] justify-center items-center text-white text-center text-6xl'>WHAT WE DO</div>
    <div className='flex h-[50%] justify-around items-center'>
    <div className="h-[90%] hidden md:flex flex-col relative bg-red-50 w-[50%] md:w-[20%] rounded-3xl text-white justify-center items-center text-center border-2 border-black"
        style={{ backgroundImage: `url(${prevImage})`, backgroundSize: 'cover' }} >
             <div className='opacity-0 hover:opacity-100 text-black text-center flex justify-center items-center h-full w-full rounded-2xl bg-gray-300 transition-opacity duration-1000'>{prevData}</div>
            <div className='h-[10%] w-[50%] bg-gray-200 absolute bottom-[-5%] rounded-md flex justify-center items-center text-black border-2 border-black'>{prevname}</div>
    </div>
    <div className="h-[90%] bg-red-50 w-[40%] md:w-[20%] flex-col relative rounded-3xl text-white flex justify-center items-center text-center border-2 border-black"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
    > 
             <div className='opacity-0 hover:opacity-100 text-black text-center flex justify-center rounded-2xl items-center h-full w-full bg-gray-300 transition-opacity duration-1000'>{data}</div>
            <div className='h-[10%] w-[70%] md:w-[50%] bg-gray-200 absolute bottom-[-5%] rounded-md flex justify-center items-center text-black text-sm md:text-base border-2 border-black'>{name}</div>

    </div>
    <div className="h-[90%] bg-red-50 w-[40%] md:w-[20%] flex-col relative rounded-3xl text-white flex justify-center items-center text-center border-2 border-black"
            style={{ backgroundImage: `url(${nextImage})`, backgroundSize: 'cover' }}

    >
             <div className='opacity-0 hover:opacity-100 text-black text-center flex justify-center items-center h-full w-full bg-gray-300 rounded-2xl transition-opacity duration-1000'>{nextData}</div>
        <div className='h-[10%] w-[70%] md:w-[50%] bg-gray-200 absolute bottom-[-5%] rounded-md flex justify-center items-center text-black  text-sm md:text-base border-2 border-black'>{nextname}</div>

    </div>
    </div>
    <div className='h-[20%] flex justify-center items-center'>
        <button onClick={handlePrev} className='m-2'>
        <div className="flex items-center justify-center rounded-full h-[65px] w-[65px] border-[4px] border-black">
                    <img src={Left} className="" alt="" />
                  </div>
        </button>
        <button onClick={handleNext} className='m-2'>
        <div className="flex items-center justify-center rounded-full h-[65px] w-[65px] border-[4px] border-black">
                    <img src={Right} className="" alt="" />
                  </div>
        </button>
    </div>
  </div>
  )
}

export default WhatWeDo;
