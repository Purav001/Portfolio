import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Multimedia from "../components/Multimedia";
import ItchGames from "../components/ItchGames";
import WebDev from "../components/WebDev"
import GraphicDesign from "../components/GraphicDesign";
import TextSpan from '../utils/textSpan';


const Projects = () => {
  const name = "My projects.".split("");

  return (
    <main>
        <div className="flex flex-col items-center py-10 text-neutral-800">
        <motion.div
            className="mt-[80px] pb-5 lg:pb-10 lg:mt-[200px] flex text-4xl font-bold  text-v md:text-6xl"
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            {name.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </motion.div>

          <WebDev />
          <Multimedia />
          <ItchGames />
          <GraphicDesign/>
          
        </div>
    </main>
  );
};

export default Projects;
