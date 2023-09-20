import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovie: null,
    trailerVideo: null,
    popularMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovie = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
``;
