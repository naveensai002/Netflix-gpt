import { useEffect } from 'react';
import { options } from '../utils/constant';
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {
  const trailer = useSelector((state) => state.movies.trailerVideo);
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/videos?language=en-US',
      options
    );
    const json = await data.json();
    // console.log(json);
    const filteredData = json.results.filter(
      (video) => video?.type === 'Trailer'
    );

    const trailerVideo = filteredData?.length
      ? filteredData[0]
      : json.results[0];
    // console.log(trailerVideo);
    dispatch(addTrailerVideo(trailerVideo));
  };

  useEffect(() => {
    !trailer && getMovies();
  }, []);
};
export default useMovieTrailer;
