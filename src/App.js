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
import { RingLoader } from "react-spinners";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import loader from "./images/Loading gif.gif";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [preloader, setPreloader] = useState(false);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // var loader = document.getElementById("preLoader");
    // // window.addEventListener("load", () => {
    // //   loader.style.display = "none";
    // // });
    // setTimeout(() => (loader.style.visibility = "hidden"), 4000);
    setPreloader(true);
    // setTimeout(() => {
    //   setPreloader(false);
    // }, 8000);

    window.addEventListener(
      "load",
      () => {
        setPreloader(false);
      },
      setTimeout(2000)
    );
  }, []);

  const override = {
    display: "flex",
    justifyContent: "center",
    margin: "25% auto",
  };

  return (
    <>
      {/* <div id="preLoader"></div> */}
      {preloader ? (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
        <RingLoader
          cssOverride={override}
          // className="preLoader"
          color={"#072a6c"}
          loading={preloader}
          size={100}
          margin={10}
          width={200}
        />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;
