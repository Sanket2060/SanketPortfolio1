import {
  LucideFolder,
  LucideHome,
  Lightbulb,
  Wrench,
  NotebookPen,
} from "lucide-react";
import "./App.css";
function App() {
  return (
    <>
      <div className="w-screen h-screen bg-black py-4 font-poppins">
        <header className="w-4/5 rounded-2xl py-3 px-4 mx-auto bg-[#1c1a19] flex justify-between mb-10">
          <span className="icons">
            <LucideHome className="text-white cursor-pointer" size={22} />
          </span>
          <span className="icons">
            <LucideFolder className="text-white cursor-pointer" size={22} />
          </span>
          <span className="icons experience">
            <Lightbulb className="text-white cursor-pointer" size={22} />
          </span>
          <span className="icons">
            <Wrench className="text-white cursor-pointer" size={22} />
          </span>
          <span className="icons">
            <NotebookPen className="text-white cursor-pointer" size={22} />
          </span>
        </header>
        <div className="aboutme">
          <div className="box flex flex-col  bg-white w-[90%] h-[450px] rounded-2xl mx-auto">
            <div className="image mx-auto w-[80%] h-52 rounded-xl mt-8 flex justify-center items-center">
              <img
                className="w-full h-full rounded-2xl object-cover"
                src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-1/449077157_2133807050325887_42418218596159450_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=hapCenHPIp8Q7kNvgHXyGY3&_nc_zt=24&_nc_ht=scontent.fpkr1-1.fna&_nc_gid=AUbF_zanXAeogdtEx6oN6CL&oh=00_AYCrDz_XQPmV5vfOHZWcZ61WbAg0qLCq67YJ6IE3ZA3S_w&oe=673FBDB3"
                alt="my-profile-pic"
              />
            </div>
            <div className="name text-center mt-5 text-3xl font-semibold">
              SANKET KARKI
            </div>
            <div className="description mt-4 text-center text-[#8b6b6e]">
              A Passionate Developer who has created impactful tech solutions to
              solve real-world problems.
            </div>
            <div className="socials">
              <span className=""></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
