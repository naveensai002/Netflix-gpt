import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

function SecondaryContainer() {
  const movies = useSelector((state) => state.movies);
  // console.log('movieList', movies);

  return (
    movies.nowPlayingMovie && (
      <div className='bg-black  '>
        <div className='relative -mt-32 z-20 '>
          <MovieList title='Now Playing' movies={movies.nowPlayingMovie} />
          <MovieList title='Trending' movies={movies.nowPlayingMovie} />
          <MovieList title='Popular' movies={movies.popularMovie} />
          <MovieList title='Upcoming Movies' movies={movies.nowPlayingMovie} />
          <MovieList title='Horror' movies={movies.nowPlayingMovie} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;
