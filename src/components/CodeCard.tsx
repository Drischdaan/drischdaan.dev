'use client';

import { motion } from 'framer-motion';

export interface ICodeCardProps {
  language: 'Typescript' | 'C++';
  code: string;
  rotate: 'left' | 'right';
}

function generateRandomNumberBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function CodeCard(props: ICodeCardProps) {
  const transformY =
    props.rotate === 'left' ? 'rotateY(-30deg)' : 'rotateY(30deg)';
  const transformX =
    props.rotate === 'left' ? 'rotateX(-10deg)' : 'rotateX(-10deg)';
  return (
    <motion.div
      animate={['initial']}
      variants={{
        initial: {
          y: [-10, 10],
          transition: {
            delay: generateRandomNumberBetween(0, 0.3),
            duration: generateRandomNumberBetween(2, 3),
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
        },
      }}
      className='relative'
    >
      <div
        // style={{
        //   transformStyle: 'preserve-3d',
        //   transform: `${transformX} ${transformY}`,
        // }}
        className='z-10 flex select-none flex-col gap-2 rounded-lg border border-neutral-800 bg-neutral-950 p-3 shadow-xl xl:p-5'
      >
        <span className='text-xs text-zinc-600 xl:text-sm'>
          {props.language}
        </span>
        <div className='text-sm xl:text-base'>{props.code}</div>
      </div>
    </motion.div>
  );
}
