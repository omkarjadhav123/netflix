import { useEffect } from "react";
import axios from "axios";
import { getUpComingMovies } from "../redux/MovieSlice.js";
import { UpComingMovies, options } from "../utils/constant.js";
import { useDispatch } from "react-redux";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpComingMovies = async () => {
      try {
        const res = await axios.get(UpComingMovies, options);
        dispatch(getUpComingMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchUpComingMovies();
  }, [dispatch]);
};

export default useUpComingMovies;
