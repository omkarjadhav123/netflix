export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzYxYjI2NGM3MzAzMWM5M2MxYmM0NjliYjEwZDQ1MCIsIm5iZiI6MTc4MjMwNDg4NS41MDg5OTk4LCJzdWIiOiI2YTNiZDA3NTRkOWI3ODM2MWZkY2IwMTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IvjbcXfXDWV6aAGEw4U1iHPle00c3Y5kiQwZsgl83bg",
  },
};

export const NowPlayingMovies = "https://api.themoviedb.org/3/movie/now_playing";
export const PopularMovies = "https://api.themoviedb.org/3/movie/popular";
export const TopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated";
export const UpComingMovies = "https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";

