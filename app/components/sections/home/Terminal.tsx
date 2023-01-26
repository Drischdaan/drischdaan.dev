import './terminal.scss';

import { FiChevronRight } from "react-icons/fi";

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
        <div className='flex justify-start items-center gap-1'>
          <span>Hey there stranger!</span>
        </div>
      </div>
    </div>
  );
}