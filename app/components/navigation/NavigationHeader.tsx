'use client';

import NavigationLink from "./NavigationLink";

import { FiHardDrive, FiAlignLeft, FiTool, FiMessageCircle } from 'react-icons/fi';
import { useEffect } from "react";

export default function NavigationHeader() {
  useEffect(() => {
    const header = document.querySelector('#header');
    if(header === null)
      return;
    const checkScroll = () => {
      if (window.scrollY === 0)
        header.classList.remove('dark-glass');
      else
        header.classList.add('dark-glass');
    }
    window.addEventListener("scroll", checkScroll);
  });

  return (
    <div id='header' className='fixed top-0 left-0 w-full p-3 flex justify-center items-center transition-colors duration-300'>
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
          <NavigationLink icon={<FiMessageCircle/>} name='about' elementId='#about' />
        </li>
      </ul>
    </div>
  );
}