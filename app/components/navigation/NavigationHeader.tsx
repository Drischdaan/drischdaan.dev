import NavigationLink from "./NavigationLink";

import { FiHardDrive, FiAlignLeft, FiTool, FiMessageCircle } from 'react-icons/fi';

export default function NavigationHeader() {
  return (
    <div id='header' className='fixed top-0 left-0 z-50 w-full p-3 flex justify-center items-center glass bg-gradient-to-b from-[#191919] to-transparent'>
      <ul className='flex justify-center items-center gap-3'>
        <li>
          <NavigationLink icon={<FiHardDrive/>} name='home' elementId='#home' />
        </li>
        <li>
          <NavigationLink icon={<FiAlignLeft/>} name='about' elementId='#about' />
        </li>
        <li>
          <NavigationLink icon={<FiTool/>} name='projects' elementId='#projects' />
        </li>
        <li>
          <NavigationLink icon={<FiMessageCircle/>} name='contact' elementId='#contact' />
        </li>
      </ul>
    </div>
  );
}