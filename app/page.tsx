import './globals.scss';

export default function Home() {
  return (
    <div className='w-full h-full flex bg-white'>
      <div className='flex-1 h-full'>

      </div>
      <div className='flex-1 h-full flex flex-col justify-end items-end p-10'>
        <div className='flex flex-col justify-end items-end font-black text-[70px] leading-none text-neutral-900'>
          <p className='text-[120px]'>home</p>
          <p>about</p>
        </div>
      </div>
    </div>
  );
}