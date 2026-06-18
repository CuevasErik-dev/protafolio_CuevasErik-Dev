import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import ProjectSection from "./components/sections/ProjectSection";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20" id="inicio">
        <Hero />
      </div>
      <div id="proyectos">
        <ProjectSection />
      </div>
      <div id="habilidades">
        <Skills />
      </div>
      <div id="contacto">

      </div>
    </div>
  );
}

export default App;
