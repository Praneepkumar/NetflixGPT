import MovieTrailerPopup from "../Layout/MovieTrailerPopup";
import { useDispatch, useSelector } from "react-redux";
import { addSetTrailerPopup } from "../../utils/redux/moviesDataSlice";

const VideoTitle = ({ title, overview, videoID }) => {
  const showTrailerPopup = useSelector(
    (store) => store.movies.trailerVideo.showTrailerPopup,
  );

  const dispatch = useDispatch();
  return (
    <>
      {showTrailerPopup && <MovieTrailerPopup movieID={videoID} />}
      <div
        id='banner-text'
        className='w-full md:aspect-video flex flex-col px-8 absolute mt-64 gap-10 md:gap-14 md:mt-52 md:h-[23rem] z-50'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-[26px] font-bold md:text-4xl text-white'>
            {title}
          </h1>
          <p className='hidden md:block leading-7 text-base tracking-wider w-[38%] text-[#c9c9c9d1] font-thin'>
            {overview}
          </p>
        </div>
        <div className='flex gap-5'>
          <button
            onClick={() => dispatch(addSetTrailerPopup(true))}
            className='flex gap-1 items-center border border-white text-white text-base md:text-base rounded-md px-5 py-2 hover:bg-[#e6e6e6]/20'>
            <svg
              className='fill-slate-200'
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 256 256'>
              <path d='M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z'></path>
            </svg>
            <p>Trailer</p>
          </button>
          <button className='bg-[#e50914] flex gap-1 items-center text-white text-base md:text-base rounded-lg px-5 py-2 hover:bg-[#b70710]'>
            <svg
              className='fill-slate-200'
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 256 256'>
              <path d='M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z'></path>
            </svg>
            <p>More info</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
