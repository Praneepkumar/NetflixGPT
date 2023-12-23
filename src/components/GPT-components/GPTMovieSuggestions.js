import { useSelector } from "react-redux";
import RenderMoviesList from "../browse-components/RenderMoviesList";
const GPTMovieSuggestions = () => {
  const { gptSearchResults } = useSelector((store) => store.gpt);

  return (
    <div className='flex flex-col md:mt-20'>
      <RenderMoviesList
        key={"suggestedMovies"}
        title={null}
        movies={gptSearchResults}
      />
    </div>
  );
};

export default GPTMovieSuggestions;
