import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieCatagories = ({ title, movies }) => {
  const movieContainer = useRef(null);
  const handleBtnPrev = () => {
    const width = movieContainer.current.clientWidth;
    movieContainer.current.scrollLeft =
      movieContainer.current.scrollLeft - width;
  };
  const handleBtnNext = () => {
    const width = movieContainer.current.clientWidth;
    movieContainer.current.scrollLeft =
      movieContainer.current.scrollLeft + width;
  };
  if (!movies) return null;
  return (
    <>
      <div className='container mx-auto pt-5'>
        <h2 className='text-3xl font-semibold mb-8 text-white'>{title}</h2>
      </div>
      <div className='flex w-[97.5vw] mx-auto overflow-x-hidden relative mb-8 scroll-smooth'>
        <div ref={movieContainer} className='flex gap-2 '>
          {movies.map((movie) => (
            <MovieCard
              posterPath={movie?.poster_path}
              movieTitle={movie?.title}
              key={movie?.id}
            />
          ))}
        </div>
        <div className='absolute left-0 px-4 h-full  bg-gradient-to-r from-black flex items-center'>
          <button className='flex items-center' onClick={handleBtnPrev}>
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
        <div className='absolute right-0 px-4 h-full bg-gradient-to-l from-black  flex items-center'>
          <button className='flex items-center' onClick={handleBtnNext}>
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

export default MovieCatagories;
