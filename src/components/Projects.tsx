import { Github } from "lucide-react";
import SingleProject from "./SingleProject";
import bhojan from "../../public/bhojan.png";
import kagazpatra from '../../public/kagazpatra.png';
import fantasy from "../../public/fantasy.png";
import block from "../../public/block-it.png";

const Projects = () => {
  const projects = [
    {
      name: "Kagazpatra-Digitizing handwritten documents",
      description: "Web Application",
      image: kagazpatra,
      live: null,
      github: null,
    },
    {
      name: "Khana-Food Waste Management",
      description: "Web Application",
      image: bhojan,
      live: "https://bhojan-five.vercel.app/",
      github: "https://github.com/Sanket2060/Bhojan",
    },
    {
      name: "Fantasy Sports Management SAAS application",
      description: "Mobile Application",
      image: fantasy,
      live: null,
      github: "https://github.com/Sanket2060/fantasy-system-backend1",
    },
    {
      name: "Block-it Web Extension",
      description: "Web Application",
      image: block,
      live: null,
      github: "https://github.com/Sanket2060/Block-it-Web-Extension",
    },
  ];

  return (
    <div className="projects lg:px-20">
      <div className="topic mt-12 font-bold text-5xl text-center">
        <div className="text-white">RECENT</div>
        <div className="text-[#353334]">PROJECTS</div>
      </div>

      <div className="projectlist flex flex-col xl:w-[900px] mt-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6"
          >
            <SingleProject
              name={proj.name}
              description={proj.description}
              image={proj.image}
            />
            <div className="flex gap-3 mt-3 ml-6 lg:mt-0">
              {proj.live ? (
                <button
                  className="relative px-3 py-1 text-sm font-semibold text-red-500 border border-red-500 rounded-md animate-pulse"
                  onClick={() => window.open(proj.live, "_blank")}
                >
                  Live
                  <span className="absolute inset-0 rounded-md animate-ping bg-red-500 opacity-20"></span>
                </button>
              ) : (
                <button className="px-3 py-1 text-sm font-semibold text-gray-400 border border-gray-600 rounded-md bg-[#1a1a1a] cursor-not-allowed">
                  Live
                </button>
              )}

              {proj.github ? (
                <Github
                  color="orange"
                  className="cursor-pointer"
                  onClick={() => window.open(proj.github, "_blank")}
                />
              ) : (
                <Github color="#555" className="opacity-50 cursor-default" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
