import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gptSlice',
  initialState: {
    showGptSearch: false,
    tmdbMovieResult: null,
    gptMovieName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieDetails: (state, action) => {
      console.log(action.payload);
      const { movieName, movieResult } = action.payload;
      state.gptMovieName = movieName;
      state.tmdbMovieResult = movieResult;
    },
  },
});

export const { toggleGptSearchView, addMovieDetails } = gptSlice.actions;
export default gptSlice.reducer;
