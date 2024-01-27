import React from "react";
import { motion } from "framer-motion";
import indovina from "../images/indovina.gif";
import gameLab from "../images/gameLab.gif";
import game1 from "../images/game1.jpg";
import game2 from "../images/game2.jpg";
import game3 from "../images/game3.jpg";
import tea from "../images/tea.png";
import { FaLinkedin, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";


const Projects = () => {
  
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen gap-20">
          <h1 className="text-2xl font-bold md:text-5xl mt-[200px]">
            My projects
          </h1>

          <div className="flex flex-col items-center gap-5 py-10 mx-4 ">
            <div className="flex items-center justify-start w-full">
              <p className="ml-16 text-2xl">Multimedia Games</p>
            </div>

            {/* Multimedia Games*/}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-[1500px] items-center">
              <div className="grid gap-4 p-5 mx-5 bg-white shadow-lg rounded-2xl">
                <img src={indovina} />
                <p>
                  Interactive game for kids commissioned by{" "}
                  <span className="font-bold">
                    Polo Diocesano di Santa Severina.
                  </span>
                </p>
                <p>
                  <span className="font-bold">Tech Stack:</span>{" "}
                  <span className="px-2 mx-3 bg-gray-200 rounded-xl">
                    Unity
                  </span>
                  <span className="px-2 bg-gray-200 rounded-xl">C#</span>
                </p>
              </div>
              <div className="grid gap-4 p-5 mx-5 bg-white shadow-lg rounded-2xl">
                <img src={gameLab} />
                <p>
                  Interactive game for kids commissioned by{" "}
                  <span className="font-bold">
                    Polo Diocesano di Santa Severina.
                  </span>
                </p>
                <p>
                  <span className="font-bold">Tech Stack:</span>{" "}
                  <span className="px-2 mx-3 bg-gray-200 rounded-xl">
                    Unity
                  </span>
                  <span className="px-2 bg-gray-200 rounded-xl">C#</span>
                </p>
              </div>
              <div className="grid gap-4 p-5 mx-5 bg-white shadow-lg rounded-2xl">
                <img src={indovina} />
                <p>
                  Interactive game for kids commissioned by{" "}
                  <span className="font-bold">
                    Polo Diocesano di Santa Severina.
                  </span>
                </p>
                <p>
                  <span className="font-bold">Tech Stack:</span>{" "}
                  <span className="px-2 mx-3 bg-gray-200 rounded-xl">
                    Unity
                  </span>
                  <span className="px-2 bg-gray-200 rounded-xl">C#</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-[160px] -left-[100px]  hidden xxl:flex">
          <div className="flex items-center gap-3 text-[#7c7cb3] rotate-90 duration-100">
            {[FaGithub, FaLinkedin, FaInstagram, FaItchIo].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  size={28}
                  className="-rotate-90 hover:scale-110"
                />
              )
            )}
            <hr className="w-[150px] border-2 border-gray-300" />
          </div>
        </div>

        {/* Contatto email*/}
        <div className=" hidden xxl:flex fixed bottom-[190px] right-[-130px] rotate-90">
          <div className="flex items-center gap-3 text-[#7c7cb3]">
            <p className="font-semibold">giorgio.faini@gmail.com</p>
            <hr className="w-[150px] border-2 border-gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;