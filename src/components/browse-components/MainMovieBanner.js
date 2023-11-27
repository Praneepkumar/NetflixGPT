import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainMovieBanner = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  if (!movies) return;
  const movieOnBanner = movies[0];
  const { original_title, overview, id } = movieOnBanner;

  return (
    <div className='absolute'>
      <div className='container mx-auto '>
        <VideoTitle title={original_title} overview={overview} />
      </div>
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainMovieBanner;
