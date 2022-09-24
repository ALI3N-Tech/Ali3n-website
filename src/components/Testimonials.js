import React, { useEffect } from "react";
import "./Testimonials.css";
import Aos from "aos";
import "aos/dist/aos.css";
import IndividualTestimony from "./IndividualTestimony";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";

function Testimonials() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="testimonySection" data-aos="zoom-in">
      <div className="testimonySectionHeading">
        <span>Testimonials</span>
        <h2>What People Say About Us</h2>
      </div>
      <div className="ourTestimonies">
        <IndividualTestimony src={img1} h3={"Ayo"} span={"Forex Trader"} />
        <IndividualTestimony src={img2} h3={"Christian"} span={"Networer"} />
        <IndividualTestimony src={img3} h3={"Sultan"} span={"Web Dev"} />
        <IndividualTestimony src={img4} h3={"Mary"} span={"Web Designer"} />
        <IndividualTestimony
          src={img5}
          h3={"Grace"}
          span={"Fashion Designer"}
        />
        {/* <IndividualTestimony src={img2} h3={"Ayo"} span={"Forex Trader"} />
        <IndividualTestimony src={img1} h3={"Ayo"} span={"Forex Trader"} /> */}
      </div>
    </div>
  );
}

export default Testimonials;
