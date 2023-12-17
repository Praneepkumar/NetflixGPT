import React from "react";
import Shimmer from "../Shimmer";
import { useSelector } from "react-redux";

const GPTMovieSuggestions = () => {
  const { movieNames, gptSearchResults } = useSelector((store) => store.gpt);
  if (!movieNames || !gptSearchResults) return <Shimmer cardCount={10} />;
  return <div>GPTMovieSuggestions</div>;
};

export default GPTMovieSuggestions;
