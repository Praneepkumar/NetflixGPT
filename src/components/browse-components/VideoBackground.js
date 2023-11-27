import { useSelector } from "react-redux";
import useMovieTrailer from "../../custom-hooks/useMovieTrailer";
const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id);
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  return (
    <div className='w-screen '>
      <div className='w-screen aspect-video overflow-x-hidden bg-gradient-to-r from-black absolute '></div>
      <iframe
        className='w-screen aspect-video overflow-x-hidden '
        title='Youtube video player'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
    </div>
  );
};

export default VideoBackground;
