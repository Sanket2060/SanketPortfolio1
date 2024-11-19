import "./App.css";
import Contactme from "./components/Contactme";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-black py-4 font-poppins animate-fall lg:flex">
        <div>
          <Home />
        </div>
        <div className="px-36">
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
    </>
  );
}

export default App;
