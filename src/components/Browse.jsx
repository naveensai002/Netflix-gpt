import useNowPlayingHooks from '../hooks/useNowPlayingHooks';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

export default function Browse() {
  useNowPlayingHooks();
  usePopularMovies();

  return (
    <div>
      <Header />

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}
