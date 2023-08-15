import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  upcomingMovies: [],
  searchResults: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setMovies, setSearchResults } = moviesSlice.actions;

export default moviesSlice.reducer;
