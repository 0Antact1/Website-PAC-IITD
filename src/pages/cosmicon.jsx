import React from 'react';
import SectionCard from '../components/cards/sectionCard';
import eventCards from '../data/eventCards';

const Cosmicon = () => {
    return (
        <div className="bg-cover bg-center 
            bg-[url('assets/img/orange-land-v2.jpg')]
            bg-[url(https://media.giphy.com/media/xUPGcfzaX9hFFQJYre/giphy.gif)]sss">
            <div className="fixed inset-0 z-[-1] " />

            <div className='h-[50vh] w-full text-center justify-center'>
                Cosmicon
                <img />
            </div>
            
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-xl lg:text-3xl 2xl:text-6xl w-4/5 text-center
                 bg-opacity-50 p-6 bg-[#cc574f] rounded-full text-white mt-8">Events</h1>
                <SectionCard data={eventCards}/>
            </div>

        </div>
    );
}

export default Cosmicon;
