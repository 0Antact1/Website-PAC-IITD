// import React from 'react';
// import ContentA from '../components/content/contenta';
// import ContentB from '../components/content/contentb';
// import FlippableCard from '../components/cards/flippableCard';
// import SectionCard from '../components/cards/sectionCard';

// const ContactPage = () => {
//     return (
//         <div>
//             <ContentA/>
//             <ContentB/>
//             <SectionCard/>
//             <FlippableCard frontContent={<ContentA/>} backContent={<ContentB/>} />
//         </div>
//     );
// }

// export default ContactPage;

import { MDBIcon } from "mdb-react-ui-kit";
import React from "react";

const ContactPage = () => {
    return (
    <div className="flex flex-col h-screen lg:h-auto lg:flex-row bg-[url(https://source.unsplash.com/cuddQwqncLc)] bg-cover bg-center">
      {/* Left Column */}
      <div className="flex-1 p-8 h-screen text-white flex flex-col justify-center">
        <div className="mx-20">
            <h1 className="text-lg lg:text-4xl font-bold mb-4">Contact Us</h1>
            <div className="mb-4">
              <a className="text-sm lg:text-xl text-blue-100 hover:text-blue-200" href="mailto:physicsastronomyclubiitd@gmail.com">
              <MDBIcon icon="envelope" className="me-1" /> Send an email !</a>
              {/* <a className="bg-black bg-opacity-50 rounded-full text-xl font-semibold px-4 py-2 text-slate-100"
               href="mailto:physicsastronomyclubiitd@gmail.com"
               target="_blank">Send an Email</a> */}
              <div className="flex mt-2 lg:mt-4 text-xs lg:text-base space-x-4">
                  <p><MDBIcon icon="phone" className="me-1" /> +91 98714 08889</p>
                  <p><MDBIcon icon="user" className="me-1" /> Samyak Jain</p>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <a
            href="https://chat.whatsapp.com/G2zoPpq33D4L0orYx9mTVm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[6rem] lg:w-[8rem] bg-green-600 hover:bg-green-700 border text-white lg:px-4 py-2 text-center text-xs lg:text-base rounded-full inline-block mr-4 mt-2 lg:mt-12"
            >
            WhatsApp
            </a>

            {/* Linktree Button */}
            <a
            href="https://linktr.ee/paciitd"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[6rem] lg:w-[8rem] bg-blue-600 hover:bg-blue-700 border text-white px-4 py-2 text-center text-xs lg:text-base rounded-full inline-block mr-4 mt-2"
            >
            Linktree
            </a>

            {/* CAIC Page */}
            <a
            href="https://caic.iitd.ac.in/pac"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[6rem] lg:w-[8rem] bg-red-700 hover:bg-red-800 border text-white px-4 py-2 text-xs lg:text-base text-center rounded-full inline-block mr-4 mt-2"
            >
            CAIC
            </a>
        </div>
      </div>


      {/* Right Column */}
      <div className="flex-1 lg:p-8 h-screen bg-gray-800 bg-opacity-80 text-white flex flex-col justify-center items-center">
        {/* Instagram iFrame */}
        <iframe className="rounded-lg mb-4 lg:mb-8"
          title="Instagram Post"
          src="https://www.instagram.com/p/C3tzQNtI7Qb/embed"
          width="50%"
          height="40%"
          frameborder="0"
          allowtransparency="true"
        ></iframe>
        
        {/* YouTube iFrame */}
        <iframe className="rounded-lg"
          title="YouTube Video"
          width="50%"
          height="40%"
          src="https://www.youtube.com/embed/XBzQn8zKT94?si=SCsOIiig4Y0uaEhS"
          frameborder="0"
          allowfullscreen
        ></iframe>

      </div>
    </div>
    )
}

export default ContactPage;