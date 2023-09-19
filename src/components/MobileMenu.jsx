import React from 'react';

export default function MobileMenu({ visible, logout }) {
  if (!visible) {
    return null;
  }
  return (
    <div
      className='cursor-pointer
     bg-gradient-to-b from-gray w-56 mt-5 absolute top-8 right-0 mx-auto py-5 flex-col border-2 border-gray-800 flex
     rounded-lg 
     '
    >
      <div
        className='
        cursor-pointer
        flex 
        flex-col 
        gap-4
        '
      >
        <div
          className='
          cursor-pointer
           px-3 text-center
           text-white
           hover:underline
'
        >
          Home
        </div>

        <div
          className='
          cursor-pointer
           px-3 text-center
           text-white
           hover:underline
'
        >
          Series
        </div>

        <div
          className='
          cursor-pointer
           px-3 text-center
           text-white
           hover:underline
'
        >
          Films
        </div>

        <div
          className='
          cursor-pointer
           px-3 text-center
           text-white
           hover:underline
            '
          onClick={logout}
        >
          Logout
        </div>
      </div>
    </div>
  );
}
