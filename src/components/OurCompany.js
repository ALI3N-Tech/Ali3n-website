import React from "react";
import { useEffect } from "react";
import Cards from "./Cards";
import "./OurCompany.css";
import Aos from "aos";
import "aos/dist/aos.css";

function OurCompany() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="our-company">
      <div className="ourCompanyTitles">
        <span>Our Enterprise</span>
        <h2>The Firms Owned By Ali3n </h2>
      </div>
      <div className="companies">
        <Cards
          text={"Space Walkers"}
          text2={
            "Spacewalker, the modelling agency of the ALI3N mother brand which houses our world-class classic models who are always available for standard commissioning and bookings. "
          }
        />
        <Cards
          text={"Alien Tech"}
          text2={
            "Ali3n Tech is a sub-brand of the Ali3n empire which handles everything tech related on behalf of our company and our numerous clients and you can subscribe to our newsletter which would give you adequate info as to when our tech contests and tech academy opens up for enrollment."
          }
        />
        <Cards
          text={"Alien Entertainment"}
          text2={
            "Ali3n Entertainment is the biggest sub-brand faction of the Ali3n brand that handles everything related to entertainment and lifestyle of the brand, our clients, our creatives and the general public and most of all, the GenZ community."
          }
        />
      </div>
    </div>
  );
}

export default OurCompany;
