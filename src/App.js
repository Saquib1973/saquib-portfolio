import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/about/About.jsx";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <div className="mt-[92px]">
        <Home />
      </div>
      <About />
      <Project />
    </div>
  );
}

export default App;
