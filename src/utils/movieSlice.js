import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovie: null,
    trailerVideo: null,
    popularMovie: null,
    trendingMovie: null,
    upcomingMovie: null,
    horrorMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTrendingMovie: (state, action) => {
      state.trendingMovie = action.payload;
    },
    addHorrorMovie: (state, action) => {
      state.horrorMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovie,
  addTrendingMovie,
  addUpcomingMovie,
  addHorrorMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
