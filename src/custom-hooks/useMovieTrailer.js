import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/redux/moviesDataSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
        API_OPTIONS,
      );
      const data = await response.json();
      const trailer =
        data.results.find((movie) => movie.type === "Trailer") ||
        data.results[0];
      // console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
