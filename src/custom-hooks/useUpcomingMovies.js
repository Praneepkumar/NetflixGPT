import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/redux/moviesDataSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
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
    !upComingMovies && getPopularMovies();
  }, []);
};
export default useUpcomingMovies;
