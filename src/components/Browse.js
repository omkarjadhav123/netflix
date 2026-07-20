import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import SearchMovie from "./SearchMovie";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
  const user = useSelector((store) => store.app.user);

  const showSearch = useSelector((store) => store.movie.showSearch);

  const navigate = useNavigate();

  // Custom Hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Header />

      {showSearch ? (
        <SearchMovie />
      ) : (
        <>
          <MainContainer />
          <MovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
