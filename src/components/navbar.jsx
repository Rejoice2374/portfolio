import React from "react";
import Logo from "../assets/Ft-logoText-purple.png";
import { useState } from "react";
import { navLinks } from "../constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
      >
        <div className="flex lg:flex-1">
          <a href="#" className="flex gap-2 items-center">
            <img alt="" src={Logo} className="h-10 w-auto inline" />
          </a>
        </div>
        <ul className="list-none lg:flex hidden justify-end items-center text-button flex-1 gap-2">
          {navLinks.map((n) => (
            <li key={n.id} className="p-[16px]">
              <Link to={`/${n.path.toLowerCase()}`}>{n.title}</Link>
            </li>
          ))}
        </ul>

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
            <ul className="flex flex-col gap-2 items-center absolute top-[80px] right-0 bg-secondary z-10 h-[100vh] p-[20px]">
              {navLinks.map((n) => (
                <li key={n.id} className="p-[16px]">
                  <Link to={`/${n.path.toLowerCase()}`}>{n.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
