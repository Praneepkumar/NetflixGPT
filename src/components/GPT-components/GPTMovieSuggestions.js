import React from "react";
import Shimmer from "../Shimmer";
import { useSelector } from "react-redux";
import MovieCatagories from "../browse-components/MovieCatagories";
const GPTMovieSuggestions = () => {
  const { movieNames, gptSearchResults } = useSelector((store) => store.gpt);

  return (
    <div className='flex flex-col md:mt-20'>
      {movieNames.map((movieName, i) => (
        <MovieCatagories
          key={movieName}
          title={movieName}
          movies={gptSearchResults[i]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
