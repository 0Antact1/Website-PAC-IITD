import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const Announce = ({announcer}) => {
  return (
    <div>
      {/* <div className="h-4 -mb-4 w-screen bg-gradient-to-r from-[rgb(20,20,20)] via-[rgb(150,40,20)] to-[rgb(20,20,20)]"></div> */}

      <div className="bg-[rgb(15,15,44)] bg-[url(assets/img/orange-land-v3.jpg)] bg-cover p-6 shadow-md relative">

        <div className="-mt-6 -ml-6 w-screen p-1 text-white text-center bg-[rgb(0,0,0)] bg-opacity-40">
          <h1 className="text-4xl 2xl:text-6xl font-bold mt-4 mb-2">Announcements</h1>
          <p className="text-sm"> </p>
        </div>

        

        <div className="mx-auto mt-10 overflow-hidden w-5/6 border-8 border-spacing-12 rounded-2xl border-red-100 border-opacity-60">

          <MDBCarousel showControls showIndicators className="">

            {announcer.map(announce => ( 
                <MDBCarouselItem itemId={announce.id}>
                  <img src={announce.image} className="d-block h-[40rem] w-100 rounded-lg" alt="..." />
                  <MDBCarouselCaption>
                    <h5>{announce.title}</h5>
                    <p>{announce.caption}</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
            ))}

            {/* <MDBCarouselItem itemId={1}>
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
            </MDBCarouselItem> */}

          </MDBCarousel>
        </div>
      </div>
    </div>
  );
};

export default Announce;
