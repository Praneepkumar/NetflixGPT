import React from "react";
import MovieCatagories from "./MovieCatagories";
import { useSelector } from "react-redux";

const MoviesContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className='bg-black z-50 md:-my-4 pb-20'>
      <div className='md:-my-7'>
        <MovieCatagories title={"Now Playing"} movies={movies?.nowPlaying} />
        <MovieCatagories title={"Popular"} movies={movies?.popularMovies} />
        <MovieCatagories title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieCatagories title={"Upcoming"} movies={movies?.upComingMovies} />
      </div>
    </div>
  );
};

export default MoviesContainer;
