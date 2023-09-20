import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // console.log('videoback', movieId);
  useMovieTrailer(movieId);
  // console.log(trailerVideo);
  return (
    <div className='w-screen '>
      <iframe
        className='w-screen aspect-video    '
        src={
          'https://www.youtube.com/embed/' +
          trailerVideo?.key +
          '?&autoplay=1&mute=1'
        }
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      ></iframe>
      {/* <video
        className='w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500'
        autoPlay
        muted
        loop
        src='https://www.youtube.com/watch?v=-cT495xKvvs'
      ></video> */}
    </div>
  );
};
export default VideoBackground;
