import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { LANGUAGE_CONFIG } from "../../utils/constants";
import { useSelector } from "react-redux";
const GPTSearch = () => {
  const language = useSelector((store) => store.setLanguage.language);
  const { gptSearchResults } = useSelector((store) => store.gpt);
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-b from-black to-[#0d0d0f]'>
      <div className='pt-72 pb-14 md:pt-44'>
        <div className={!gptSearchResults && " md:pt-8"}>
          <h2
            className={
              language === "telugu"
                ? "text-center px-4 md:px-8 text-2xl md:text-2xl font-semibold mb-12 md:mb-12 text-[#e6e6e6]"
                : "text-center px-4 md:px-8 text-2xl md:text-3xl font-semibold mb-12 md:mb-12 text-[#e6e6e6]"
            }>
            {LANGUAGE_CONFIG[language].heading}
          </h2>
          <GPTSearchBar />
        </div>
        {gptSearchResults && <GPTMovieSuggestions />}
      </div>
    </div>
  );
};

export default GPTSearch;
