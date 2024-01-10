import React from "react";
import George from "../assets/George.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
      <motion.div className="flex items-center w-full h-screen px-4 pt-10 md:px-0"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1200px] items-center my-auto grid mx-auto md:grid-cols-2 gap-10 md:gap-0">
          <img className="md:order-1 w-[250px] mx-auto md:w-[500px]" src={George} alt="" />
          <div className="flex flex-col gap-2 px-4 mx-auto text-center md:text-right">
            <p className="md:text-4xl">Hi, my name is</p>
            <h1 className="text-4xl text-[#7c7cb3] font-bold md:text-7xl">Giorgio Faini</h1>
            <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
              I'm a Web Developer
            </h2>
            <p className="">
              I'm a web developer specializing in building (and designing) excepttional digital experiences. Currently, I'm focused on building
              full-responsive web
            </p>
          </div>
        </div>
      </motion.div>
  );
};

export default Home;

