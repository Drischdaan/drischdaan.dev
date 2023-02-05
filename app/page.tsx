import { BsChevronDown } from 'react-icons/bs';
import { IoIosGitBranch } from 'react-icons/io';
import Header from './components/Header';
import './globals.scss';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Header/>
      <div className='w-full p-3 bg-[#2B2D30] border-y border-neutral-900 flex justify-start items-center gap-5'>
        <div className='flex justify-start items-center gap-2'>
          <span>drischdaan.dev</span>
          <BsChevronDown/>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <IoIosGitBranch className='text-xl' />
          <span>main</span>
          <BsChevronDown/>
        </div>
      </div>
    </div>
  );
}