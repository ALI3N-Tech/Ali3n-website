import React, { useState } from "react";
import Academy from "../Academy";
import Hero1 from "../Hero1";
import MissionVision from "../MissionVision";
import OurCompany from "../OurCompany";
import OurCoreValues from "../OurCoreValues";
import SlidingSection from "../SlidingSection";
import Testimonials from "../Testimonials";
import "./Home.css";
// import ReactSwitch from "react-switch";

// export const ThemeContext = createContext(null);

function Home(props) {
  return (
    <div className="wrapper" id={props.theme}>
      <Hero1 />
      <OurCompany />
      <OurCoreValues />
      <SlidingSection />
      <MissionVision />
      <Testimonials />
      <Academy />
    </div>
  );
}

export default Home;
