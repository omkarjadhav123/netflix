import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",

  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    trailerMovie: null,
    showSearch: false,
    open: false,
    id: "",
  },

  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    getUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },

    setToggleHandler: (state) => {
      state.showSearch = !state.showSearch;
    },

    setOpen: (state, action) => {
      state.open = action.payload;
    },

    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
  getTrailerMovie,
  setToggleHandler,
  setOpen,
  getId,
} = movieSlice.actions;

export default movieSlice.reducer;
