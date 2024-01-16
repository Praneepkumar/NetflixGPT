import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

import { useSelector } from "react-redux";
const GPTSearch = () => {
  const { gptSearchResults } = useSelector((store) => store.gpt);
  return (
    <div
      className='relative w-full min-h-screen'
      style={{
        backgroundImage:
          "linear-gradient(171deg, rgba(75, 44, 48, 1) 11%, rgba(48, 44, 69, 1) 50%, rgba(31, 28, 43, 1) 98%)",
      }}>
      <div className='pt-72 pb-14 md:pt-40'>
        <div className={!gptSearchResults && " md:pt-8"}>
          <GPTSearchBar />
        </div>
        {gptSearchResults && <GPTMovieSuggestions />}
      </div>
    </div>
  );
};

export default GPTSearch;
