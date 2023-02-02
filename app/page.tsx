import './globals.scss';

import HomeSection from './components/sections/home/HomeSection';
import Taskbar, { ITaskbarItem } from './components/taskbar/Taskbar';

import { FiHome } from 'react-icons/fi';

export default function Home() {
  const taskbarItems: ITaskbarItem[] = [
    {
      id: '#home',
      name: 'home',
      icon: <FiHome/>,
    }
  ];

  return (
    <div className='w-full h-full'>
      <div className='fixed bottom-0 left-0 w-full'>
        <Taskbar items={taskbarItems}/>
      </div>

      {/* Sections */}
      <div className='w-full h-full'>
        <HomeSection/>
      </div>
    </div>
  );
}