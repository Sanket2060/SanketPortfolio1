import { Github } from "lucide-react";
import SingleProject from "./SingleProject";
import bhojan from "../../public/bhojan.png";
import kagazpatra from '../../public/kagazpatra.png';
import fantasy from "../../public/fantasy.png";
import block from "../../public/block-it.png";


const Projects = () => {
  return (
    <div className="projects lg:px-20">
      <div className="topic mt-12 font-bold text-5xl">
        <div className="text-white mx-auto text-center ">RECENT</div>
        <div className="text-[#353334] mx-auto text-center">PROJECTS</div>
      </div>
      <div className="projectlist flex flex-col xl:w-[900px]">
        <div className="lg:flex lg:items-center lg:justify-between">
          <SingleProject
            name="Kagazpatra-Digitizing handwritten documents"
            description="Web Application"
              image={kagazpatra}
          />
          <div className="flex items-center gap-3">
          <button className="relative px-3 py-1 text-sm font-semibold text-red-500 border border-red-500 rounded-md animate-pulse">
            Live
            <span className="absolute inset-0 rounded-md animate-ping bg-red-500 opacity-20"></span>
          </button>
          <Github color="#555" className="hidden lg:inline opacity-50 cursor-default" />
      </div>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between">
          <SingleProject
            name="Khana-Food Waste Management"
            description="Web Application"
              image={bhojan}
          />
          <div className="flex items-center gap-3">
  <button className="relative px-3 py-1 text-sm font-semibold text-red-500 border border-red-500 rounded-md animate-pulse" onClick={() => window.open("https://bhojan-five.vercel.app/", "_blank")}>
    Live
    <span className="absolute inset-0 rounded-md animate-ping bg-red-500 opacity-20"></span>
  </button>
  <Github color="orange" className="hidden lg:inline" onClick={() => window.open("https://github.com/Sanket2060/Bhojan", "_blank")} />
</div>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between " >
          <SingleProject
            name="Fantasy Sports Management SAAS application"
            description="Mobile Application"
            image={fantasy}
          />
          <div className="flex items-center gap-3">
  <button className="px-3 py-1 text-sm font-semibold text-gray-400 border border-gray-600 rounded-md bg-[#1a1a1a] cursor-not-allowed">
  Live
</button>
  <Github color="orange" className="hidden lg:inline cursor-pointer" onClick={() => window.open("https://github.com/Sanket2060/fantasy-system-backend1", "_blank")} />
</div>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between">
          <SingleProject
            name="Block-it Web Extension"
            description="Web Application"
            image={block}
          />
          <div className="flex items-center gap-3">
  <button className="relative px-3 py-1 text-sm font-semibold text-red-500 border border-red-500 rounded-md animate-pulse">
    Live
    <span className="absolute inset-0 rounded-md animate-ping bg-red-500 opacity-20"></span>
  </button>
  <Github color="orange" className="hidden lg:inline" onClick={() => window.open("https://github.com/Sanket2060/Block-it-Web-Extension", "_blank")} />
</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
