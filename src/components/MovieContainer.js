import React from "react";
import MovieList  from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
    const movie = useSelector(store=>store.movie);
    
    return (
        <div className="bg-black h-screen w-screen overflow-y-scroll">
          <div className="mt-52 relative z-10">
            <MovieList title={"PopularMovies"} movies={movie.popularMovies} />
            <MovieList title={"NowPlayingMovies"} movies={movie.nowPlayingMovies} />
            <MovieList title={"TopRatedMovies"} movies={movie.topRatedMovies} />
            <MovieList title={"UpcomingMovies"} movies={movie.upcomingMovies} />
          </div>
        </div>
    )
}

export default MovieContainer;