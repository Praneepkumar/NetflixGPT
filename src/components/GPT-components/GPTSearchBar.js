import React from "react";

const GPTSearchBar = () => {
  return (
    <div className='w-3/4 mx-auto grid grid-cols-12 gap-4 justify-end '>
      <input
        className='col-span-10 rounded-lg px-4 py-[14px]'
        type='text'
        placeholder='What would you like to watch today?'
      />

      <button className='col-span-2 rounded-lg text-white bg-[#e50914] px-4 py-[14px]'>
        Search
      </button>
    </div>
  );
};

export default GPTSearchBar;
