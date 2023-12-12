import React, { useState } from "react";
import Logo from "./logo";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="-20 bg-primary">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto lg:px-20 md:px-20">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex items-center justify-end flex-1 lg:order-2">
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-2 space-x-2 font-semibold leading-6 border-2 rounded-lg border-secondary bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary hover:border-tertiary">
            Get In Touch
          </button>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-secondary lg:hidden hover:text-tertiary"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex lg:w-auto ${
            isMenuOpen
              ? "items-center z-30 justify-between w-full absolute top-0 left-0 mt-20 px-4 md:px-20 bg-primary bg-opacity-80"
              : "hidden"
          }`}
          id="mobile-menu">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-lg border-t border-secondary lg:border-0 font-barlow text-secondary"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-lg border-t border-secondary lg:border-0 font-barlow text-secondary"
                aria-current="page">
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-lg border-t font-barlow lg:border-0 border-secondary text-secondary"
                aria-current="page">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-lg border-t border-b lg:border-0 font-barlow border-secondary text-secondary"
                aria-current="page">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
