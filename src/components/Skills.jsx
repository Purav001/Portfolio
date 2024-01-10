import React from "react";
import skills from "../skillsData/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center pt-[100px] w-full min-h-screen gap-5 mx-auto"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className="text-4xl text-[#7c7cb3] font-bold text-center md:text-5xl">
        Skills:
      </h1>
      <div className="grid grid-cols-3 gap-10 p-10 mx-auto text-center md:grid-cols-5">
        {skills.map((skill, index) => (
          <div key={index} className="duration-100 hover:scale-110">
            <img
              src={skill.icon}
              className="mx-auto max-w-[60px] md:max-w-[120px]"
              alt={`${skill.name} Icon`}
            />
            <p className="py-4 text-[10px] md:text-[15px]">{skill.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
