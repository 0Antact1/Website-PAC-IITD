import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBContainer } from 'mdb-react-ui-kit';
import SlideHalf from './slideHalf';

function splitArrayIntoGroups(array, groupSize) {
    const result = [];
    for (let i = 0; i < array.length; i += groupSize) {
      result.push(array.slice(i, i + groupSize));
    }
    return result;
  }

const TeamCarousel = ({ teamMembers }) => {
  
  const slideGroups = splitArrayIntoGroups(teamMembers,4);

  return (
    <MDBContainer fluid className="mt-5">
      <MDBCarousel className='' showControls interval={5000}>

        {slideGroups.map((group,index) => (
            <SlideHalf group={group} index={index} />
        ))}
      
      </MDBCarousel>
    </MDBContainer>
  );
};

export default TeamCarousel;