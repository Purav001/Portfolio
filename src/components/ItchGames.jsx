import React from "react";
import works from "../Data/works";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const ItchGames = () => {
  return (
    <section>
      {/*Container*/}
      <div className="pb-8 mx-5 rounded-[30px]">
        {/*Card container*/}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-[1500px] items-center">
          {works.itchGames.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", project.duration)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="grid gap-3 p-8 mx-5 duration-200 ease-in-out bg-white shadow-lg rounded-2xl hover:-translate-y-2">
                  <div className="overflow-hidden max-w-full h-[200px] md:h-[300px] object-cover object-center rounded-lg">
                    <img className="" src={project.image} />
                  </div>
                  <a className="flex items-center gap-2 text-[20px] md:text-2xl font-bold cursor-pointer" href={project.link}>
                    <p className="">{project.title}</p>
                    <FaExternalLinkAlt
                      size={15}
                    />
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
      </div>
    </section>
  );
};

export default ItchGames;
