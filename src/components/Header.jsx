import React, { useState, useEffect } from "react";
import Logo from "../images/Logo.png";
import {Sling as Hamburger} from 'hamburger-react'
import { FaLinkedin, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  //navbar state
  const [isActive, setActive] = useState(false)
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setActive(true) : setActive(false)
    })
  })

  return (
    <header >
      <div className={`${isActive ? "shadow-md" : ""} fixed px-4 w-full h-[70px] justify-between bg-white flex md:px-10 items-center z-10 `}>
        {/*logo header*/}
        <Link to="/">
          <img className="w-full h-6 md:h-7 " src={Logo} alt="Logo image" />
        </Link>
         {/*nav-links*/}
        <ul className="hidden gap-10 md:flex">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>Portfolio</li>
          </NavLink>
          <NavLink to="/contacts">
            <li>Contacts</li>
          </NavLink>
        </ul>
        
        {/*side-menu icon*/}
        <div className="z-20 text-black cursor-pointer md:hidden" onClick={handleClick}>
          <Hamburger toggle={setOpen} toggled={isOpen} direction="left" size={25} color={`${isOpen ? "white" : "black"}`} duration={0.3} rounded />
        </div>
        {/*blurred bg*/}
        <div
          className={
            !isOpen
              ? "hidden"
              : "fixed top-0 right-0 h-screen w-full bg-white/10 backdrop-blur-sm"
          }
        />
        {/*side-menu*/}
        <div className={`absolute top-0 right-0 h-screen bg-v flex flex-col gap-10 p-4  ${!isOpen ? "translate-x-full" : "translate-x-0"} ease-in-out duration-200`}>
          <ul className="flex flex-col text-3xl font-semibold text-white gap-7 pt-[60px]">
            <hr className="border-2 rounded-lg border-slate-200" />
            <Link to="/" onClick={handleClick}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={handleClick}>
              <li>About</li>
            </Link>
            <Link to="/portfolio" onClick={handleClick}>
              <li>Portfolio</li>
            </Link>
            <Link to="/contacts" onClick={handleClick}>
              <li>Contacts</li>
            </Link>
          </ul>
          <div className="flex gap-5 pl-4 text-slate-200">
            <FaGithub size={28} />
            <FaLinkedin size={28} />
            <FaInstagram size={28} />
            <FaItchIo size={28} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
