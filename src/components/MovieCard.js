import React from "react";
import { useDispatch } from "react-redux";
import { TMDB_IMG_URL } from "../utils/constant";
import { getId, setOpen } from "../redux/MovieSlice";

const MovieCard = ({ PosterPath, movieId }) => {
  const dispatch = useDispatch();

  if (!PosterPath) return null;

  const handleOpen = () => {
    console.log("Movie ID:", movieId);

    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div
      className="w-48 flex-shrink-0 pr-2 cursor-pointer"
      onClick={handleOpen}
    >
      <img
        src={`${TMDB_IMG_URL}${PosterPath}`}
        alt="Movie Poster"
        className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default MovieCard;
