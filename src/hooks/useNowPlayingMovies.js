import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/MovieSlice.js";
import { NowPlayingMovies, options } from "../utils/constant.js";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const res = await axios.get(NowPlayingMovies, options);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
