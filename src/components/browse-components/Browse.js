import useNowPlayingMovies from "../../custom-hooks/useNowPlayingMovies";
import usePopularMovies from "../../custom-hooks/usePopularMovies";
import useTopRatedMovies from "../../custom-hooks/useTopRatedMovies";
import useUpcomingMovies from "../../custom-hooks/useUpcomingMovies";
import Header from "../Header";
import MainMovieBanner from "./MainMovieBanner";
import MoviesContainer from "./MoviesContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div id='browse'>
      <div className='relative h-[769px]'>
        <header id='header' className='absolute z-[999]'>
          <Header />
        </header>
        <MainMovieBanner />
      </div>
      <main>
        <MoviesContainer />
      </main>
    </div>
  );
};

export default Browse;
