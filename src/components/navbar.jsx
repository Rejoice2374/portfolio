import React from "react";
import Logo from "../assets/Ft-logoText-purple.png";
import { useState, useEffect } from "react";
import { navLinks, navIcons } from "../constants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import styles from "../style";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Extract the hash from the URL (e.g., "#home" from "http://example.com/#home")
    const hash = location.hash;
    if (hash) {
      setActiveLink(hash.substring(1)); // Remove the '#' to match with path in navLinks
    } else {
      // Set default active link if no hash is present
      setActiveLink(navLinks[0]?.path.toLowerCase() || "");
    }
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
        <div className="flex lg:flex-1">
          <a href="#" className="flex gap-2 items-center">
            <img alt="" src={Logo} className="h-12 w-auto inline" />
          </a>
        </div>
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
              <Link
                to={`#${n.path.toLowerCase()}`}
                onClick={() => setActiveLink(n.path.toLowerCase())}
              >
                {n.title}
              </Link>
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
              className="text-button text-2xl p-1.5 rounded-2xl hover:text-white hover:bg-button transition duration-300 ease-in-out"
            >
              {<n.icon />}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex">
          <a href="#connect">
            <button className={`${styles.navBtnText}`}>Let’s Connect</button>
          </a>
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
            <div className="flex flex-col absolute top-[75px] z-10 right-0 bg-secondary h-[100vh] p-[20px] w-[200px] rounded-lg shadow-lg">
              <ul className="flex flex-col gap-2 items-center">
                {navLinks.map((n) => (
                  <li
                    key={n.id}
                    className={`p-[16px] text-button hover:text-coolAsh transition duration-300 ease-in-out ${
                      activeLink === n.path.toLowerCase()
                        ? "border-b-2 border-blue-500"
                        : ""
                    }`}
                  >
                    <Link
                      to={`#${n.path.toLowerCase()}`}
                      onClick={() => {
                        setActiveLink(n.path.toLowerCase());
                        setToggleMenu(false);
                      }}
                    >
                      {n.title}
                    </Link>
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
