import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home";
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
