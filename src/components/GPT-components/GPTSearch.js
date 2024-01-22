import { useState } from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { useSelector } from "react-redux";
const GPTSearch = () => {
  const [inputText, setInputText] = useState("");
  const { gptSearchResults } = useSelector((store) => store.gpt);
  return (
    <div
      className='relative w-full min-h-screen'
      style={{
        backgroundImage:
          "linear-gradient(4deg, rgb(46 22 24) -82%, rgb(10 9 22) 64%, rgb(15 10 42) 98%)",
      }}>
      <div className='pt-72 pb-14 md:pt-40'>
        <div className={!gptSearchResults && " md:pt-8"}>
          <GPTSearchBar inputText={inputText} setInputText={setInputText} />
        </div>
        {gptSearchResults && <GPTMovieSuggestions inputText={inputText} />}
      </div>
    </div>
  );
};

export default GPTSearch;
