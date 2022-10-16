import React from "react";
import Academy from "../Academy";
import Copyright from "../Copyright";
import Footer from "../Footer";
import Hero1 from "../Hero1";
import MissionVision from "../MissionVision";
import OurCompany from "../OurCompany";
import OurCoreValues from "../OurCoreValues";
import SlidingSection from "../SlidingSection";
import Testimonials from "../Testimonials";
import "./Home.css";
import { motion } from "framer-motion";
import BackToTopButton from "../BackToTopButton";

// import ReactSwitch from "react-switch";

// export const ThemeContext = createContext(null);

function Home(props) {
  return (
    <motion.div
      className="wrapper"
      id={props.theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero1 />
      <OurCompany />
      <OurCoreValues />
      <SlidingSection />
      <MissionVision />
      <Testimonials />
      <Academy />

      <BackToTopButton />
      <Footer />
      <Copyright />
    </motion.div>
  );
}

export default Home;
