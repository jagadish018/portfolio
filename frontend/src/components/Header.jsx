import React from "react";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";

export default function Header() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Skills",
      href: "/skills",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/jagadish-c-k-93b729187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <ImLinkedin />,
    },
    {
      href: "https://github.com/jagadish018",
      icon: <BsGithub />,
    },
    {
      href: "https://leetcode.com/u/jaga4056/",
      icon: <SiLeetcode />,
    },
  ];

  return (
    <header className="p-[15px] shadow-xl text-[#dfe6dd] sticky top-0 bg-black z-[9999]">
      <div className="max-w-[1200px] mx-auto flex items-center">
        <div className="w-[100px]">
          <img src="/logo.png" className="w-full" alt="Logo" />
        </div>
        <div className="hover:text-[#facc15]">
          <span className="font-bold border-b-[3px] border-white hover:border-[#facc15]">
            Jagadish C K
          </span>
        </div>
        <nav className="flex items-center list-none gap-16 ml-auto font-semibold text-[18px] mr-5">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.href}
                className="flex items-center gap hover:text-[#fc8019] cursor-pointer"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <div className="flex gap-5 ml-5">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-[#fc8019]"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </div>

          {/* "Let's connect" as a NavLink */}
          <NavLink
            to="/get-in-touch"
            className="border border-white w-[150px] h-[50px] flex items-center justify-center cursor-pointer hover:text-[#fc8019]"
          >
            Let's connect
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
