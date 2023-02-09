'use client';

import { MouseEventHandler, useState } from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { RiLock2Fill } from 'react-icons/ri';
import './navigation.scss';

interface INavigationItemProps {
  displayText: string;
  active: string;
  hovered: boolean;
  onClick: MouseEventHandler<HTMLParagraphElement>;
  onMouseEnter: MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave: MouseEventHandler<HTMLParagraphElement>;
}

function NavigationItem(props: INavigationItemProps) {
  let classes = 'navigation-item ';
  if(props.active === props.displayText && !props.hovered)
      classes += 'active';
  return (
    <p className={classes} onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
      {props.displayText}
    </p>
  );
}

export default function Navigation() {
  const [active, setActive] = useState('home');
  const [hovered, setHovered] = useState(false);

  const createItem = (text: string) => (
    <NavigationItem
      key={text}
      onClick={() => setActive(text)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      active={active}
      hovered={hovered}
      displayText={text}
    />
  );

  const navigationItems = [
    createItem('home'),
    createItem('about'),
    createItem('projects'),
    createItem('contact'),
  ];

  return (
    <div className='flex-inital flex justify-start items-center p-7'>
      <div className='flex-initial pointer-events-auto flex flex-col gap-5 justify-end items-end'>
        <div className='w-full'>
          <div className='bg-black rounded-md p-3 flex justify-center items-center select-none'>
            <span className='font-black text-4xl text-font-mono'>drischdaan</span>
          </div>
        </div>
        <div className='w-full flex justify-between flex-row gap-3 text-3xl'>
          <div className='flex-1 p-3 bg-black hover:bg-neutral-800 hover:scale-110 transition-all duration-300 cursor-pointer rounded-md flex justify-center items-center'>
            <IoSettingsSharp/>
          </div>
          <div className='flex-1 p-3 bg-black hover:bg-neutral-800 hover:scale-110 transition-all duration-300 cursor-pointer rounded-md flex justify-center items-center'>
            <RiLock2Fill/>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start font-black leading-none bg-neutral-200 p-5 rounded-md'>
          {navigationItems}
        </div>
      </div>
    </div>
  );
}