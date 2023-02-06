import { AiOutlineBug, AiOutlineFolder } from 'react-icons/ai';
import { BiDotsVerticalRounded, BiGitPullRequest, BiTerminal } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { FiAlertCircle, FiBell, FiDatabase, FiGitCommit, FiSearch } from 'react-icons/fi';
import { IoIosGitBranch } from 'react-icons/io';
import { IoPlayOutline, IoSettingsOutline } from 'react-icons/io5';
import Header from './components/Header';
import './globals.scss';

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col'>
      <Header/>
      <div className='w-full py-2 px-3 bg-[#2B2D30] border-y border-neutral-900 flex justify-between items-center'>
        <div className='flex justify-start items-center gap-5'>
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
        <div className='flex justify-between items-center gap-10'>
          <div className='p-2 bg-blue-500 rounded flex justify-center items-center gap-2'>
            Add configuration
            <BsChevronDown/>
            <span className='text-neutral-300'>|</span>
            <IoPlayOutline className='text-lg'/>
            <AiOutlineBug/>
            <BiDotsVerticalRounded/>
          </div>
          <div className='flex justify-end items-center gap-5 text-xl'>
            <FiSearch/>
            <IoSettingsOutline/>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex'>
        <div className='flex-initial p-3 bg-[#2B2D30] border-b border-neutral-900 flex flex-col justify-between items-center'>
          <div className='text-xl'>
            <ul className='flex flex-col gap-3'>
              <li><AiOutlineFolder/></li>
              <li><FiGitCommit/></li>
              <li><BiGitPullRequest/></li>
            </ul>
          </div>
          <div className='text-xl'>
            <ul className='flex flex-col gap-3'>
              <li><BiTerminal/></li>
              <li><FiAlertCircle/></li>
            </ul>
          </div>
        </div>
        <div className='flex-initial bg-[#2B2D30] border-l border-b border-neutral-900 flex flex-col'>
          <div className='flex justify-start items-center border-b border-neutral-900 p-3 gap-2'>
            <span>Solution</span>
            <BsChevronDown/>
          </div>
        </div>
        <div className='flex-1 p-3 bg-[#1E1F22] border border-t-0 border-neutral-900'>

        </div>
        <div className='flex-initial p-3 bg-[#2B2D30] border-b border-neutral-900 text-xl flex flex-col justify-start items-center gap-3'>
          <FiBell/>
          <FiDatabase/>
        </div>
      </div>
      <div className='px-3 bg-[#2B2D30] flex justify-between items-center'>
        <div></div>
        <div className='flex justify-end items-center'>
          <div className='p-2 bg-[#1B1C1F]'>
            420 of 2000
          </div>
        </div>
      </div>
    </div>
  );
}