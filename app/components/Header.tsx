import Image from 'next/image';
import { TfiClose } from 'react-icons/tfi';
import { VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc';

export default function Header() {
  return (
    <div className='w-full flex justify-center items-center gap-3 bg-[#2B2D30]'>
      <div className='flex-initial py-3 pl-3'>
        <Image src='/favicon.png' width={20} height={20} alt='' />
      </div>
      <div className='flex-1 py-3'>
        <ul className='flex justify-start items-center gap-2'>
          <li>File</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className='flex-initial flex justify-end items-center h-full'>
        <div className='w-full h-full p-4 hover:bg-[#383A3D] transition-colors duration-200 cursor-pointer'>
          <VscChromeMinimize/>
        </div>
        <div className='w-full h-full p-4 hover:bg-[#383A3D] transition-colors duration-200 cursor-pointer'>
          <VscChromeMaximize/>
        </div>
        <div className='w-full h-full p-4 hover:bg-red-500 transition-colors duration-200 cursor-pointer'>
          <TfiClose/>
        </div>
      </div>
    </div>
  );
}