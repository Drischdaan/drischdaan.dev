"use client";

import "./header.scss";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="logo-text">drischdaan</h1>
      </div>
      <div className="navigation-container">
        <a href="#home" className="navigation-link">
          home
        </a>
        <a href="#projects" className="navigation-link">
          projects
        </a>
        <a href="#contact" className="navigation-link">
          contact
        </a>
      </div>
      <div className="flex sm:hidden">
        <button className="border-l-4 border-black py-5 px-5 text-xl">
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}
