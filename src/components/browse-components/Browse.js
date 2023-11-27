import useNowPlayingMovies from "../../custom-hooks/useNowPlayingMovies";
import Header from "../Header";
import MainMovieBanner from "./MainMovieBanner";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div id='browse' className='relative '>
      <div id='header' className='absolute z-[999]'>
        <Header />
      </div>
      <MainMovieBanner />
    </div>
  );
};

export default Browse;
