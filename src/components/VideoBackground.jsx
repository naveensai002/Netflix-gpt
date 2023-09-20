import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // console.log('videoback', movieId);
  useMovieTrailer(movieId);
  console.log(trailerVideo);
  return <div></div>;
};
export default VideoBackground;
