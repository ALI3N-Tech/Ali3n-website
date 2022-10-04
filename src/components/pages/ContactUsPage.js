import React from "react";
import { motion } from "framer-motion";
import ContactUs from "../ContactUs";
import Copyright from "../Copyright";

function ContactUsPage(props) {
  return (
    <motion.div
      className="aboutWrapper"
      id={props.theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContactUs />
      <Copyright />
    </motion.div>
  );
}

export default ContactUsPage;
