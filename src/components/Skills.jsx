import React, { useState } from "react";
import { motion } from "framer-motion";
import skills from "../constants/skills";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";
import useViewport from "../hooks/useViewport";

const Skills = () => {
  const name = "My skill-set.".split("");
  const slicedSkills = skills.slice(0, 30);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { width } = useViewport(); // Use the custom hook to get the viewport width

  const handleSkillHover = (skillName) => {
    setHoveredSkill(skillName);
  };

  // Determine the number of columns based on the viewport width
  const getGridCols = () => {
    if (width >= 1024) {
      return "grid-cols-10";
    } else if (width >= 768) {
      return "grid-cols-6";
    } else {
      return "grid-cols-3";
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        {/*container*/}
        <div className="grid items-center gap-8 justify-items-center">
          {/*title*/}
          <motion.div
            className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-neutral-800"
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {name.map((letter, index) => (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            ))}
          </motion.div>
          {/*skills-stack*/}
          <div
            className={`grid ${getGridCols()} gap-3 mx-auto md:gap-6 lg:gap-8`}
          >
            {slicedSkills.map((skill, index) => (
              <motion.div
                key={index}
                className={`flex flex-col rounded-xl w-[55px] h-[55px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] items-center justify-center bg-white shadow-lg ${skill.shadow}`}
                variants={fadeIn("up", skill.duration)}
                initial="hidden"
                whileInView="show"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.1 },
                }}
                onMouseEnter={() => handleSkillHover(skill.name)}
                onMouseLeave={() => handleSkillHover(null)}
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
          {/* Display hovered skill name */}
          <div
            className="mt-4 text-center fixed bottom-0 left-0 w-full pb-20 text-purple-500"
            style={{ fontSize: "2rem" }}
          >
            {hoveredSkill && (
              <span className="font-bold">- {hoveredSkill} -</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;