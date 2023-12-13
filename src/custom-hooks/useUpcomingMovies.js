import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/redux/moviesDataSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );
    const data = await response.json();
    //console.log(data);
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default useUpcomingMovies;
