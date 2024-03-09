import React from 'react';
import { MDBCarouselItem } from 'mdb-react-ui-kit';

const SlideHalf = ({group,index}) => {
    return (
    <MDBCarouselItem key={index} itemId={index + 1}>
        {/* Top panel */}
        <div className="md:pr-20 lg:pr-40 h-[30vh] p-10 w-full flex">
            <div className="flex-1 flex flex-col justify-end">
                {/* 1st part */}
                <div className="flex flex-col md:flex-row text-center items-center justify-end">
                    <div className="text-center sm:text-left">
                    {/* Adjust text alignment and font size based on screen size */}
                    <h5 className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{group[0].name}</h5>
                    <h6 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{group[0].role}</h6>
                    </div>
                    <img
                    src={group[0].image}
                    alt={group[0].name}
                    className="md:ml-8 lg:ml-16 w-20 sm:w-24 md:w-40 h-20 sm:h-24 md:h-40 rounded-circle"
                    // Adjust margin and image size based on screen size
                    />
                </div>
            </div>



            {group.length>1 ? <div className="flex-1 flex flex-col justify-end">
                {/* 2nd part */}
                <div className="flex flex-col md:flex-row items-center justify-end">
                <div className="text-center">
                    <h5 className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{group[1].name}</h5>
                    <h6 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{group[1].role}</h6>
                </div>
                <img
                    src={group[1].image}
                    alt={group[1].name}
                    className="md:ml-8 lg:ml-16 w-20 sm:w-24 md:w-40 h-20 sm:h-24 md:h-40 rounded-circle"
                />
                </div>
            </div>
            : <></>}
        </div>

        {/* Middle panel */}
        <div className='h-[20vh]'/>
      
        {/* Bottom panel */}
        <div className="md:pl-20 lg:pl-40 h-[30vh] p-10 w-full flex">
            {group.length>2 ? <div className="flex-1">
                {/* 3rd part */}
                <div className="flex flex-col md:flex-row items-center">
                <img
                    src={group[2].image}
                    alt={group[2].name}
                    className="md:ml-8 lg:ml-16 w-20 sm:w-24 md:w-40 h-20 sm:h-24 md:h-40 rounded-circle"
                />
                <div className="text-center mt-2 md:mt-0 md:ml-16">
                    <h5 className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        {group[2].name}</h5>
                    <h6 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{group[2].role}</h6>
                </div>
                </div>
            </div>
            : <></>}

            {group.length>3? <div className="flex-1">
                {/* 4th part */}
                <div className="flex flex-col md:flex-row items-center">
                <img
                    src={group[3].image}
                    alt={group[3].name}
                    className="md:ml-8 lg:ml-16 w-20 sm:w-24 md:w-40 h-20 sm:h-24 md:h-40 rounded-circle"
                />
                <div className="text-center mt-2 md:mt-0 md:ml-16">
                    <h5 className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        {group[3].name}</h5>
                    <h6 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{group[3].role}</h6>
                </div>
                </div>
            </div> 
            : <></>}
        </div>

    </MDBCarouselItem>
    );
}

export default SlideHalf;
