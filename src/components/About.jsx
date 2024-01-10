import React from "react";
import George from "../assets/Georgie-About.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="flex items-center w-full h-screen px-4 pt-10 md:px-0"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1200px] items-center my-auto grid mx-auto md:grid-cols-2 gap-10 md:gap-0">
        <img
          className="max-w-[300px] mx-auto md:max-w-[500px]"
          src={George}
          alt=""
        />
        <div className="flex flex-col gap-4 px-8">
          <h1 className="text-4xl font-bold text-[#7c7cb3] text-center md:text-5xl md:text-left">
            About me
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            feugiat urna. Sed ex nisi, commodo vestibulum justo sit amet,
            tincidunt dignissim sapien. Donec cursus sem sit amet lacus
            malesuada, at maximus lorem aliquet. Suspendisse sit amet placerat
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
