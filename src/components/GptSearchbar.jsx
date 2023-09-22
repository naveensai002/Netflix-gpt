import React from 'react';
import { lang } from '../utils/languageConstant';
import { useSelector } from 'react-redux';

export default function GptSearchbar() {
  const configLang = useSelector((state) => state.config.lang);
  console.log(lang[configLang].gptSearchPlaceholder);
  return (
    <div className='pt-[8%] flex justify-center   '>
      <form className='grid grid-cols-12 w-1/2 '>
        <input
          type='text'
          className='p-4 m-4 col-span-9 items-start rounded-md focus:outline-none
          focus:bg-gradient-to-r  from-gray-100 to-gray-300 text-red-500'
          placeholder={lang[configLang].gptSearchPlaceholder}
        />
        <button className=' text-white font-bold m-4 justify-center col-span-3 bg-red-500 rounded-md hover:bg-gradient-to-l from-black tracking-wide capitalize'>
          {lang[configLang].search}
        </button>
      </form>
    </div>
  );
}
