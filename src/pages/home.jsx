import React from 'react';

import WhatWeDo from '../what-we-do/Whatwedo';
import Pastevent from '../past-event/Pastevent';
import Team from '../team-page/Team';
import Announce from '../components/announce/announce.jsx';
import OurHistory from '../ourhistory/Ourhistory';
import Bottom from '../bottom/Bottom';
import WelcomeBanner from '../components/welcome/welcomeBanner.jsx';


function Home() {
    return (
        <div>
            <WelcomeBanner/>
            <Announce/>
            <WhatWeDo/>
            <Pastevent/>
            <OurHistory/>
            {/* <Team/> */}
            <Bottom/>
        </div>
    );
}

export default Home;
