import React from "react";

import Logo from "../src/assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt="" src={Logo} className="h-8 w-auto inline" />
            <span className="text-xl text-black">Favochino Tech</span>
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:space-x-12">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-gray-900"
          ></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
