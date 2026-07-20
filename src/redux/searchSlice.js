import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",

  initialState: {
    movieName: "",
    searchedMovies: [],
  },

  reducers: {
    setSearchMovieDetails: (state, action) => {
      const { movieName, searchedMovies } = action.payload;

      state.movieName = movieName;
      state.searchedMovies = searchedMovies;
    },
  },
});

export const { setSearchMovieDetails } = searchSlice.actions;

export default searchSlice.reducer;