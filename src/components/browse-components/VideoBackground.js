import { useSelector } from "react-redux";
import useMovieTrailer from "../../custom-hooks/useMovieTrailer";
const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id);
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  return (
    <div className='w-full '>
      <div className='w-full aspect-video overflow-x-hidden bg-gradient-to-r from-black absolute '></div>
      <iframe
        className='w-full aspect-video overflow-x-hidden '
        title='Youtube video player'
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1"
        }
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
    </div>
  );
};

export default VideoBackground;
