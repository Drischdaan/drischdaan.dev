import { FiCode, FiHome, FiAlignLeft, FiTool, FiMessageCircle } from 'react-icons/fi';
import { TbBrandNextjs } from 'react-icons/tb';

export default function Header() {
  return (
    <div className="absolute top-0 left-0 w-full grid grid-cols-3 p-5">
      <div className="flex justify-start items-center">
        <div className='group cursor-pointer relative'>
          <FiCode/>
          <div className='hidden group-hover:block w-[331px] cursor-auto absolute py-2 text-sm'>
            <div className='p-3 w-full rounded bg-neutral-900 outline outline-1 outline-neutral-700 flex justify-start items-center gap-1'>
              This website was developed with <TbBrandNextjs className='text-2xl'/> <span className='font-semibold'>NextJs <span className='text-xs'>v13.1.5</span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <ul className="flex justify-center items-center gap-5 text-neutral-500">
          <li className="hover:text-purple-400 cursor-pointer hover:scale-105 transition-all duration-300">
            <a className='flex justify-center items-center gap-1'><FiHome/>Home</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer hover:scale-105 transition-all duration-300">
            <a className='flex justify-center items-center gap-1'><FiAlignLeft/>About</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer hover:scale-105 transition-all duration-300">
            <a className='flex justify-center items-center gap-1'><FiTool/>Projects</a>
          </li>
          <li className="hover:text-purple-400 cursor-pointer hover:scale-105 transition-all duration-300">
            <a className='flex justify-center items-center gap-1'><FiMessageCircle/>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}