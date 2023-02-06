
export default function Header() {
  const name: string = 'drischdaan';
  return (
    <div className='w-full grid grid-cols-3 p-3'>
      <div>
        <div className='font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 w-content flex justify-start items-center gap-0 relative'>
          {name.split('').map((character, index) => (
            <div key={index} className='hover:text-white hover:rotate-12 hover:pr-3 transition-all duration-300 cursor-pointer'>{character}</div>
          ))}
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}