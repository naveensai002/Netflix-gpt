import React from 'react';
import play from '../assets/play.png';

function VideoTitle({ title, overview }) {
  return (
    <div className='pt-36 w-screen aspect-video bg-gradient-to-r from-black px-12 absolute text-white'>
      <div className='text-3xl font-bold '>{title}</div>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex gap-x-4  '>
        <button
          className=' flex flex-row transition-all
        items-center rounded-lg hover:bg-gradient-to-r from-black p-2 bg-red-500 text-black'
        >
          <img src={play} alt='play' className='mx-2' /> Play
        </button>

        <button
          className='flex flex-row transition-all
        items-center rounded-lg hover:bg-gradient-to-l from-black p-2 bg-red-500 text-black'
        >
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
