import "./App.css";
import {
  LucideFolder,
  LucideHome,
  Lightbulb,
  Wrench,
  NotebookPen,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-black py-4 font-poppins animate-fall ">
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
        <div className="lg:flex lg:mx-16">
  <div className="lg:w-auto">
    <Home />
  </div>
  <div className="lg:flex-1 lg:px-0 lg:py-5">
    <Outlet />
    <footer className="w-full text-[#998f8f] text-center mt-8">
      Made with <span>💖</span> and <span className="text-[#f46c38]">JS</span>
    </footer>
  </div>
</div>

      </div>
    </>
  );
}

export default App;
