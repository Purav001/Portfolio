import React from "react";
import works from "../Data/works";

import Carousel from "nuka-carousel";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const GraphicDesign = () => {

  const config = {
    containerClassName: "",
    nextButtonClassName: "rounded-full",
    nextButtonText: <FaChevronRight/>,
    pagingDotsClassName: "me-2",
    pagingDotsContainerClassName: "",
    prevButtonClassName: "rounded-full",
    prevButtonText: <FaChevronLeft/>
  }


  return (
    <section>
      {/*Container*/}
      <div className="pb-8 mx-5 rounded-[30px]">
        {/*Title*/}
        <motion.p
          className="py-5 text-2xl text-center sm:ml-24 sm:text-left"
          variants={fadeIn("up", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          Graphic designs
        </motion.p>
        {/*Card container*/}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-[1500px] items-center">
          {works.design.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="grid gap-3 p-8 mx-5 duration-200 ease-in-out bg-white shadow-lg rounded-2xl hover:-translate-y-3">
                  <Carousel
                    className="rounded-lg"
                    defaultControlsConfig={config}
                    wrapAround
                    autoplay
                  >
                    {project.image.map((pic, index) => (
                      <div className="object-contain md:h-[300px] h-[200px] max-w-full">
                        <img key={index} src={pic} />
                      </div>
                    ))}
                  </Carousel>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold upper">{project.title}</p>
                  </div>
                  <p>{project.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-semibold">Built with:</span>
                    <span className=" text-vBrd">{project.stack}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;