import React from 'react';
import CosmiconBanner from '../components/cosmicon-banner/cosmiconBanner';
import BubbleText from '../components/bubble-text/bubbletext';
import SectionCard from '../components/cards/sectionCard';

import eventCards from '../data/eventCards';

const Cosmicon = () => {
    return (
        <div>
            <div className="fixed inset-0 z-[-1] bg-cover bg-center bg-[url('assets/img/starry-black.jpg')]" />

            <CosmiconBanner/>
            <BubbleText text={"nigga"}/>
            
            <div className="absolute bg-white bg-opacity-10 w-full flex flex-col items-center justify-center">
                <h1 className="text-6xl text-white mt-8">Events</h1>
                <SectionCard data={eventCards}/>
            </div>

        </div>
    );
}

export default Cosmicon;
