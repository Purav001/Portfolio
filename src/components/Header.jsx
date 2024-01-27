import React, { useState, useEffect } from "react";
import Logo from "../images/Logo.png";
import Logo2 from "../images/Logo2.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { FaLinkedin, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setMenu] = useState(false);
  const handleClick = () => setMenu(!isOpen);
  const closeMenu = () => setMenu(false);

  //navbar state
  const [isActive, setIsActive] = useState(false)
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header
      className={` ${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full h-[80px] bg-white flex justify-between px-5 items-center z-10 transition-all`}
    >
      <div>
        <img className=" h-7" src={Logo} alt="Logo Image" />
      </div>
      <ul className="hidden gap-10 md:flex ">
        <NavLink to="/" onClick={closeMenu}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          <li>About</li>
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu}>
          <li>Projects</li>
        </NavLink>
        <NavLink to="/contacts" onClick={closeMenu}>
          <li>Contacts</li>
        </NavLink>
      </ul>

      <div
        className="z-20 flex text-white cursor-pointer md:hidden"
        onClick={handleClick}
      >
        {!isOpen ? <HiOutlineMenuAlt3 size={30} /> : <IoIosClose size={50} />}
      </div>

      <div
        className={
          !isOpen
            ? "hidden"
            : "fixed top-0 right-0 h-screen w-full bg-white/10 backdrop-blur-sm"
        }
      ></div>

      <div
        className={`absolute top-0 right-0 h-screen w-[270px] bg-[#7c7cb3] flex flex-col gap-10 p-4  drop-shadow-xl ${
          !isOpen ? "translate-x-full" : "translate-x-0"
        } ease-in-out duration-200`}
      >
        <ul className="flex flex-col text-3xl font-semibold text-white gap-7 pt-[60px]">
          <hr className="border-2 rounded-lg border-slate-200" />
          <Link to="/" onClick={closeMenu}>
            <li>Home</li>
          </Link>
          <Link to="/about" onClick={closeMenu}>
            <li>About</li>
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            <li>Projects</li>
          </Link>
          <Link to="/contacts" onClick={closeMenu}>
            <li>Contacts</li>
          </Link>
        </ul>
        <div className="flex gap-5 pl-4 text-slate-200">
          <FaGithub className="" size={28} />
          <FaLinkedin className="" size={28} />
          <FaInstagram className="" size={28} />
          <FaItchIo className="" size={28} />
        </div>
      </div>
    </header>
  );
};

export default Header;
