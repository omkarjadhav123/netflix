import axios from "axios";
import React, { useState } from "react";
import { options, SEARCH_MOVIE_URL } from "../utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice.js";
import { setLoading } from "../redux/userSlice.js";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");

  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const { movieName, searchedMovies } = useSelector((store) => store.search);

  const searchMovieHandler = async (e) => {
    e.preventDefault();

    if (!searchMovie.trim()) return;

    dispatch(setLoading(true));

    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${encodeURIComponent(
          searchMovie,
        )}&include_adult=false&language=en-US&page=1`,
        options,
      );

      const movies = res.data.results;

      dispatch(
        setSearchMovieDetails({
          movieName: searchMovie,
          searchedMovies: movies,
        }),
      );
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }

    setSearchMovie("");
  };

  return (
    <div className="flex flex-col items-center pt-[10%] w-full">
      <form onSubmit={searchMovieHandler} className="w-full md:w-1/2">
        <div className="flex shadow-md border-2 border-gray-200 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            className="flex-1 px-4 py-3 text-lg outline-none"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </div>
      </form>

      {searchedMovies?.length > 0 && (
        <div className="w-full mt-8">
          <MovieList title={movieName} movies={searchedMovies} />
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
