import useNowPlayingMovies from "../../custom-hooks/useNowPlayingMovies";
import usePopularMovies from "../../custom-hooks/usePopularMovies";
import useTopRatedMovies from "../../custom-hooks/useTopRatedMovies";
import useUpcomingMovies from "../../custom-hooks/useUpcomingMovies";
import GPTSearch from "../GPT-components/GPTSearch";
import Header from "../Header";
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
    <div id='browse' className='bg-black'>
      <div className='relative'>
        <header id='header' className='absolute z-[999]'>
          <Header />
        </header>
      </div>
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <main>
          <MainMovieBanner />
          <MoviesContainer />
        </main>
      )}
    </div>
  );
};

export default Browse;
