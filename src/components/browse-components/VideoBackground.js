import { useSelector } from "react-redux";
import useMovieTrailer from "../../custom-hooks/useMovieTrailer";
const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id, true);
  const trailerBackgroundkey = useSelector(
    (store) => store?.movies?.trailerBackgroundVideo?.key,
  );

  return (
    <div className='video-background w-full md:min-h-full z-10'>
      <div className=' w-full md:min-h-full aspect-square md:aspect-video overflow-x-hidden bg-gradient-to-r from-black absolute z-0'></div>
      <div className='video-bg'>
        <iframe
          className='w-full aspect-square md:aspect-video overflow-x-hidden '
          title='Youtube video player'
          src={
            "https://www.youtube.com/embed/" +
            trailerBackgroundkey +
            "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          }
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
