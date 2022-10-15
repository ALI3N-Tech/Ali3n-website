import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { createContext } from "react";
import { AnimatePresence } from "framer-motion";
import EventsPage from "./components/pages/EventsPage";
import ContactUsPage from "./components/pages/ContactUsPage";

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
    // window.addEventListener("load", () => {
    //   loader.style.display = "none";
    // });
    setTimeout((loader.style.display = "none"), 4000);
  });
  return (
    <>
      <div id="preLoader"></div>
      <AnimatePresence>
        <Router>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Home theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/about-us"
              exact
              element={<About theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/events"
              exact
              element={<EventsPage theme={theme} toggleTheme={toggleTheme} />}
            />
            <Route
              path="/contact-us"
              exact
              element={
                <ContactUsPage theme={theme} toggleTheme={toggleTheme} />
              }
            />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
