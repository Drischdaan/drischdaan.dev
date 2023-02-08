'use client';

import { MouseEventHandler, useState } from 'react';
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
    <div className='flex flex-col justify-end items-end'>
      <div className='flex flex-col justify-end items-end font-black leading-none bg-neutral-100 p-5 rounded-md'>
        {navigationItems}
      </div>
      <div className='w-full'>
        <div className='mt-10 bg-black rounded-md p-3 flex justify-center items-center select-none'>
          <span className='font-black text-4xl text-font-mono'>drischdaan</span>
        </div>
      </div>
    </div>
  );
}