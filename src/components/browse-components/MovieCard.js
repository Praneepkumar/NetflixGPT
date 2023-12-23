import React from "react";
import { IMG_PATH } from "../../utils/constants";

const MovieCard = ({ posterPath, movieTitle }) => {
  if (!posterPath) return null;
  return (
    <div
      className='w-[14rem] md:w-44 rounded-md overflow-hidden '
      style={{ boxShadow: "0px 5px 12px -8px rgba(222,225,255,0.21)" }}>
      <img
        src={IMG_PATH + posterPath}
        alt={movieTitle}
        className='w-full h-full object-cover'
      />
    </div>
  );
};

export default MovieCard;
