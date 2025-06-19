import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";
function App() {
  return (
    <div>
      <Navbar />
      
      {/* Shared background for both Home and Project */}
      <div className="bg-base-200 min-h-screen pt-10">
        <Home />
        <div id="project" className="flex flex-col justify-start py-4 px-10">
          <Project />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
