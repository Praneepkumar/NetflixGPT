import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addTrailerVideo,
  addTrailerBackgroundVideo,
} from "../utils/redux/moviesDataSlice";

const useMovieTrailer = (movie_id, isBanner = false) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(
    (store) => store?.movies?.trailerVideo.trailer,
  );
  const trailerBackgroundVideo = useSelector(
    (store) => store?.movies?.trailerBackgroundVideo,
  );
  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
        API_OPTIONS,
      );
      const data = await response.json();
      const trailer =
        data.results.find((movie) => movie.type === "Trailer") ||
        data.results[0];
      isBanner
        ? dispatch(addTrailerBackgroundVideo(trailer))
        : dispatch(addTrailerVideo(trailer));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if ((!isBanner && !trailerVideo) || (isBanner && !trailerBackgroundVideo)) {
      getMovieTrailer();
    }
  }, [isBanner, trailerVideo, trailerBackgroundVideo, movie_id]);
};

export default useMovieTrailer;
