'use client';

import Link from 'next/link';
import { LuFolders, LuHome, LuUser } from 'react-icons/lu';

export interface IHeaderLinkProps {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export function HeaderLink(props: IHeaderLinkProps) {
  return (
    <li>
      <Link
        href={`#${props.id}`}
        className='flex flex-row items-center justify-center gap-1 text-zinc-500 transition-all duration-300 hover:px-3 hover:font-bold hover:text-secondary'
      >
        {props.icon}
        <span>{props.name}</span>
      </Link>
    </li>
  );
}

export function Header() {
  return (
    <nav className='fixed left-0 right-0 top-0 z-20 h-16 w-full border-y border-y-neutral-800 bg-surface px-5 py-3 xl:px-10'>
      <div className='container mx-auto grid h-full w-full grid-cols-9'>
        <div className='col-span-2 flex items-center justify-start'>
          <svg
            id='logo-38'
            width='78'
            height='32'
            viewBox='0 0 78 32'
            className='fill-current text-primary'
            xmlns='http://www.w3.org/2000/svg'
          >
            {' '}
            <path d='M55.5 0H77.5L58.5 32H36.5L55.5 0Z'></path>{' '}
            <path d='M35.5 0H51.5L32.5 32H16.5L35.5 0Z'></path>{' '}
            <path d='M19.5 0H31.5L12.5 32H0.5L19.5 0Z'></path>{' '}
          </svg>
        </div>
        <div className='col-span-5 flex items-center justify-center'>
          <ul className='hidden flex-row gap-5 sm:flex'>
            <HeaderLink id='hero' name='Home' icon={<LuHome size={16} />} />
            <HeaderLink id='about' name='About' icon={<LuUser size={16} />} />
            <HeaderLink
              id='projects'
              name='Projects'
              icon={<LuFolders size={16} />}
            />
          </ul>
        </div>
        <div className='col-span-2'></div>
      </div>
    </nav>
  );
}
