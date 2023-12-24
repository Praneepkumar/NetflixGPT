import useGetGenres from "../../custom-hooks/useGetGenres";
import { IMG_PATH } from "../../utils/constants";

const MovieCardInfo = ({ movie }) => {
  const {
    backdrop_path,

    title,
    overview,
    vote_average,
    release_date,
    genre_ids,
  } = movie;
  const genres = useGetGenres(genre_ids);

  if (!movie) return;
  return (
    <div className='absolute max-w-[20rem] top-20 left-24 z-50 flex flex-col rounded-lg overflow-hidden bg-[#141414]/95 '>
      <div className='image p-2 w-full h-48'>
        <img
          className='w-full h-full object-cover rounded-md'
          src={IMG_PATH + backdrop_path}
          alt={title}
        />
      </div>
      <div className='content px-2 py-5'></div>
    </div>
  );
};

export default MovieCardInfo;
