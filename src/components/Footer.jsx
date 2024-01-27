import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* left-side social */}
      <div className="hidden xxl:flex fixed bottom-[160px] -left-[100px] rotate-90">
        <div className="flex items-center gap-3 text-[#7c7cb3] cursor-pointer">
          {[FaGithub, FaLinkedin, FaInstagram, FaItchIo].map(
            (SocialIcon, index) => (
              <SocialIcon
                key={index}
                className="duration-100 -rotate-90 hover:scale-110"
                size={28}
              />
            )
          )}
          <hr className="w-[150px] border-2 border-gray-300" />
        </div>
      </div>

      {/* right-side email */}
      <div className=" hidden xxl:flex fixed bottom-[190px] right-[-130px] rotate-90">
        <div className="flex items-center gap-3 text-[#7c7cb3]">
          <p className="font-semibold">giorgio.faini@gmail.com</p>
          <hr className="w-[150px] border-2 border-gray-300" />
        </div>
      </div>
    </footer>
  );
}

export default Footer