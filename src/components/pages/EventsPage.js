import React from "react";
import { motion } from "framer-motion";
import Events from "../Events";
import Copyright from "../Copyright";

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
    </motion.div>
  );
}

export default EventsPage;
