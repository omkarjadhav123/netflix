import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [], searchMovie = false }) => {
  return (
    <div className="px-8 py-4">
      <h1
        className={`${
          searchMovie ? "text-black" : "text-white"
        } text-3xl font-bold py-3`}
      >
        {title}
      </h1>

      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                PosterPath={movie.poster_path}
                movieId={movie.id} // ✅ THIS WAS MISSING
              />
            ))
          ) : (
            <p className={searchMovie ? "text-black" : "text-white"}>
              No movies available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
