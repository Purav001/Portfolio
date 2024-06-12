import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import TextSpan from "../utils/textSpan";
import { FiDownload } from "react-icons/fi";
import { FiEye} from "react-icons/fi";
import about from "../images/Georgie-About.png";
import Cv from "../constants/purav_resume.pdf";

const des ={
  display : 'inline'
}

const Hero2 = () => {
  const name = "About me.".split("");

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full min-h-screen text-neutral-800 ">
        {/*container*/}
        <div className="grid items-center gap-4 md:gap-6 lg:gap-8 justify-items-center lg:grid-cols-2">
          {/*image*/}
          <div className=" w-[200px] md:w-[300px] lg:w-[400px] xxl:w-[500px]">
            <motion.img
              variants={fadeIn("up", 0.1)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              src={about}
              alt="A fun vector image depicting Purav Saluja working on his pc"
            />
          </div>
          {/*text-box*/}
          <div className="grid items-center gap-1 md:gap-2 lg:gap-3 justify-items-center w-[300px] md:w-[400px]">
            {/*title*/}
            <motion.div
              className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-v"
              variants={fadeIn("down", 0.1)}
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
            {/*text*/}
            <div className="flex flex-col text-justify text-neutral-500 ">
              <motion.p
                variants={fadeIn("down", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
              >
                Driven by a passion for continual growth, I specialize in crafting resilient, top-tier solutions. Proficient in front-end technologies like ReactJS, Next.js, Bootstrap, MaterialUI, and TailwindCSS, coupled with a robust backend skill set encompassing Node.js, Express.js, MongoDB, PostgreSQL, and Firebase, I excel at tailoring innovative solutions to diverse project requirements. Seamlessly integrating front-end and back-end systems, I architect efficient, scalable applications that redefine user experiences.
              </motion.p>
            </div>
            {/*cv button*/}
            
            <motion.div
              className="px-5 py-2 mt-2 text-sm font-bold text-white uppercase border-b-4 rounded-full bg-vBtn bg-v hover:bg-vBtnHover border-vBtnHover hover:border-v"
              variants={fadeIn("down", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              style={des}
            >
              <a
                className="flex items-center gap-2"
                href={"https://drive.google.com/file/d/1JNAAzPekGxUVHyx-ds1tilTGLlXmweVT/view?usp=drive_link"}
                download="CV-GiorgioFaini"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload size={20} />
                <p className="font-semibold ">download cv</p>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
