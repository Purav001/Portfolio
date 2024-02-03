import React from "react";
import skills from '../Data/skills'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from '../utils/textSpan';


const Skills = () => {

  const name = "My skill-set.".split("");

  return (
    <>
      <section className="flex items-center justify-center min-h-screen pb-10 md:flex">
        {/*title*/}
        <div className="grid items-center gap-0 md:gap-12 justify-items-center">
          <motion.div
            className="relative mt-20 mb-10 text-2xl font-bold text-center md:mt-0 md:mb-0 md:text-3xl lg:text-6xl text-v "
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            {name.map((letter, index) => {
              return (
                <TextSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </motion.div>

          {/*skills*/}
          <div className="grid grid-cols-4 gap-5 mx-10 lg:grid-cols-5 lg:gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`flex flex-col w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded-[10px] items-center justify-center bg-white shadow-lg ${skill.shadow}`}
                variants={fadeIn("up", skill.duration)}
                initial={"hidden"}
                whileInView={"show"}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.1 },
                }}
                viewport={{ once: false, amount: 0.7 }}
              >
                <img
                  src={skill.icon}
                  className="w-12 lg:w-16"
                  alt={`${skill.name} Icon`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

