import { MoveUpRight } from "lucide-react";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div className="projects">
      <div className="topic mt-12 font-bold text-5xl">
        <div className="text-white mx-auto text-center ">RECENT</div>
        <div className="text-[#353334] mx-auto text-center">PROJECTS</div>
      </div>
      <div className="projectlist flex flex-col">
        <div className="lg:flex lg:items-center lg:justify-between">
          <SingleProject
            name="Khana.me"
            description="Web Application"
            image="https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673636348356?e=1737590400&v=beta&t=iKZ467XNwcaBA_w_cLOrbigVUK9uVFDgt2_i3zKXcFU"
          />
          <MoveUpRight color="orange" className="hidden lg:inline" />
        </div>
        <div className="lg:flex lg:items-center lg:justify-between ">
          <SingleProject
            name="Khana.me"
            description="Web Application"
            image="https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673636348356?e=1737590400&v=beta&t=iKZ467XNwcaBA_w_cLOrbigVUK9uVFDgt2_i3zKXcFU"
          />
          <MoveUpRight color="orange" className="hidden lg:inline" />
        </div>
        <div className="lg:flex lg:items-center lg:justify-between">
          <SingleProject
            name="Khana.me"
            description="Web Application"
            image="https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673636348356?e=1737590400&v=beta&t=iKZ467XNwcaBA_w_cLOrbigVUK9uVFDgt2_i3zKXcFU"
          />
          <MoveUpRight color="orange" className="hidden lg:inline" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
