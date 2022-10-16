import React from "react";
import { motion } from "framer-motion";
import Events from "../Events";
import Copyright from "../Copyright";
import BackToTopButton from "../BackToTopButton";

function EventsPage(props) {
  return (
    <motion.div
      className="aboutWrapper"
      id={props.theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Events />
      <Copyright />
      <BackToTopButton />
    </motion.div>
  );
}

export default EventsPage;
