import { BsChevronDown } from "react-icons/bs";
import Terminal from "./Terminal";

export default function HomeSection() {
  return (
    <div id='home' className='w-screen h-screen flex justify-center items-center dark-gradient'>
      <Terminal/>
      <div className='absolute bottom-0 left-0 w-full p-5 flex justify-center items-center pointer-events-none'>
        <a href='#about' className='pointer-events-auto animate-bounce text-4xl'>
          <BsChevronDown />
        </a>
      </div>
    </div>
  );
}