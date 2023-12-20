import React from "react";
import ButtonSmall from "../../utils/util-components/ButtonSmall";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      id='banner-text'
      className='w-full md:aspect-video flex flex-col px-8 absolute mt-80 gap-10 md:gap-14 md:mt-72 md:h-[484px] z-50'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[26px] font-bold md:text-4xl text-white'>
          {title}
        </h1>
        <p className='hidden md:block leading-7 tracking-wider w-[38%] text-[#c9c9c9d1] font-thin'>
          {overview}
        </p>
      </div>
      <div className='flex gap-5'>
        <ButtonSmall outlined={"black"} textColor={"white"}>
          ▶️ Play
        </ButtonSmall>
        <ButtonSmall
          background={"#e50914"}
          textColor={"white"}
          hoverBackground={"[#c9121b]"}>
          More info+
        </ButtonSmall>
      </div>
    </div>
  );
};

export default VideoTitle;
