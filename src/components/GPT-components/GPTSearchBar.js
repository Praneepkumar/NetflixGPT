import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, LANGUAGE_CONFIG } from "../../utils/constants";
import openAIConfig from "../../utils/openAIConfig";
import { addGPTSearchResults } from "../../utils/redux/gptSlice";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.setLanguage.language);
  const searchInput = useRef(null);
  const dispatch = useDispatch();

  const searchMovieInTMDB = async (query) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const data = await res.json();
    return data.results;
  };

  const handleGPTSearchClick = async () => {
    if (!searchInput.current.value) return;
    const gptInputQuery =
      "Act as movie recommendation system and give results for query: " +
      searchInput.current.value +
      ". give only names of the 5 movies, seperated by commas like the example result given ahead. Example: The Ghost, Avatar, Conjuring, Transformers, Batman vs Spiderman";
    const gptResults = await openAIConfig.chat.completions.create({
      messages: [{ role: "user", content: gptInputQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) return;
    const gptSearchList = gptResults.choices?.[0]?.message?.content.split(",");
    const gptSearchPromises = gptSearchList.map((movie) =>
      searchMovieInTMDB(movie),
    );

    const gptSearchData = await Promise.all(gptSearchPromises);
    dispatch(
      addGPTSearchResults({
        movieNames: gptSearchList,
        gptSearchResults: gptSearchData,
      }),
    );
  };

  return (
    <div className='w-10/12 mx-auto grid grid-cols-12 gap-4'>
      <input
        ref={searchInput}
        className='col-span-10 rounded-lg px-4 py-[14px] font-medium placeholder:font-normal'
        type='text'
        placeholder={LANGUAGE_CONFIG[language].searchPlaceholder}
      />

      <button
        className='col-span-2 rounded-lg text-white bg-[#e50914] px-4 py-[14px]'
        onClick={handleGPTSearchClick}>
        {LANGUAGE_CONFIG[language].btnText}
      </button>
    </div>
  );
};

export default GPTSearchBar;
