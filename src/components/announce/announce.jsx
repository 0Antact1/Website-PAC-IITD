import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const Announce = () => {
  return (
    <div className="bg-black p-6 shadow-md relative">

      <div className="-mt-6 text-white text-center">
        <h1 className="text-4xl font-bold mt-4 mb-2">Announcements</h1>
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="mx-auto mt-10 -mb-10 overflow-hidden w-11/12 border-8 border-spacing-12 rounded-2xl border-red-100 border-opacity-60">
        <MDBCarousel showControls showIndicators className="">
          <MDBCarouselItem itemId={1}>
            <img src="https://mdbootstrap.com/img/new/slides/041.jpg" className="d-block w-100 rounded-lg" alt="..." />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src="https://mdbootstrap.com/img/new/slides/042.jpg" className="d-block w-100 rounded-lg" alt="..." />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src="https://mdbootstrap.com/img/new/slides/043.jpg" className="d-block w-100 rounded-lg" alt="..." />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>

    </div>
  );
};

export default Announce;
