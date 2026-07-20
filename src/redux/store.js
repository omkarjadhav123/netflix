import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import MovieReducer from "./MovieSlice.js";
import searchSlice from "./searchSlice.js";

const store = configureStore({
  reducer: {
    app: userReducer,
    movie: MovieReducer,
    search: searchSlice,
  },
});

export default store;
