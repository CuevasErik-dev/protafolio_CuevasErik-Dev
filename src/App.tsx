import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import ProjectSection from "./components/sections/ProjectSection";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <ProjectSection />
    </>
  );
}

export default App;
