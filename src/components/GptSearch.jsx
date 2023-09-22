import React from 'react';
import GptSearchbar from './GptSearchbar';
import GptMovieSuggestions from './GptMovieSuggestions';

function GptSearch() {
  return (
    <div className='bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg)] w-full h-screen -z-10 '>
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
