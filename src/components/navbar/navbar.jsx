import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../routes";

import logo from '../../assets/img/pac-logo-transparent.png'
import { MDBIcon } from 'mdb-react-ui-kit';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 100;

      setScrollingDown(offset > scrollPosition);
      setScrollPosition(offset);

      setIsSticky(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-black p-4 flex fixed top-0 w-full z-10 justify-between items-center bg-transparent"
      style={{
        opacity: (scrollingDown && isSticky) ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div className='justify-start items-center'>
        <Link to="/">
          {/* <div className="h-auto bg-center bg-cover bg-[url('assets/img/pac-logo-transparent.png'')]" /> */}
          <img className="px-4 md:px-8 h-8 md:h-10 w-auto" src={logo} alt="PAC logo" />
        </Link>
      </div>

      <div className="hidden md:flex items-center">
        {/* map links to pages in navbar if text (else spare) */}
        {ROUTES.map(({path, text, link}) => (
          text ? (
            path ?
            <Link to={path} 
            // target={element}
            className="ml-2 bg-gray-700 text-white px-4 py-2 rounded cursor-pointer bg-opacity-20"
            >
            {text}
            </Link> 
            :
            <a href={link} target="_blank" rel="noopener noreferrer" 
              className="ml-2 bg-gray-700 text-white px-4 py-2 rounded cursor-pointer bg-opacity-20">
              {text}
            </a>
          ) : <></>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-white hover:text-gray-300 p-1 focus:outline-none"
            onClick={toggleMobileMenu}>
          {/* You can use a hamburger icon or any other icon for the mobile menu */}
          <MDBIcon icon="bars" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-black bg-opacity-50">
          {/* <div className='mt-16 bg-opacity-20 w-full border-b border-gray-700' /> */}
          {ROUTES.map(({ path, text, link }) => (
            text ? (
              path ?
                <Link to={path}
                  className="block text-white px-4 py-2 border-b border-gray-700"
                >
                  {text}
                </Link>
                :
                <a href={link} target="_blank" rel="noopener noreferrer"
                  className="block text-white px-4 py-2 border-b border-gray-700"
                >
                  {text}
                </a>
            ) : <></>
          ))}
        </div>
      )}

    </div>
  );
};

export default Navbar;


{/* // transparent topbar */}

{/* <div className="bg-gray-800 p-4 flex justify-end items-center bg-opacity-0" 
  style={{
    opacity: (scrollingDown && isSticky) ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
  }}>
    <button className='ml-2 bg-gray-700 text-white px-4 py-2 rounded cursor-pointer opacity-0'>placeholder</button>
</div> */}