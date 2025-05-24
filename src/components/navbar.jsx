import React from "react";
import Logo from "../assets/Ft-logoText-purple.png";
import { useState } from "react";
import { navLinks, navIcons } from "../constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="bg-dark">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
      >
        <div className="flex lg:flex-1">
          <a href="#" className="flex gap-2 items-center">
            <img alt="" src={Logo} className="h-12 w-auto inline" />
          </a>
        </div>
        <ul className="list-none lg:flex hidden text-[18px] font-medium items-center flex-1 gap-2">
          {navLinks.map((n) => (
            <li
              key={n.id}
              className="p-[16px]  text-button hover:text-coolAsh transition duration-300 ease-in-out"
            >
              <Link to={`#${n.path.toLowerCase()}`}>{n.title}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-4">
          {navIcons.map((n) => (
            <a
              key={n.id}
              href={n.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-button text-2xl hover:text-coolAsh transition duration-300 ease-in-out"
            >
              {<n.icon />}
            </a>
          ))}
        </div>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          {toggleMenu ? (
            <XMarkIcon
              className="hamburger text-button cursor-pointer w-6"
              onClick={() => setToggleMenu(false)}
              aria-label="Close menu"
            />
          ) : (
            <Bars3Icon
              className="hamburger text-button cursor-pointer w-6"
              onClick={() => setToggleMenu(true)}
              aria-label="Open menu"
            />
          )}
          {toggleMenu && (
            <div className="flex flex-col absolute top-[90px] z-10 right-0 bg-secondary h-[100vh] p-[20px] w-[200px] rounded-lg shadow-lg">
              <ul className="flex flex-col gap-2 items-center">
                {navLinks.map((n) => (
                  <li
                    key={n.id}
                    className="p-[16px] text-button hover:text-coolAsh transition duration-300 ease-in-out"
                  >
                    <Link to={`#${n.path.toLowerCase()}`}>{n.title}</Link>
                  </li>
                ))}
              </ul>
              <div className="lg:hidden flex gap-4">
                {navIcons.map((n) => (
                  <a
                    key={n.id}
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-button text-2xl hover:text-coolAsh transition duration-300 ease-in-out"
                  >
                    {<n.icon />}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
