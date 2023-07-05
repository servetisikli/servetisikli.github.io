import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../themes.css";
import React, { useState, useEffect } from "react";

function Header() {
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
    <Navbar
      className={`app ${theme}`}
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">Servet Isikli</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
        </Nav>
      </Container>
      <Button variant="light" onClick={() => handleThemeChange("light")}>
        Light
      </Button>
      <Button variant="dark" onClick={() => handleThemeChange("dark")}>
        Dark
      </Button>
    </Navbar>
  );
}

export default Header;
