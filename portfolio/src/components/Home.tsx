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
import insta from "../assets/insta.png";

const Home = () => {
  return (
    <div className="home">
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
      <div className="card">
        <div className="box flex flex-col  bg-white w-[90%] h-[450px] lg:h-[550px] rounded-2xl mx-auto">
          <div className="image mx-auto w-64 h-52 lg:h-72 rounded-xl mt-8 flex justify-center items-center">
            <img
              className="w-full h-full rounded-2xl object-cover"
              src={insta}
              alt="my-profile-pic"
            />
          </div>
          <div className="name text-center mt-5 text-3xl font-semibold">
            SANKET KARKI
          </div>
          <div className="description mt-4 text-center text-[#8b6b6e] md:px-40 lg:px-72">
            A Passionate Developer who has created impactful tech solutions to
            solve real-world problems.
          </div>
          <div className="socials flex mt-5  justify-around mx-10 sm:px-52 lg:px-72">
            <span className="">
              <Linkedin color="#f46c38" />
            </span>
            <span className="">
              <Instagram color="#f46c38" />
            </span>
            <span className="">
              <Facebook color="#f46c38" />
            </span>
            <span className="">
              <Mail color="#f46c38" />
            </span>
          </div>
        </div>
      </div>
      <div className="further-description">
        <div className="post mt-6 font-bold text-5xl">
          <div className="text-white mx-auto text-center ">SOFTWARE</div>
          <div className="text-[#353334] mx-auto text-center">ENGINEER</div>
        </div>
        <div className="description text-[#998f8f] text-center mt-4 leading-normal smallmobile:px-8 md:px-40">
          Passionate about building impactful solutions. Specialize in crafting
          seamless and efficient applications.
        </div>
      </div>
      <div className="experience mt-20 sm:flex sm:justify-center">
        <div className="row-one flex justify-center">
          <div className="first flex flex-col pr-6  sm:pr-8">
            <div className="text-white font-semibold text-5xl">+1</div>
            <div className="text-[#998f8f] text-base">
              <div className="text-left">YEARS OF </div>
              <div className="text-left">EXPERIENCE</div>
            </div>
          </div>
          <div className="second flex flex-col sm:pr-8">
            <div className="text-white font-semibold text-5xl">+10</div>
            <div className="text-[#998f8f] text-base">
              <div className="">PROJECTS</div>
              <div>COMPLETED</div>
            </div>
          </div>
        </div>
        <div className="third row-two flex text-center flex-col mt-8 sm:mt-0">
          <div className="text-white font-semibold text-5xl">+1</div>
          <div className="text-[#998f8f] text-base">
            <div className="">WORLDWIDE</div>
            <div> CLIENTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
