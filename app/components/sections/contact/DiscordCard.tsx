import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

export default function DiscordCard() {
  return (
    <div className='rounded-lg bg-[#17191D] w-full sm:w-80 cursor-pointer select-none hover:scale-105 transition-transform duration-300'>
      <a href='http://discordapp.com/users/244115221776433152' target='_blank' rel='noreferrer'>
        <div className='p-5 rounded-t-lg bg-gradient-to-r from-purple-400 to-pink-400'></div>
        <div className='p-5 pb-3 flex flex-row justify-between items-center'>
          <div className='absolute rounded-full outline outline-8 outline-[#17191D] -translate-y-10'>
            <Image
              src='/images/drischdaan-profile-picture.jpg'
              alt='logo'
              width={50}
              height={50}
              className='rounded-full'
            />
          </div>
          <div className='mt-5 flex flex-col leading-none'>
            <span>drischdaan</span>
            <span className='text-neutral-500 text-sm -translate-y-1'>drischdaan#2306</span>
          </div>
          <div className='-translate-y-5'>
            <ul>
              <li>
                <FaDiscord/>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}