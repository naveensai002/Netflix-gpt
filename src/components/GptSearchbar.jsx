import React, { useRef } from 'react';
import { lang } from '../utils/languageConstant';
import { useSelector } from 'react-redux';
import { openai } from '../utils/openAi';

export default function GptSearchbar() {
  const configLang = useSelector((state) => state.config.lang);
  let searchText = useRef(null);

  const gptQuery =
    'Act as a Movie Recommendation system and suggest some movies for the query : ' +
    searchText.current.value +
    '. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

  const handleGptSearchClick = async () => {
    const getResults = async () => {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      console.log(chatCompletion.choices);
    };
    getResults();
  };

  return (
    <div className='pt-[8%] flex justify-center   '>
      <form
        className='grid grid-cols-12 w-1/2 '
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9 items-start rounded-md focus:outline-none
          focus:bg-gradient-to-r  from-gray-100 to-gray-300 text-red-500'
          placeholder={lang[configLang].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className=' text-white font-bold m-4 justify-center col-span-3 bg-red-500 rounded-md hover:bg-gradient-to-l from-black tracking-wide capitalize'
        >
          {lang[configLang].search}
        </button>
      </form>
    </div>
  );
}
