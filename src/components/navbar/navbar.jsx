import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../routes";

import logo from '../../assets/img/pac-logo-transparent.png'

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

  return (
    <>
      <div className="bg-black p-4 flex fixed top-0 w-full z-10 justify-between items-center bg-opacity-50"
        style={{
          opacity: (scrollingDown && isSticky) ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <div className='justify-start items-center'>
          <Link to="/">
            {/* <div className="h-auto bg-center bg-cover bg-[url('assets/img/pac-logo-transparent.png'')]" /> */}
            <img className="px-8 h-10 w-auto" src={logo} alt="PAC logo" />
          </Link>
        </div>

        <div className="flex items-center">
          {ROUTES.map(({path, element, icon, text}) => (

            <Link to={path} 
              // target={element}
              className="ml-2 bg-gray-700 text-white px-4 py-2 rounded cursor-pointer bg-opacity-60"
              >
              {text}
            </Link>

          ))}
        </div>
        
      </div>

      {/* // transparent topbar */}

      <div className="bg-gray-800 p-4 flex justify-end items-center bg-opacity-0" 
        style={{
          opacity: (scrollingDown && isSticky) ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}>
          <button className='ml-2 bg-gray-700 text-white px-4 py-2 rounded cursor-pointer opacity-0'>placeholder</button>
      </div>

    </>
  );
};

export default Navbar;
