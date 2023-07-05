import "./App.css";
import React, { useState, useEffect } from "react";
import Carousels from "./components/Carousels";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Home from "./pages/Home";
import "./themes.css";
import { Button } from "react-bootstrap";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Carousels />
      <Home />
      <ProjectCard />
      <Button variant="light" onClick={() => handleThemeChange("light")}>
        Light
      </Button>
      <Button variant="dark" onClick={() => handleThemeChange("dark")}>
        Dark
      </Button>
    </div>
  );
}

export default App;
