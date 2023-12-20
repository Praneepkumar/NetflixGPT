import MovieCard from "./MovieCard";
import { useRef } from "react";
const RenderMoviesList = ({ title, movies }) => {
  const movieContainer = useRef(null);
  const handleBtnScroll = (direction) => {
    const width = movieContainer.current.clientWidth;
    direction === "prev"
      ? (movieContainer.current.scrollLeft -= width)
      : (movieContainer.current.scrollLeft += width);
  };

  if (!movies) return null;
  return (
    <>
      {title && (
        <div className='container mx-auto md:mx-0 first:pt-28 md:first:pt-14'>
          <h2 className='text-3xl font-semibold mb-8 px-5 md:px-8 md:text-3xl text-white'>
            {title}
          </h2>
        </div>
      )}
      <div className='relative mb-8 w-full'>
        <div
          ref={movieContainer}
          className='flex w-full px-5 overflow-x-hidden relative scroll-smooth'>
          <div className='flex gap-3'>
            {movies.map((movie) => (
              <MovieCard
                posterPath={movie?.poster_path}
                movieTitle={movie?.title}
                key={movie?.id}
              />
            ))}
          </div>
        </div>
        <div
          className='absolute left-0 top-0 px-1 h-full bg-gradient-to-r from-black flex items-center'
          onClick={() => handleBtnScroll("prev")}>
          <button className='flex items-center'>
            <svg
              className='shadow-md'
              xmlns='http://www.w3.org/2000/svg'
              width='46'
              height='46'
              fill='#fff'
              viewBox='0 0 256 256'>
              <path d='M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z'></path>
            </svg>
          </button>
        </div>
        <div
          className='absolute right-0 top-0 px-1 h-full bg-gradient-to-l from-black  flex items-center'
          onClick={() => handleBtnScroll("next")}>
          <button className='flex items-center'>
            <svg
              className='shadow-md'
              xmlns='http://www.w3.org/2000/svg'
              width='46'
              height='46'
              fill='#fff'
              viewBox='0 0 256 256'>
              <path d='M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z'></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default RenderMoviesList;
