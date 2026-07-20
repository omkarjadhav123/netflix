import React from "react";
import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = ({ movieId }) => {
  // Debug
  console.log("Movie ID received:", movieId);

  useMovieById(movieId);

  const trailer = useSelector((store) => store.movie.trailerMovie);

  console.log("Trailer:", trailer);

  if (!movieId) {
    return (
      <div className="text-center p-10 text-red-500 text-xl">
        Movie ID not found
      </div>
    );
  }

  if (!trailer) {
    return (
      <div className="text-center p-10 text-white text-xl">
        Loading Trailer...
      </div>
    );
  }

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&loop=1&playlist=${trailer.key}`}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;
