import { useEffect } from 'react';
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addHorrorMovie } from '../utils/movieSlice';

const useHorrorMovies = () => {
  const dispatch = useDispatch();
  const horrorStore = useSelector((store) => store?.movies?.horrorMovie);
  const getHorrorMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      options
    );
    const json = await data.json();
    dispatch(addHorrorMovie(json.results));
  };
  useEffect(() => {
    !horrorStore && getHorrorMovies();
  }, []);
};
export default useHorrorMovies;
