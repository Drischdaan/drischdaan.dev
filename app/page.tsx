import './home.page.scss';

import { FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa';
import { TfiAngleDown } from 'react-icons/tfi';
import Header from './components/Header';

export default async function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col-reverse md:flex-row relative">
      <Header/>
      <div className="flex-1 flex justify-center items-start md:items-center px-10 sm:px-32 py-10">
        <div className="basis-full lg:basis-3/4 xl:basis-1/2 flex justify-center items-start flex-col gap-3">
          <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            drischdaan
          </h1>
          <p className="text-neutral-500">
            A 19 year old software developer from germany.
            My real name is Tristan, but everyone calls me drischdaan.
          </p>
          <div className='mt-5 flex justify-center sm:justify-start items-start sm:items-center flex-row gap-1 sm:gap-3 text-sm sm:text-base'>
            <a href='https://github.com/Drischdaan' target='_blank' rel='noreferrer' className="social-button">
              <FaGithub/>
              Github
            </a>
            <a href='https://instagram.com/drischdaan' target='_blank' rel='noreferrer' className="social-button">
              <FaInstagram/>
              Instagram
            </a>
            <a href='https://open.spotify.com/user/wqqh06uhneiz0mm94aqsgzhte?si=612ccbedd32541bb' target='_blank' rel='noreferrer' className="social-button">
              <FaSpotify/>
              Spotify
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-10">

      </div>
      <div className='absolute bottom-0 mb-10'>
        <TfiAngleDown className='text-3xl animate-bounce'/>
      </div>
    </div>
  );
}