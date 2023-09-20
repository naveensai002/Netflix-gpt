import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../utils/constant';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1',
      options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
