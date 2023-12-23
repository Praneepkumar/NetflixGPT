import React from "react";
import useMovieTrailer from "../../custom-hooks/useMovieTrailer";
import { useDispatch, useSelector } from "react-redux";
import {
  addTrailerVideo,
  addSetTrailerPopup,
} from "../../utils/redux/moviesDataSlice";

const MovieTrailerPopup = ({ movieID }) => {
  useMovieTrailer(movieID);
  const trailerKey = useSelector(
    (store) => store?.movies?.trailerVideo?.trailer?.key,
  );

  const dispatch = useDispatch();
  const handlePopupClose = () => {
    dispatch(addTrailerVideo(null));
    dispatch(addSetTrailerPopup(false));
  };
  return (
    <div className='pop-up w-full h-screen top-0 left-0 fixed z-[999] '>
      <button
        onClick={handlePopupClose}
        className='absolute top-11 md:top-7 right-2  w-10 h-10 rounded-full z-50 flex items-center justify-center  md:w-9 md:h-9 md:right-52 shadow-[1px_0px_29px_2px_rgba(255,255,255,0.22)] bg-[#e50914] hover:bg-[#e50914d8]'>
        <svg
          className='fill-white'
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 256 256'>
          <path d='M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'></path>
        </svg>
      </button>
      <div className='absolute w-[95%] md:w-[68%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-30 p-4 shadow-[1px_0px_29px_-4px_rgba(255,255,255,0.22)] rounded-md bg-black/75'>
        <iframe
          className='rounded-lg w-full aspect-video md:aspect-video overflow-x-hidden '
          title='Youtube video player'
          src={
            "https://www.youtube.com/embed/" +
            trailerKey +
            "?autoplay=1&rel=0&iv_load_policy=3&modestbranding=1"
          }
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen></iframe>
      </div>

      <div className='w-full absolute h-screen top-0 left-0 bg-stone-950/[0.96] backdrop-blur'></div>
    </div>
  );
};

export default MovieTrailerPopup;
