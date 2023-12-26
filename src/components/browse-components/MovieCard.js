import React from "react";
import { IMG_PATH } from "../../utils/constants";
import MovieCardInfo from "./MovieCardInfo";

const MovieCard = ({ movie }) => {
  const { poster_path, title } = movie;
  if (!poster_path) return null;
  return (
    <div className='relative cursor-pointer'>
      <div
        className='w-[13rem] h-[18rem] md:w-44 md:h-[16.5rem] rounded-md overflow-hidden '
        style={{ boxShadow: "0px 5px 12px -8px rgba(222,225,255,0.21)" }}>
        <img
          src={IMG_PATH + poster_path}
          alt={title}
          className='w-full h-full object-cover'
        />
      </div>
      {/* <MovieCardInfo movie={movie} key={movie.id} /> */}
    </div>
  );
};

export default MovieCard;
