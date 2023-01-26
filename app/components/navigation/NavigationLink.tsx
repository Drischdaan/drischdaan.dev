import { ReactElement } from "react";

export interface INavigationLinkProps {
  icon: ReactElement;
  name: string;
  elementId: string;
}

export default function NavigationLink(props: INavigationLinkProps) {
  return (
    <a href={props.elementId} className='flex justify-center items-center gap-1 text-neutral-500 hover:text-purple-400 hover:scale-105 transition-all duration-300'>
      {props.icon}
      {props.name}
    </a>
  );
}