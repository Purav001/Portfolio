import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts"
import Footer from './components/Footer'
import Header from "./components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Personal-website/home" element={<Home />} />
          <Route path="/Personal-website/about" element={<About />} />
          <Route path="/Personal-website/portfolio" element={<Portfolio />} />
          <Route path="/Personal-website/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default App;
