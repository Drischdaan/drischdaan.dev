'use client';

import NavigationLink, { INavigationLinkProps } from "./NavigationLink";

import { FiHardDrive, FiAlignLeft, FiTool, FiMessageCircle, FiX } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from "react";

export default function NavigationHeader() {
  const [open, setOpen] = useState(false);

  const navigationItems: INavigationLinkProps[] = [
    {
      icon: <FiHardDrive/>,
      name: 'home',
      elementId: '#home'
    },
    {
      icon: <FiAlignLeft/>,
      name: 'about',
      elementId: '#about'
    },
    {
      icon: <FiTool/>,
      name: 'projects',
      elementId: '#projects'
    },
    {
      icon: <FiMessageCircle/>,
      name: 'contact',
      elementId: '#contact'
    },
  ];

  return (
    <div id='header' className='fixed top-0 left-0 z-40 w-full px-5 p-3 grid grid-cols-3 glass bg-gradient-to-b from-[#191919] to-transparent'>
      <div className='flex justify-start items-center'>
        <h1 className='font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>drischdaan</h1>
      </div>
      <ul className='hidden sm:flex justify-center items-center gap-3'>
        {
          navigationItems.map((props, index) => {
            return (
              <li key={index}>
                <NavigationLink icon={props.icon} name={props.name} elementId={props.elementId} />
              </li>
            );
          })
        }
      </ul>
      <div className='block sm:hidden'></div>
      <div className='flex sm:hidden justify-end items-center'>
        <div className='flex justify-end items-center cursor-pointer hover:scale-110 transition-transform duration-300'>
          <RxHamburgerMenu onClick={() => setOpen(true)}/>
        </div>
      </div>

      {
        open && (
          <div className='fixed top-0 left-0 z-50 w-screen h-screen p-3 bg-neutral-800'>
            <div className='absolute top-0 left-0'>
              <FiX onClick={() => setOpen(false)} className='m-5 text-2xl cursor-pointer hover:scale-110 transition-transform duration-300' />
            </div>
            <div className='w-full h-full flex justify-center items-center px-5'>
              <ul className='flex flex-col justify-center items-center gap-10 text-2xl'>
                {
                  navigationItems.map((props, index) => {
                    return (
                      <li key={index}>
                        <NavigationLink icon={props.icon} name={props.name} elementId={props.elementId} />
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        )
      }
    </div>
  );
}