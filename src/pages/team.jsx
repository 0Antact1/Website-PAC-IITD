import React from 'react';
import ContentA from '../components/content/contenta';
import ContentB from '../components/content/contentb';
import FlippableCard from '../components/cards/flippableCard';
import SectionCard from '../components/cards/sectionCard';

const TeamPage = () => {
    return (
        <div>
            <ContentA/>
            <ContentB/>
            <SectionCard/>
            <FlippableCard frontContent={<ContentA/>} backContent={<ContentB/>} />
        </div>
    );
}

export default TeamPage;
