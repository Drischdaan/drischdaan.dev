import './terminal.scss';

import { FiChevronRight, FiFolder } from "react-icons/fi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { TbBrandNextjs } from "react-icons/tb";

export default function Terminal() {
  return (
    <div className='w-full sm:w-3/4 lg:w-1/2 m-5 sm:m-0 terminal flex flex-col'>
      <div className='terminal-bar p-2 grid grid-cols-3'>
        <div className='flex justify-start items-center gap-1'>
          <div className='rounded-full p-1.5 bg-red-500'></div>
          <div className='rounded-full p-1.5 bg-yellow-500'></div>
          <div className='rounded-full p-1.5 bg-green-500'></div>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-sm text-neutral-300'>Terminal</p>
        </div>
      </div>
      <div className='p-3 flex flex-col justify-center items-start gap-1 text-font-mono text-sm'>
        <div className='flex justify-start items-center gap-1 text-neutral-500'>
          <FiChevronRight/>
          <span>sh greet.sh</span>
        </div>
        <div className='flex flex-col justify-center items-start gap-1'>
          <div className='group'>
            Hello there!
            <div className='absolute pointer-events-none text-red-300 -translate-y-6 translate-x-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 bg-neutral-700 rounded border border-neutral-600'>
              <span>General Kenobi!</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-1 w-full mt-5'>
          <div className='flex justify-between items-center gap-2 w-full'>
            <div className='flex justify-start items-center gap-2'>
              <span className='text-red-400'>@drischdaan</span>
              <FiFolder className='fill-green-400 text-green-400'/>
              <span className='text-neutral-400'>~</span>
            </div>
            <div className='flex justify-end items-center gap-1'>
              <TbBrandNextjs/>
              <span className='text-xs'>v13.1.5</span>
            </div>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <HiOutlineArrowSmRight className='text-green-400'/>
            <div className='w-[1px] h-[15px] bg-neutral-400'></div>
          </div>
        </div>
      </div>
    </div>
  );
}