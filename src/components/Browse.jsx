import React from 'react';
import { LOGO } from '../utils/constant';
import photo from '../../public/RedProfile.png';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const images = [
  '../../public/default-blue.png',
  '../../public/default-green.png',
  '../../public/default-red.png',
  '../../public/default-slate.png',
];
const imgsrc = images[Math.floor(Math.random() * 4)];
console.log(imgsrc);

export default function Browse() {
  const user = useSelector((state) => state?.user);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        // navigate('/error')
      });
  };

  return (
    <div className=' absolute z-10 p-4 bg-gradient-to-b from-black w-screen h-screen flex justify-between text-white'>
      <div className=''>
        <img src={LOGO} className='h-12' />
      </div>
      <div className='flex '>
        <img
          src={user.photoURL}
          className='h-12 w-12 rounded-md bg-cover bg-center'
        />
        <button
          className='text-white bg-transparent -tracking-tighter font-semibold p-1 items-center h-12 ml-2 rounded-md
          transition hover:-translate-y-1 hover:text-red-600 capitalize '
          onClick={handleSignout}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
