import "./App.css";
import Contactme from "./components/Contactme";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
function App() {
  return (
    <>
      <div className="w-screen min-h-screen bg-black py-4 font-poppins">
        <Home />
        <Projects />
        <Experience />
        <Tools />
        <Contactme />
        <footer className="w-full text-[#998f8f] text-center">
          Made with <span>💖</span> and{" "}
          <span className="text-[#f46c38]">JS</span>
        </footer>
      </div>
    </>
  );
}

export default App;
