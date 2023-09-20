import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

function SecondaryContainer() {
  const movies = useSelector((state) => state.movies?.nowPlayingMovie);
  // console.log('movieList', movies);

  return (
    <div className='bg-black'>
      {movies && <MovieList title='Now Playing' movies={movies} />}
    </div>
  );
}

export default SecondaryContainer;
