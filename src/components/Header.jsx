import React, { useState } from "react";
import { CgMenuBoxed, CgCloseR } from "react-icons/cg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();

    setMenu(!menu);
  };

  return (
    <header className="bg-blue w-full h-20 px-8 fixed z-[9999]">
      <div className="h-full max-w-[1000px] mx-auto flex items-center justify-between text-white relative">
        <h1 className="font-concert font-bold text-4xl">MB</h1>
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a
              href="/"
              className="hover:text-orange hover:scale-95 block duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-orange hover:scale-95 block duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/skills"
              className="hover:text-orange hover:scale-95 block duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-orange hover:scale-95 block duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul
          className={`${
            menu ? "left-0" : "left-[-100%]"
          } flex md:hidden flex-col items-center pt-20 gap-8 w-full h-screen mt-20 fixed top-0 bg-blue font-bold text-2xl text-center duration-300`}
        >
          <li className="border-2 border-orange border-l-8 w-[80%] py-1">
            <a
              href="/"
              className="hover:text-orange hover:scale-95 block duration-200"
            >
              Home
            </a>
          </li>
          <li className="border-2 border-orange border-l-8 w-[80%] py-1">
            <a
              href="/projects"
              className="hover:text-orange hover:scale-95 block duration-200"
            >
              Projects
            </a>
          </li>
          <li className="border-2 border-orange border-l-8 w-[80%] py-1">
            <a
              href="/skills"
              className="hover:text-orange hover:scale-95 block duration-200"
            >
              Skills
            </a>
          </li>
          <li className="border-2 border-orange border-l-8 w-[80%] py-1">
            <a
              href="/contact"
              className="hover:text-orange hover:scale-95 block duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className="flex md:hidden text-3xl cursor-pointer"
          onClick={openMenu}
        >
          {menu ? <CgCloseR /> : <CgMenuBoxed />}
        </div>
      </div>
    </header>
  );
};

export default Header;
