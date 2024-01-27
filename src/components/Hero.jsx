import React from 'react'
import avatar from "../images/Georgie-Home.gif";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Hero = () => {
  return (
    <div className="flex items-center h-screen pt-10 md:pt-0">
    <div className="max-w-[1200px] items-center grid mx-auto md:grid-cols-2 gap-7 md:gap-0 lg:gap-5">
      {/*Immagine*/}
      <motion.img
        variants={fadeIn("right", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="md:order-1 w-[250px] mx-auto md:w-[500px] xxl:w-[600px] drop-shadow-lg"
        src={avatar}
        alt=""
      />

      {/*Container Testo*/}
      <div className="flex flex-col items-center gap-2 px-5 mx-auto text-center md:gap-4 md:text-right md:items-end">
        <motion.p
          className="md:text-4xl"
          variants={fadeIn("left", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          className="text-4xl text-[#7c7cb3] font-bold md:text-7xl relative"
          variants={fadeIn("left", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Giorgio Faini
          <span className="-z-1 absolute top-4 left-2 md:top-9 md:left-4 bg-[#7c7cb3]/10 h-[25px] w-full md:h-[35px]"></span>
        </motion.h1>
        <motion.h2
          className="text-2xl font-bold text-gray-700 md:text-4xl"
          variants={fadeIn("left", 0.3)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          I'm a Web Developer
        </motion.h2>
        <motion.p
          className=" font-light md:text-[22px]"
          variants={fadeIn("left", 0.4)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          Constantly focused on learning and expanding my expertise,
          crafting ever-improving, high-performing solutions.
        </motion.p>
      </div>
    </div>
  </div>
  )
}

export default Hero