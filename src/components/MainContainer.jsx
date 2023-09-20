import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

function MainContainer() {
  const movie = useSelector((state) => state.movies.nowPlayingMovie);
  // console.log('movie', movie);
  if (!movie) return;

  const mainMovie = movie[0];
  // console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle videoId={id} title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;
