import { useEffect } from "react";
import axios from "axios";
import { PopularMovies, options } from "../utils/constant.js";
import { getPopularMovies } from "../redux/MovieSlice.js";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await axios.get(PopularMovies, options);
        dispatch(getPopularMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
