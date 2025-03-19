import React from "react";
import Logo from "../src/assets/logo.png";
import { useState } from "react";
import { navLinks } from "../constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="flex gap-2 items-center">
            <img alt="" src={Logo} className="h-8 w-auto inline" />
            <h1 className="text-xl text-blue-600">Favochino Tech</h1>
          </a>
        </div>
        <div className="hidden lg:flex gap-12">
          {navLinks.map((nav) => (
            <a
              href="#"
              className="text-xl font-medium text-gray-900 hover:underline decoration-blue-400"
            >
              {nav.title}
            </a>
          ))}
        </div>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          {toggleMenu ? (
            <XMarkIcon
              className="hamburger text-black cursor-pointer w-6"
              onClick={() => setToggleMenu(false)}
              aria-label="Close menu"
            />
          ) : (
            <Bars3Icon
              className="hamburger text-black cursor-pointer w-6"
              onClick={() => setToggleMenu(true)}
              aria-label="Open menu"
            />
          )}
          {toggleMenu && (
            <div className="flex flex-col p-6 bg-white absolute top-10 mx-4 my-10 z-1 sidebar self-end font-bold sm:self-center left-6 right-6 drop-shadow-md">
              {navLinks.map((nav) => (
                <ul className="list-none flex flex-col justify-end items-center space-x-0 space-y-4 flex-1">
                  <li
                    key={nav.id}
                    className="font-poppins font-normal cursor-pointer text-[16px] text-black"
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
