import { useSelector } from "react-redux";
import RenderMoviesList from "../browse-components/RenderMoviesList";
const GPTMovieSuggestions = ({ inputText }) => {
  const { gptSearchResults } = useSelector((store) => store.gpt);

  return (
    <>
      <div className='md:mt-20  pl-5'>
        <p className='text-white'>
          <span>{gptSearchResults.length} results</span>
        </p>
      </div>
      <div className='flex flex-col md:mt-5'>
        <RenderMoviesList
          key='suggestedMovies'
          title={null}
          movies={gptSearchResults}
        />
      </div>
    </>
  );
};

export default GPTMovieSuggestions;
