import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { FaLinkedin, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setMenu] = useState(false);
  const handleClick = () => setMenu(!isOpen);
  const closeMenu = () => setMenu(false);

  return (
    <div className=" fixed w-full h-[80px] flex justify-between px-5 items-center bg-white">
      <div>
        <img className=" h-7" src={Logo} alt="Logo Image" />
      </div>
      {/*  Nav-Links  */}
      <ul className="hidden md:flex">
        <Link to="/" onClick={closeMenu}><li>Home</li></Link>
        <Link to="/skills" onClick={closeMenu}><li>SKills</li></Link>
        <Link to="/projects" onClick={closeMenu}><li>Projects</li></Link>
        <Link to="/contacts" onClick={closeMenu}><li>Contacts</li></Link>
      </ul>

      {/*  H-Icon  */}
      <div className="flex cursor-pointer md:hidden">
        <HiOutlineMenuAlt3 size={30} onClick={handleClick} />
      </div>

      {/*  Mobile-Menu  */}
      <div
        className={
          !isOpen
            ? "hidden"
            : "fixed h-full top-0 right-0 w-full bg-slate-50/80"
        }
      ></div>
      <div
        className={`absolute top-0 right-0 h-screen w-[200px] bg-[#7c7cb3] flex flex-col gap-10 p-4 ${
          !isOpen ? "translate-x-full" : "translate-x-0"
        } ease-in-out duration-300`}
      >
        <IoIosClose
          size={50}
          className=" ml-[113px] cursor-pointer text-white"
          onClick={handleClick}
        />
        <ul className="flex flex-col text-2xl font-semibold text-white gap-7">
        <Link to="/" onClick={closeMenu}><li>Home</li></Link>
        <Link to="/skills" onClick={closeMenu}><li>SKills</li></Link>
        <Link to="/projects" onClick={closeMenu}><li>Projects</li></Link>
        <Link to="/contacts" onClick={closeMenu}><li>Contacts</li></Link>
        </ul>
      </div>

      {/*  Socials  */}
      <div className=" hidden md:flex fixed flex-col top-[25%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#0077B5]  duration-300">
            <a
              className="flex items-center justify-between w-full text-white"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-gray-700  duration-300">
            <a
              className="flex items-center justify-between w-full text-white"
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-[#fa5c5c]  duration-300">
            <a
              className="flex items-center justify-between w-full text-white"
              href="/"
            >
              Itch.io <FaItchIo size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-gradient-to-r from-purple-700 via-red-600 to-yellow-400 duration-300">
            <a
              className="flex items-center justify-between w-full text-white"
              href="/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
