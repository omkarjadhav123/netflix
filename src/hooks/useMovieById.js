import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { getTrailerMovie } from "../redux/MovieSlice.js";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) {
      console.log("Movie ID is missing");
      return;
    }

    const getMovieVideo = async () => {
      try {
        console.log("Fetching trailer for Movie ID:", movieId);

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch trailer");
        }

        const json = await response.json();

        console.log("TMDB Response:", json);

        if (!json.results || json.results.length === 0) {
          console.log("No videos found.");
          dispatch(getTrailerMovie(null));
          return;
        }

        const trailer =
          json.results.find((video) => video.type === "Trailer") ||
          json.results[0];

        dispatch(getTrailerMovie(trailer));
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    getMovieVideo();
  }, [movieId, dispatch]);
};

export default useMovieById;
