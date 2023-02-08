import Navigation from './components/navigation/Navigation';
import './globals.scss';

export default function Home() {
  return (
    <div className='w-full h-full flex bg-white'>
      <div className='flex-1 h-full'>

      </div>
      <div className='flex-1 h-full flex flex-col justify-end items-end p-10'>
        <Navigation/>
      </div>
    </div>
  );
}