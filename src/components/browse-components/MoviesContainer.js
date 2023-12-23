import React from "react";
import RenderMoviesList from "./RenderMoviesList";
import { useSelector } from "react-redux";

const MoviesContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className='bg-black/40 md:-my-48 pb-20 z-20 '>
      <div className='mt-14 md:-my-7'>
        <RenderMoviesList
          title={"Now Playing"}
          key={"Now Playing"}
          movies={movies?.nowPlaying}
        />
        <RenderMoviesList
          title={"Popular"}
          key={"Popular"}
          movies={movies?.popularMovies}
        />
        <RenderMoviesList
          title={"Top Rated"}
          key={"Top Rated"}
          movies={movies?.topRatedMovies}
        />
        <RenderMoviesList
          title={"Upcoming"}
          key={"Upcoming"}
          movies={movies?.upComingMovies}
        />
      </div>
    </div>
  );
};

export default MoviesContainer;
