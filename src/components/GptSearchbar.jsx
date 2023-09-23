import React, { useRef, useState } from 'react';
import { lang } from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import { openai } from '../utils/openAi';
import { addMovieDetails } from '../utils/gptSlice';
import { options } from '../utils/constant';

export default function GptSearchbar() {
  const configLang = useSelector((state) => state.config.lang);
  const [names, setNames] = useState('');
  const dispatch = useDispatch();

  let searchText = useRef(null);

  const getSuggestionFromAI = async () => {
    const chatBoxQuery =
      'Act as a Movie Recommendation System and suggest some movies for the query. ' +
      searchText.current.value +
      ' only give me names of 5 movies, comma seperated like the example given ahead. Example Result: Gadar, Sholay, Don, Koi Mil Gaya, Khatta Meetha';
    const dummyMovieList = [
      'Andaz Apna Apna',
      'Hera Pheri',
      'Chupke Chupke',
      'Jaane Bhi Do Yaaro',
      'Padosan',
    ];
    const dummyNames = async () => {
      const names = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`,
        options
      );
      const dataNames = await names.json();

      setNames(() => dataNames.results.map((rs) => rs.title));

      return dataNames;
    };
    await dummyNames();

    const searchMoviesFromTMDB = async () => {
      const movieData = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`,
        options
      );
      const json = await movieData.json();
      return json.results;
    };

    // Call TMDB search movie api
    const getMoviesFromTMDB = dummyMovieList.map((movieName) => {
      return searchMoviesFromTMDB(movieName.split(' ').join('%20'));
    });

    const moviesFromTMDB = await Promise.all(getMoviesFromTMDB);
    console.log(moviesFromTMDB.length);
    dispatch(
      addMovieDetails({
        movieName: names.slice(0, 4),
        movieResult: moviesFromTMDB,
      })
    );
  };
  // const handleGptSearchClick = async () => {
  //   const getResults = async () => {
  //     const chatCompletion = await openai.chat.completions.create({
  //       messages: [{ role: 'user', content: gptQuery }],
  //       model: 'gpt-3.5-turbo',
  //     });

  //     console.log(chatCompletion.choices);
  //     const gptMovies = gptResults.choices?.[0]?.message?.content;
  //   };
  //   getResults();
  // };

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
          onClick={getSuggestionFromAI}
          className=' text-white font-bold m-4 justify-center col-span-3 bg-red-500 rounded-md hover:bg-gradient-to-l from-black tracking-wide capitalize'
        >
          {lang[configLang].search}
        </button>
      </form>
    </div>
  );
}
