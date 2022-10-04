import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhoneAlt, FaRocket } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Forming from "./Form";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

// import { IoRocketSharp } from "react-icons/lo";
// import { Button } from "./Button";
// import Form from "form-component";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="topPart">
        <h3>Contact Us</h3>
        <p>
          <Link to="/" className="link-s">
            Home{" "}
          </Link>
          / <span>Contact Us</span>
        </p>
      </div>
      <div className="contactUsBody">
        <div className="contactUsHeading">
          <span>Send Messages</span>
          <h2>We Are Here To Help You</h2>
        </div>
        <div className="wrapperWrapper">
          <div className="theContacts">
            <div className="contactIcon">
              <FaLocationArrow />
            </div>
            <div className="contactTexting">
              <span>Our Location</span>
              <p>EveryWhere On Earth</p>
            </div>
          </div>
          <div className="theContacts">
            <div className="contactIcon">
              <FaPhoneAlt />
            </div>
            <div className="contactTexting">
              <span>Phone</span>
              <p>+2349152033235</p>
            </div>
          </div>

          <div className="theContacts">
            <div className="contactIcon">
              <HiOutlineMail />
            </div>
            <div className="contactTexting">
              <span>Email</span>
              <p> Ali3n.initiative.ng@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="forming">
        <Newsletter />
        <Forming />
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
