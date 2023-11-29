import React from "react";
import { IMG_PATH } from "../../utils/constants";

const MovieCard = ({ posterPath, movieTitle }) => {
  return (
    <div className='w-48'>
      <img src={IMG_PATH + posterPath} alt={movieTitle} />
    </div>
  );
};

export default MovieCard;
