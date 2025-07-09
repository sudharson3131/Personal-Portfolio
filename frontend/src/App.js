import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-base-200 pt-16">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="project" className="flex flex-col justify-start">
          <Project />
        </section>
        <section id="contact" >
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
