import './globals.scss';

import NavigationHeader from './components/navigation/NavigationHeader';
import ContactSection from './components/sections/contact/ContactSection';
import HomeSection from './components/sections/home/HomeSection';

import { FiAlertTriangle } from "react-icons/fi";

export default function Home() {
  return (
    <div className='w-full h-full'>
      <NavigationHeader/>

      {/* Sections */}
      <HomeSection/>
      <ContactSection/>

      <div className='fixed bottom-0 left-0 p-5 pointer-events-none flex justify-center items-center'>
        <div className='rounded bg-amber-400 text-black p-3 flex justify-center items-center gap-1'>
          <FiAlertTriangle/>
          <span>This site is under construction</span>
        </div>
      </div>
    </div>
  );
}