import React from 'react'
import works from '../Data/works';
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";



const Multimedia = () => {
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
            Multimedia games
          </motion.p>
          {/*Card container*/}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-[1500px] items-center">
            {works.multimedia.map((project, index) => {
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.2)}
                  initial={"hidden"}
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="grid gap-3 p-8 mx-5 duration-200 ease-in-out bg-white shadow-lg rounded-2xl hover:-translate-y-3">
                    <div className="max-w-full rounded-lg">
                      <img className="" src={project.image} />
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

export default Multimedia