import React from "react";
import AboutHeading from "../AboutHeading";
import "./About.css";
import { motion } from "framer-motion";
import Copyright from "../Copyright";
import BackToTopButton from "../BackToTopButton";

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
      <BackToTopButton />
    </motion.div>
  );
}

export default About;
