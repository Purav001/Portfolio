import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import about from '../images/Georgie-About.png'
import { FiDownload } from "react-icons/fi";
import TextSpan from '../utils/textSpan';
import Cv from "../Data/CV-GiorgioFaini.pdf"



const Hero2 = () => {

  const name = "About me.".split("");

  return (
    <section className="bg-[#FAFAFA] min-h-screen flex flex-col items-center justify-center gap-10 pt-[50px] md:pt-0 text-neutral-800">
      {/*Container Grid*/}
      <div className="max-w-[1400px] items-center grid md:grid-cols-2 gap-10 md:gap-20">
        <motion.img
          variants={fadeIn("left", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="w-[250px] mx-auto md:w-[500px] xxl:w-[600px]"
          src={about}
          alt=""
        />
        {/*Container About-text*/}
        <div className="grid items-center gap-5 px-8 justify-items-center">
          <motion.div
            className="flex text-[35px] font-bold text-center text-v md:text-6xl md:text-left"
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

          <div className="flex flex-col font-normal text-justify px-5 md:px-0 text-[14px] md:text-[20px] gap-4 max-w-[500px] text-neutral-500">
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              Passionate developer, always curious and eager to learn.
              Specializing in web design, I create 2D games and engage in
              graphic design. Embracing challenges, I strive for continuous
              growth in both development and design realms.
            </motion.p>
          </div>

          <motion.div
            className="px-5 py-2 mt-2 font-bold text-white uppercase border-b-4 rounded-lg bg-vBtn bg-v hover:bg-vBtnHover border-vBtnHover hover:border-v"
            variants={fadeIn("right", 0.3)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
          <a className='flex items-center gap-2' href={Cv} download="CV-GiorgioFaini" rel="noopener noreferrer">
          <FiDownload size={20}/>
          <p className='font-semibold '>download cv</p>
          </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Hero2