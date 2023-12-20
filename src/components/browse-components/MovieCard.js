import React from "react";
import { IMG_PATH } from "../../utils/constants";

const MovieCard = ({ posterPath, movieTitle }) => {
  if (!posterPath) return null;
  return (
    <div className='w-[14rem] md:w-[14.5rem]'>
      <img
        src={IMG_PATH + posterPath}
        alt={movieTitle}
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default MovieCard;
