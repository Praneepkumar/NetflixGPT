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
        backgroundImage: "linear-gradient(to bottom,#000000,#140705 )",
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
