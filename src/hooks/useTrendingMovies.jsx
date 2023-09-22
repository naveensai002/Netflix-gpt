import { useEffect } from 'react';
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrendingMovie } from '../utils/movieSlice';

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store?.movies?.trendingMovie);

  const getTrendingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
      options
    );
    const json = await data.json();
    dispatch(addTrendingMovie(json.results));
  };
  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
