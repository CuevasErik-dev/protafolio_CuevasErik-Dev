import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import ProjectSection from "./components/sections/ProjectSection";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <div className="" id="inicio">
        <Hero />
      </div>
      <div id="proyectos">

        <ProjectSection />
      </div>
      <div id="habilidades">
        <Skills />
      </div>
      <div className="pt-4" id="contacto">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
