import React from "react";
const ShimmerCard = () => {
  return (
    <div className='flex flex-col gap-6 w-56  px-4 pt-4 pb-10 bg-[#080808] rounded-md mb-5 flex-shrink-0'>
      <div className='w-full py-16 bg-[#0e1014] rounded-lg '></div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-[10px]'>
          <div className='w-full py-[6px] bg-[#181a20] rounded-md '></div>
          <div className='w-full py-[6px] bg-[#0e1014] rounded-md '></div>
        </div>
        <div className='w-full py-5 bg-[#111216] rounded-md '></div>
      </div>
    </div>
  );
};
const Shimmer = ({ cardCount }) => {
  return (
    <div className='mt-20 pb-32 flex flex-wrap justify-center gap-6 '>
      {Array.from({ length: cardCount }, (_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
