import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full min-h-screen gap-5 mx-auto"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className="text-4xl text-[#7c7cb3] font-bold text-center md:text-5xl">
        Projects:
      </h1>

      <div className="flex flex-col items-center">
        <h1>GAMES</h1>
        <div className="grid max-w-[1200px] grid-cols-1 gap-10 p-10 mx-auto text-center md:grid-cols-2 md:text-left md:items-center">
          <div className="order-2 text-left">
            <h1 className="text-4xl font-bold">Ciao</h1>
            <p className="">
              Questo progetto è stato realizzato il giorno del pero, finanziato
              da sta ceppa perche nessuno vuole uscire i soldi, Questo progetto
              è stato realizzato il giorno del pero, finanziato da sta ceppa
              perche nessuno vuole uscire i soldi, Questo progetto è stato
              realizzato il giorno del pero, finanziato da sta ceppa perche
              nessuno vuole uscire i soldi
            </p>
          </div>
          <div className="order-1">
            <img src="https://placehold.co/600x400"></img>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
