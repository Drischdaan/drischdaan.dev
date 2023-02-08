
export interface INavigationItem {
  displayText: string;
}

export interface IHeaderProps {
  navigationItems: INavigationItem[];
}

export default function Header() {
  const name: string = 'drischdaan';
  const navigationItems: INavigationItem[] = [
    { displayText: 'home', },
    { displayText: 'about', },
    { displayText: 'projects', },
    { displayText: 'contact', },
  ];
  return (
    <div className='w-full grid grid-cols-3 p-3'>
      <div>
        <ul className='font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 w-content flex justify-start items-center gap-0 relative'>
          {name.split('').map((character, index) => (
            <li key={index} className='hover:text-white hover:rotate-12 hover:pr-3 transition-all duration-300 cursor-pointer'>{character}</li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center gap-3'>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <span>{item.displayText}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}