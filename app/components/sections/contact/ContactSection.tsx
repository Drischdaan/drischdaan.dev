import DiscordCard from "./DiscordCard";

export default function ContactSection() {
  return (
    <div className='w-screen h-screen flex justify-center items-center dark-gradient-reverse'>
      <div className='w-full px-5 sm:px-0 flex justify-center items-center'>
        <DiscordCard/>
      </div>
    </div>
  );
}