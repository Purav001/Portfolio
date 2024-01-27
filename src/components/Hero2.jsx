import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import about from '../images/Georgie-About.png'

const Hero2 = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center gap-10 pt-[100px] md:pt-0">
      {/*Container Grid*/}
      <div className="max-w-[1400px] items-center grid md:grid-cols-2 gap-10 md:gap-0">
        <motion.img
          variants={fadeIn("left", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-[300px] mx-auto md:w-[500px] xxl:w-[600px]"
          src={about}
          alt=""
        />
        {/*Container About-text*/}
        <div className="grid items-center gap-5 px-8 justify-items-center md:justify-items-start">
          <motion.h1
            className="text-4xl font-bold text-[#7c7cb3] text-center md:text-6xl md:text-left relative w-fit"
            variants={fadeIn("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
          >
            About me
            <span className="-z-1 absolute top-5 left-4 md:top-7 md:left-4 bg-[#7c7cb3]/10 h-[20px] w-full md:h-[35px]"></span>
          </motion.h1>
          <div className="flex flex-col font-light text-center px-5 md:px-0 md:text-[20px] md:text-left gap-4">
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Passionate web developer enthusiastic about tackling new
              challenges and crafting creative solutions. My curiosity drives me
              to continuously learn and approach problems with attention to
              detail.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2