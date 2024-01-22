import { useSelector } from "react-redux";

const GPTSearchHeader = () => {
  const searchCount = useSelector((store) => store.searchCount);
  return (
    <div className='flex flex-col gap-7 text-center mb-12 md:mb-9'>
      <h2 className=' px-4 md:px-8 text-2xl md:text-3xl font-semibold text-[#e6e6e6]'>
        Explore the effortless movie search experience empowered by GPT!
      </h2>
      <div className='flex flex-col gap-1'>
        <p className='text-xl text-zinc-500'>
          GPT inquiries are expensive, please bear with limited search.{" "}
        </p>
        <p className='text-xl text-zinc-400'>
          Requests left:{" "}
          <span className='text-2xl font-bold text-zinc-200'>
            {searchCount}
          </span>
        </p>
      </div>
    </div>
  );
};

export default GPTSearchHeader;
