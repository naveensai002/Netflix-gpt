import { useEffect } from 'react';
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovie } from '../utils/movieSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2',
      options
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
export default usePopularMovies;
