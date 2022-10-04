import React from "react";
import AboutHeading from "../AboutHeading";
import "./About.css";
import { motion } from "framer-motion";
import Copyright from "../Copyright";

function About(props) {
  return (
    <motion.div
      className="aboutWrapper"
      id={props.theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutHeading />
      <Copyright />
    </motion.div>
  );
}

export default About;
