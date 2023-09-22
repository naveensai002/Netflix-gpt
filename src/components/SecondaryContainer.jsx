import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movieStore = useSelector((store) => store.movies);
  return (
    <>
      {movieStore && (
        <div className='bg-black'>
          <div className='pl-12  mt-[2.2rem] md:-mt-64 mt-0 relative z-20'>
            <MovieList
              title={'Now Playing'}
              movies={movieStore?.nowPlayingMovie}
            />
            <MovieList title={'Trending'} movies={movieStore?.trendingMovie} />
            <MovieList title={'Horror'} movies={movieStore?.horrorMovie} />
            <MovieList title={'Popular'} movies={movieStore?.popularMovie} />
            <MovieList
              title={'Upcoming Movies'}
              movies={movieStore?.upcomingMovie}
            />
          </div>
        </div>
      )}
      {/* Movie list popuplar
           MovieCard * n
           Movie List - now playing
           Movie lIst - trending
           movie list - horror
           */}
    </>
  );
};

export default SecondaryContainer;
