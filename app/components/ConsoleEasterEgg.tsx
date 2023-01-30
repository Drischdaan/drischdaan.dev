'use client';

import { useEffect } from "react";

let easterEggCalled: boolean = false;

export default function ConsoleEasterEgg() {
  useEffect(() => {
    if(easterEggCalled)
      return;
    console.log('%cYou found the easter 🥚!', 'font-weight: bold; font-size: 2rem;');
    console.log('%c🗿 %chttps://www.youtube.com/watch?v=2tRIjRVcHcQ', 'font-size: 2rem;', '');
    easterEggCalled = true;
  });
  return <></>;
}