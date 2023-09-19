import React, { useCallback, useEffect, useState } from 'react';
import { LOGO, options } from '../utils/constant';
import photo from '../../public/RedProfile.png';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarItem from './NavbarItem';

import {
  BellIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';
import useNowPlayingHooks from '../hooks/useNowPlayingHooks';

const images = [
  '../../public/default-blue.png',
  '../../public/default-green.png',
  '../../public/default-red.png',
  '../../public/default-slate.png',
];
export const imgsrc = images[Math.floor(Math.random() * 4)];
console.log(imgsrc);
const TOP_OFFSET = 66;

export default function Browse() {
  const user = useSelector((state) => state.user);

  // console.log(user);
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  // const [movies, setMovies] = useState([]);

  /* movie fetch call*/
  //used the logic in custom hook
  const data = useNowPlayingHooks();
  console.log(data);
  /* */

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  function toggleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  return (
    <div className=' absolute z-40 p-4 bg-gradient-to-b from-black w-screen h-screen flex justify-between text-white'>
      <div className=''>
        <img src={LOGO} className='h-12' />
      </div>

      {/* nav icon items */}
      <div
        className='
        flex
        flex-row 
        ml-8
        gap-7
        hidden
        justify-center
        mx-auto
        lg:flex
        cursor-pointer'
      >
        <NavbarItem label='Home' />
        <NavbarItem label='Series' />
        <NavbarItem label='Films' />
        <NavbarItem label='New 6 Popular' />
        <NavbarItem label='My List' />
        <NavbarItem label='Browse by languages' />
      </div>

      {/* end of nav icon items */}

      {/* sign out button */}
      {/* <div className=' relative flex lg:hidden flex-row  gap-2 ml-8 cursor-pointer '>
        <img
          src={user?.photoURL}
          className='h-12 w-12 rounded-md bg-cover bg-center cursor-pointer'
        />
        <button
          className='text-white bg-transparent -tracking-tighter font-semibold p-1 items-center h-12 ml-2 rounded-md
          transition hover:-translate-y-1 hover:text-red-600 capitalize  cursor-pointer'
          onClick={handleSignout}
        >
          Sign out
        </button>
      </div> */}

      <div
        className='
      lg:hidden md:hidden flex flex-row cursor-pointer
      '
      >
        <p className='text-white text-sm'>Browse</p>
        <ChevronDownIcon
          className='h-6 gap-x-2 cursor-pointer'
          onClick={() => toggleMobileMenu()}
        />
        <MobileMenu logout={handleSignout} visible={mobileMenu} />
      </div>

      <div className='hidden lg:flex flex-row h-6 ml-auto mx-auto gap-7 items-center mr-4'>
        <div
          className='
        text-gray-200 hover:text-gray-300 cursor-pointer transition
        '
        >
          <MagnifyingGlassIcon className='w-6' />
        </div>
        <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
          <BellIcon className='w-6' />
        </div>
        <div
          onClick={toggleAccountMenu}
          className=' flex flex-row justify-center m-auto'
        >
          <div className='flex  flex-row ml-2 gap-2 cursor-pointer'>
            <img
              src={imgsrc}
              alt='user-profile'
              className='h-8 w-8 rounded-md'
            />
            <ChevronDownIcon
              className={`w-4  m-auto flex cursor-pointer text-white fill-white transition ${
                showAccountMenu ? 'rotate-180' : 'rotate-0'
              }`}
            />
            <AccountMenu
              visible={showAccountMenu}
              user={user?.displayName || 'Naveen'}
              signOut={handleSignout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
