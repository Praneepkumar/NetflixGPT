import React from "react";
import RenderMoviesList from "./RenderMoviesList";
import { useSelector } from "react-redux";
import MovieCardInfo from "./MovieCardInfo";

const MoviesContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className='relative pb-16 z-20  md:pb-6  '>
      <div className='flex flex-col gap-3 mt-36 md:-mt-36 md:my-12'>
        <RenderMoviesList
          title={"Now Playing"}
          key='Now Playing'
          movies={movies?.nowPlaying}
        />
        <RenderMoviesList
          title={"Popular"}
          key='Popular'
          movies={movies?.popularMovies}
        />
        <RenderMoviesList
          title={"Top Rated"}
          key='Top Rated'
          movies={movies?.topRatedMovies}
        />
        <RenderMoviesList
          title={"Upcoming"}
          key='Upcoming'
          movies={movies?.upComingMovies}
        />
      </div>
    </div>
  );
};

export default MoviesContainer;
