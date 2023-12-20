import React from "react";
import RenderMoviesList from "./RenderMoviesList";
import { useSelector } from "react-redux";

const MoviesContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className='bg-black z-50 md:-my-4 pb-20'>
      <div className='md:-my-7'>
        <RenderMoviesList title={"Now Playing"} movies={movies?.nowPlaying} />
        <RenderMoviesList title={"Popular"} movies={movies?.popularMovies} />
        <RenderMoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <RenderMoviesList title={"Upcoming"} movies={movies?.upComingMovies} />
      </div>
    </div>
  );
};

export default MoviesContainer;
