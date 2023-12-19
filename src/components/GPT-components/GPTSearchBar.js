import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, LANGUAGE_CONFIG } from "../../utils/constants";
import openAIConfig from "../../utils/openAIConfig";
import { addGPTSearchResults, clearSearch } from "../../utils/redux/gptSlice";
import Shimmer from "../Shimmer";

const GPTSearchBar = () => {
  const [inputText, setInputText] = useState("");
  const [showShimmer, setShowShimmer] = useState(false);
  const language = useSelector((store) => store.setLanguage.language);
  const dispatch = useDispatch();
  const { gptSearchResults } = useSelector((store) => store.gpt);
  const searchMovieInTMDB = async (query) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const data = await res.json();
    return data.results;
  };

  const handleGPTSearchClick = async () => {
    if (!inputText) return;

    setInputText("");
    if (gptSearchResults) dispatch(clearSearch());
    setShowShimmer(true);
    const gptInputQuery =
      "Act as movie recommendation system and give results for query: " +
      inputText +
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
    <>
      <div className='flex flex-col  w-3/4 md:p-0 md:w-10/12 mx-auto md:grid md:grid-cols-12 gap-4'>
        <div className='relative col-span-10'>
          {inputText && (
            <svg
              onClick={() => setInputText("")}
              className='absolute right-4 top-[0.8rem] hover:cursor-pointer'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='#dfdfdf'
              viewBox='0 0 256 256'>
              <path d='M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z'></path>
            </svg>
          )}
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className='block w-full font-normal rounded-lg px-4 py-[14px] text-white placeholder:font-normal placeholder:text-[#666666] bg-[#1d1d1d75] border-[1px] border-[#a5a5a53a] focus:bg-[#242424c7]'
            type='text'
            placeholder={LANGUAGE_CONFIG[language].searchPlaceholder}
          />
        </div>
        <button
          className='col-span-2 rounded-lg text-white bg-[#e50914] px-4 py-[14px] hover:bg-[#e50914d8]'
          onClick={handleGPTSearchClick}>
          {LANGUAGE_CONFIG[language].btnText}
        </button>
      </div>
      {showShimmer && !gptSearchResults && <Shimmer cardCount={10} />}
    </>
  );
};

export default GPTSearchBar;
