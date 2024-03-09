import React from 'react';

import WhatWeDo from '../what-we-do/Whatwedo';
import Pastevent from '../past-event/Pastevent';
import Announce from '../components/announce/announce.jsx';
import Bottom from '../components/bottom/Bottom';
import WelcomeBanner from '../components/welcome/welcomeBanner.jsx';
import Footer from '../components/footer/Footer.jsx';
import PastEvents from '../components/past-events/pastEvents.jsx';

import announceBanners from '../data/annouce'
import pastEventsData from '../data/pastEvents'

function Home() {
    return (
        <div>
            <WelcomeBanner/>
            <Announce announcer={announceBanners}/>
            <div className='bg-black'>
                <WhatWeDo/>
                {/* <Pastevent/> */}
                <PastEvents events={pastEventsData}/>
                {/* <Team/> */}
                {/* <Bottom/> */}
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
