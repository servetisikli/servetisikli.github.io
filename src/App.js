import "./App.css";
import Carousels from "./components/Carousels";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousels />
      <Home />
      <ProjectCard />
    </div>
  );
}

export default App;
