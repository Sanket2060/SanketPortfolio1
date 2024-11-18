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
      </div>
    </>
  );
}

export default App;
