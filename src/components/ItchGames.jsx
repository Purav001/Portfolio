import React from 'react'
import works from '../Data/works';
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";



const ItchGames = () => {
  return (
    <section>
    {/*Container*/}
    <div className="pb-8 mx-5 rounded-[30px]">
      {/*Title*/}
      <motion.p
        className="py-5 text-2xl text-center sm:ml-24 sm:text-left"
        variants={fadeIn("up", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        2D Games
      </motion.p>
      {/*Card container*/}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-[1500px] items-center">
        {works.itchGames.map((project, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="grid gap-3 p-8 mx-5 duration-200 ease-in-out bg-white shadow-lg rounded-2xl hover:-translate-y-3">
                <div className="relative overflow-hidden max-w-full h-[200px] md:h-[300px] object-cover object-center rounded-lg">
                  <img className="" src={project.image} />
                  <div className="absolute flex items-center justify-center w-full h-full gap-12 transition-all duration-200 opacity-0 bg-black/80 -bottom-0 hover:opacity-100 ">
                    <FaCode size={40} className="text-white cursor-pointer" />
                    <FaExternalLinkAlt
                      size={30}
                      className="text-white cursor-pointer"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold">{project.title}</p>
                </div>
                <p>{project.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-semibold">Built with:</span>
                  <span className=" text-vBrd">{project.stack}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
  );
}

export default ItchGames