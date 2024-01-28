import React, {useState} from 'react'
import Data from '../what-we-do/testimonial.json'
import Left from '../what-we-do/Left.png'
import Right from '../what-we-do/Right.png'

const Announcement = () => {
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
  return (
    <div className='h-screen w-screen bg-slate-500'>
       <div className='flex h-[15%] justify-center items-center text-black text-center text-5xl md:text-6xl'>ANNOUNCEMENTS</div>
       <div className='h-[65%] w-screen flex justify-around items-center'>
            <div className='h-[90%] w-[45%] md:w-[30%]  rounded-3xl flex flex-col relative items-center justify-center border-black border-[3px]'>
                <div className='h-[60%] w-full bg-gray-100 rounded-t-3xl'>
                    <img src={image} alt="" className='object-cover h-full w-full rounded-t-3xl'/>
                </div>
                <div className='h-[40%] w-full rounded-b-3xl bg-gray-50 opacity-70 text-xs md:text-base'>{data}</div>
                <div className='h-[10%] w-[50%] bg-gray-200 absolute bottom-[-5%] rounded-xl flex justify-center items-center text-black border-black border-[3px] text-sm md:text-base'>{name}</div>

            </div>
        </div>
        <div className='h-[10%] flex justify-center items-center'>
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

export default Announcement;
