import useNowPlayingMovies from "../../custom-hooks/useNowPlayingMovies";
import usePopularMovies from "../../custom-hooks/usePopularMovies";
import useTopRatedMovies from "../../custom-hooks/useTopRatedMovies";
import useUpcomingMovies from "../../custom-hooks/useUpcomingMovies";
import GPTSearch from "../GPT-components/GPTSearch";
import MainMovieBanner from "./MainMovieBanner";
import MoviesContainer from "./MoviesContainer";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <>
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <main className='browse pt-28 bg-black  md:pt-0'>
          <MainMovieBanner />
          <MoviesContainer />
        </main>
      )}
    </>
  );
};

export default Browse;
