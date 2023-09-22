import { useEffect } from 'react';
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovie } from '../utils/movieSlice';

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store?.movies?.upcomingMovie);

  const getUpComingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      options
    );
    const json = await data.json();

    dispatch(addUpcomingMovie(json.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
