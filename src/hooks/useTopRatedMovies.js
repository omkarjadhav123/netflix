import { useEffect } from "react";
import axios from "axios";
import { getTopRatedMovies } from "../redux/MovieSlice.js";
import { TopRatedMovies, options } from "../utils/constant.js";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const res = await axios.get(TopRatedMovies, options);
        dispatch(getTopRatedMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
