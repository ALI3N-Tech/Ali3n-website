import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import { createContext } from "react";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import loader from "./images/Loading gif.gif";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    var loader = document.getElementById("preLoader");
    window.addEventListener("load", () => {
      loader.style.display = "none";
    });
  });
  return (
    <>
      <div id="preLoader"></div>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home theme={theme} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
