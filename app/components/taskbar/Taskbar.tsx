import React from 'react';
import './taskbar.scss';

export interface ITaskbarItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface ITaskbarProps {
  items: ITaskbarItem[];
}

export default function Taskbar(props: ITaskbarProps) {
  return (
    <div className='taskbar background-blur'>
      <div className='logo-container'>
        <span className='logo-text'>
          drischdaan
        </span>
      </div>
      <div className='flex-full-center'>
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>
              <a href={item.id} className='taskbar-item flex-full-center'>
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}