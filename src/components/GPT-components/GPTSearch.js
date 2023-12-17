import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { LANGUAGE_CONFIG } from "../../utils/constants";
import { useSelector } from "react-redux";
const GPTSearch = () => {
  const language = useSelector((store) => store.setLanguage.language);

  return (
    <div className='bg-black min-h-screen pt-44'>
      <h2
        className={
          language === "telugu"
            ? "text-center px-8 text-2xl font-semibold mb-12 text-[#e6e6e6]"
            : "text-center px-8 text-3xl font-semibold mb-12 text-[#e6e6e6]"
        }>
        {LANGUAGE_CONFIG[language].heading}
      </h2>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
