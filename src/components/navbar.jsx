import React, { useState, useEffect } from "react";
import Logo from "../assets/Ft-logoText-purple.png";
import { navLinks, navIcons } from "../constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import styles from "../style";
import { MoreVertical } from "lucide-react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    setActiveLink(hash ? hash.substring(1) : navLinks[0]?.path.toLowerCase());
  }, [location]);

  return (
    <header
      className={`${
        scrolled ? "bg-secondary p-0" : "bg-transparent"
      } fixed top-0 w-full p-3 lg:px-4 z-50 transition-all duration-300 ease-in-out`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between"
      >
        {/* Logo */}
        {!toggleMenu && (
          <div className="flex lg:flex-1">
            <a href="#" className="flex gap-2 items-center">
              <img alt="" src={Logo} className="h-12 w-auto inline" />
            </a>
          </div>
        )}

        {/* Desktop Links */}
        <ul className="list-none lg:flex hidden text-[18px] font-medium items-center flex-1 gap-2">
          {navLinks.map((n) => (
            <li
              key={n.id}
              className={`p-1 text-button hover:text-white transition duration-300 ease-in-out ${
                activeLink === n.path.toLowerCase()
                  ? "border-b-2 border-button"
                  : ""
              }`}
            >
              <a
                href={`#${n.path.toLowerCase()}`}
                onClick={() => setActiveLink(n.path.toLowerCase())}
              >
                {n.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden lg:flex gap-4">
          {navIcons.map((n) => (
            <a
              key={n.id}
              href={n.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-button text-2xl p-1.5 rounded-2xl hover:text-white hover:bg-button transition"
            >
              {<n.icon />}
            </a>
          ))}
        </div>

        {/* Button */}
        <div className="hidden lg:flex">
          <a href="#connect">
            <button className={styles.navBtnText}>Let’s Connect</button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          {toggleMenu ? (
            <XMarkIcon
              className="hamburger text-button cursor-pointer w-6"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <Bars3Icon
              className="hamburger text-button cursor-pointer w-6"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {toggleMenu && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setToggleMenu(false)}
          />

          {/* Sidebar */}
          <aside className="fixed top-0 left-0 h-screen w-64 bg-black-pearl-950 border-r shadow-lg border-button z-50 overflow-y-auto no-scrollbar justify-between flex flex-col">
            <div>
              <div className="p-4 flex items-center justify-between">
                <img src={Logo} className="w-32" alt="Logo" />
              </div>

              <ul className="flex-1 px-3">
                {navLinks.map((n) => (
                  <li key={n.id} className="p-4 text-button hover:text-white">
                    <a
                      href={`#${n.path.toLowerCase()}`}
                      onClick={() => {
                        setActiveLink(n.path.toLowerCase());
                        setToggleMenu(false);
                      }}
                    >
                      {n.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-button flex p-3 gap-3 items-center">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                className="w-10 h-10 rounded-md"
                alt=""
              />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <span className="text-xs text-gray-400">
                    johndoe@gmail.com
                  </span>
                </div>
                <MoreVertical size={20} />
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  );
};

export default Navbar;
