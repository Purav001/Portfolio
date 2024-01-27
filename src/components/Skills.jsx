import React from "react";
import { motion } from "framer-motion";
import skills from '../skillsData/skills'
import { fadeIn } from "../utils/variants";


const Skills = () => {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen md:flex">
        <div className="grid items-center gap-0 md:gap-12 justify-items-center md:justify-items-start">
          <motion.div
            className="mt-20 md:mt-0 text-2xl md:text-5xl font-bold text-[#7c7cb3] text-center md:text-left relative w-fit "
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
          >
            My evolving skill-set<span className="text-orange-700 ">*</span>
            <span className="-z-1 absolute top-4 left-3 md:top-5 md:left-4 bg-[#7c7cb3]/10 h-[15px] w-full md:h-[35px]"></span>
          </motion.div>

          <div className="grid grid-cols-3 py-10 gap-3 md:gap-10 text-[12px] text-center md:grid-cols-10 bg-white shadow-lg">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={skill.class}
                variants={fadeIn("up", skill.duration)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <img
                  src={skill.icon}
                  className="w-16"
                  alt={`${skill.name} Icon`}
                />
                <p className="mt-1">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

