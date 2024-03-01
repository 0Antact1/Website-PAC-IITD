import React from 'react';

import WhatWeDo from '../what-we-do/Whatwedo';
import Pastevent from '../past-event/Pastevent';
import Team from './TeamYaj.jsx';
import Announce from '../components/announce/announce.jsx';
import Bottom from '../components/bottom/Bottom';
import WelcomeBanner from '../components/welcome/welcomeBanner.jsx';
import Footer from '../components/footer/Footer.jsx';


function Home() {
    return (
        <div>
            <WelcomeBanner/>
            <Announce/>
            <WhatWeDo/>
            <Pastevent/>
            {/* <Team/> */}
            <Bottom/>
            <Footer/>
        </div>
    );
}

export default Home;
