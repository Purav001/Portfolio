import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/skills" element= {<Skills/>} />
          <Route path="/projects" element= {<Projects/>} />
          <Route path="/contacts" element= {<Contacts/>} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default App;
