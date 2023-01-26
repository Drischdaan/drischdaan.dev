import NavigationHeader from './components/navigation/NavigationHeader';
import ContactSection from './components/sections/contact/ContactSection';
import HomeSection from './components/sections/home/HomeSection';
import './globals.scss';

export default function Home() {
  return (
    <div className='w-full h-full'>
      <NavigationHeader/>

      {/* Sections */}
      <HomeSection/>
      <ContactSection/>
    </div>
  );
}