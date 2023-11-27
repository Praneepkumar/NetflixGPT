import React from "react";
import ButtonSmall from "../../utils/util-components/ButtonSmall";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video flex flex-col gap-14 mt-12 absolute top-32 z-50'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl font-bold text-white'>{title}</h1>
        <p className='leading-7 tracking-wider w-[38%] text-[#c9c9c9d1] font-thin'>
          {overview}
        </p>
      </div>
      <div className='flex gap-5'>
        <ButtonSmall outlined={"black"} textColor={"white"}>
          Play
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
