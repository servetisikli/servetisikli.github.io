import "./App.css";
// import React, { useState, useEffect } from "react";
import Carousels from "./components/Carousels";
import Header from "./components/Header";
// import ProjectCard from "./components/ProjectCard";
import "./themes.css";
// import { Button } from "react-bootstrap";
import AccordionCom from "./components/AccordionCom";
import About from "./components/About";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //   }
  // }, []);

  // const handleThemeChange = (selectedTheme) => {
  //   setTheme(selectedTheme);
  //   localStorage.setItem("theme", selectedTheme);
  // };

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <div className={`app ${theme}`}> */}
      {/* <BrowserRouter> */}
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Carousels />
        <About />
        <AccordionCom />
        {/* <ProjectCard /> */}
      </HashRouter>
      {/* </BrowserRouter> */}

      {/* <Button variant="light" onClick={() => handleThemeChange("light")}>
          Light
        </Button>
        <Button variant="dark" onClick={() => handleThemeChange("dark")}>
          Dark
        </Button> */}
      {/* </div> */}
    </main>
  );
}

export default App;
