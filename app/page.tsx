import Navigation from './components/navigation/Navigation';
import './globals.scss';

export default function Home() {
  return (
    <div className='w-full h-full flex bg-white'>
      <Navigation/>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='bg-neutral-200 shadow-inner rounded-md p-3 text-neutral-900 font-black uppercase'>
          <span>This site is under construction</span>
        </div>
      </div>
    </div>
  );
}