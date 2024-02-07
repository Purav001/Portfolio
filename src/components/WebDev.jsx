import React from 'react'
import works from '../Data/works';
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";


const WebDev = () => {
  return (
    <section>
        {/*Card container*/}
        <div className="grid gap-5 lg:grid-cols-3 max-w-[1500px] items-center">
          {works.web.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", project.duration)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount:'some' }}
              >
                <div className="grid gap-3 p-8 mx-8 duration-200 ease-in-out bg-white shadow-lg rounded-2xl hover:-translate-y-2">
                  <div className="max-w-full overflow-hidden ">
                    <img src={project.image} />
                  </div>
                  <a className="flex items-center gap-2 text-[20px] md:text-2xl font-bold cursor-pointer" href={project.link}>
                    <p className="">{project.title}</p>
                    <FaExternalLinkAlt size={15} />
                  </a>
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
    </section>
  );
}

export default WebDev