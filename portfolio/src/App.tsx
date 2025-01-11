import "./App.css";
import AdditionalDescription from "./components/AdditionalDescription";
import Contactme from "./components/Contactme";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import {
  LucideFolder,
  LucideHome,
  Lightbulb,
  Wrench,
  NotebookPen,
  Facebook,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-black py-4 font-poppins animate-fall ">
        <header className="w-64 rounded-2xl py-3 px-4 mx-auto bg-[#1c1a19] flex justify-between mb-10">
          <span className="icons">
            <Link to="/">
              <LucideHome className="text-white cursor-pointer" size={22} />
            </Link>
          </span>
          <span className="icons">
            <Link to="/projects">
              <LucideFolder className="text-white cursor-pointer" size={22} />
            </Link>
          </span>
          <span className="icons experience">
            <Link to="/experience">
              <Lightbulb className="text-white cursor-pointer" size={22} />
            </Link>
          </span>
          <span className="icons">
            <Link to="/tools">
              <Wrench className="text-white cursor-pointer" size={22} />
            </Link>
          </span>
          <span className="icons">
            <Link to="/blog">
              <NotebookPen className="text-white cursor-pointer" size={22} />
            </Link>
          </span>
        </header>
        <div className="lg:flex lg:mx-20">
          <div>
            <Home />
          </div>
          <div className="lg:px-0 lg:py-5">
            <AdditionalDescription />
            <Projects />
            <Experience />
            <Tools />
            <Contactme />
            <footer className="w-full text-[#998f8f] text-center mt-8">
              Made with <span>💖</span> and{" "}
              <span className="text-[#f46c38]">JS</span>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
