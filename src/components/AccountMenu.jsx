import React from 'react';
import { imgsrc } from './Browse';
const AccountMenu = ({ visible, signOut, user }) => {
  const name = user;
  if (!visible) {
    return null;
  }

  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className='flex flex-col gap-3 cursor-pointer'>
        <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
          <img className='w-8 rounded-md' src={imgsrc} alt='' />
          <p className='text-white text-sm group-hover/item:underline cursor-pointer'>
            {name}
          </p>
        </div>
      </div>
      <hr className='bg-gray-600 border-0 h-px my-4' />
      <div
        onClick={() => signOut()}
        className='px-3 cursor-pointer text-center text-white text-sm hover:underline'
      >
        Sign out of Netflix
      </div>
    </div>
  );
};

export default AccountMenu;
