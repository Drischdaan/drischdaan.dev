import { FiAlignLeft, FiHardDrive, FiMessageCircle, FiTool } from 'react-icons/fi';

export function Header() {
  return (
    <div className='fixed top-0 left-0 w-full p-3 flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center gap-3 px-3 pb-3 hover:translate-y-3 transition-transform duration-300 group text-neutral-500 dark:text-neutral-400 relative'>
          <div className='absolute bottom-0 w-full h-24 rounded-md p-1 bg-neutral-200 dark:bg-neutral-700 z-20 border-2 border-neutral-300 dark:border-neutral-600 flex justify-center items-center pb-5 group-hover:pb-0 transition-all duration-300'>
            <span className='text-pink-400 font-bold'>Menu</span>
          </div>
          <li className='flex justify-center items-center gap-1 z-30 hover:!text-purple-400 hover:scale-110 group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-all duration-300 cursor-pointer'>
            <FiHardDrive/>
            <span>home</span>
          </li>
          <li className='flex justify-center items-center gap-1 z-30 hover:!text-purple-400 hover:scale-110 group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-all duration-300 cursor-pointer'>
            <FiAlignLeft/>
            <span>about</span>
          </li>
          <li className='flex justify-center items-center gap-1 z-30 hover:!text-purple-400 hover:scale-110 group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-all duration-300 cursor-pointer'>
            <FiTool/>
            <span>projects</span>
          </li>
          <li className='flex justify-center items-center gap-1 z-30 hover:!text-purple-400 hover:scale-110 group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-all duration-300 cursor-pointer'>
            <FiMessageCircle/>
            <span>contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
}