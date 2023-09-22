import useNowPlayingHooks from '../hooks/useNowPlayingHooks';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';

import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

export default function Browse() {
  const gptSearchView = useSelector((state) => state.gpt?.showGptSearch);
  // console.log(gptSearchView);

  useNowPlayingHooks();
  usePopularMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpComingMovies();
  useHorrorMovies();
  return (
    <div>
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}
