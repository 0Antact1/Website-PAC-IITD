import React from 'react';

import WhatWeDo from '../components/what-we-do/Whatwedo.jsx';
import Announce from '../components/announce/announce.jsx';
import Bottom from '../components/bottom/Bottom';
import WelcomeBanner from '../components/welcome/welcomeBanner.jsx';
import Footer from '../components/footer/Footer.jsx';
import PastEvents from '../components/past-events/pastEvents.jsx';

import announceBanners from '../data/annouce'
import pastEventsData from '../data/pastEvents'
import whatDone from '../data/whatDone'

function Home() {
    return (
        <div>
            <WelcomeBanner/>
            <Announce announcer={announceBanners}/>
            <div className='bg-[url(assets/img/astronaut-pixlr.png)] bg-cover bg-top'>
                <WhatWeDo Data={whatDone}/>
                <PastEvents events={pastEventsData}/>
                {/* <Team/> */}
                {/* <Bottom/> */}
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
