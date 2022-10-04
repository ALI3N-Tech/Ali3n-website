import React from "react";
import about from "../images/about.jpg";
import "./AboutHeading.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MissionVision from "./MissionVision";
import OurCoreValues from "./OurCoreValues";
// import SlidingSection from "./SlidingSection";
import OurCompany from "./OurCompany";

function AboutHeading() {
  return (
    <div className="aboutImage">
      <div className="topPart">
        <h3>About Us</h3>
        <p>
          <Link to="/" className="link-s">
            Home{" "}
          </Link>
          / <span>About Us</span>
        </p>
      </div>
      <OurCompany />
      <div className="coreValues">
        <OurCoreValues />
      </div>
      <div className="mission2">
        <MissionVision />
      </div>
      <Footer />
    </div>
  );
}

export default AboutHeading;
