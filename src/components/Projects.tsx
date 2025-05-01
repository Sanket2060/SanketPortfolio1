import { MoveUpRight } from "lucide-react";
import SingleProject from "./SingleProject";
import bhojan from "../../public/bhojan.png";
import trip from "../../public/tripsplit.png";
import block from "../../public/block-it.png";

const Projects = () => {
  return (
    <div className="projects lg:px-20">
      <div className="topic mt-12 lg font-bold text-5xl">
        <div className="text-white mx-auto text-center ">RECENT</div>
        <div className="text-[#353334] mx-auto text-center">PROJECTS</div>
      </div>
      <div className="projectlist flex flex-col">
        <div className="lg:flex lg:items-center lg:justify-between" onClick={() => window.open("https://bhojan-five.vercel.app/", "_blank")}>
          <SingleProject
            name="Khana-Food Waste Management"
            description="Web Application"
              image={bhojan}
          />
          <MoveUpRight color="orange" className="hidden lg:inline" />
        </div>
        <div className="lg:flex lg:items-center lg:justify-between " onClick={() => window.open("https://github.com/Sanket2060/TripSplit", "_blank")}>
          <SingleProject
            name="TripSplit"
            description="Web Application"
            image={trip}
          />
          <MoveUpRight color="orange" className="hidden lg:inline" />
        </div>
        <div className="lg:flex lg:items-center lg:justify-between" onClick={() => window.open("https://github.com/Sanket2060/Block-it-Web-Extension", "_blank")}>
          <SingleProject
            name="Block-it Web Extension"
            description="Web Application"
            image={block}
          />
          <MoveUpRight color="orange" className="hidden lg:inline" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
