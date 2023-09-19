import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import movieSlice from './movieSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    movies: movieSlice,
  },
});
