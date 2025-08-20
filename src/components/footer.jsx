import React from "react";
import Logo from "../assets/Ft-logoText-purple.png";
import { navIcons } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="social-links flex flex-col items-center">
          <div className="flex gap-4">
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
          <div className="footer-bottom">
            <p>© Favochino Tech {year}. All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
