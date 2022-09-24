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
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis minus provident vitae, aspernatur praesentium voluptate perspiciatis fugit! Aliquam, tempora."
          }
        />
        <Cards
          text={"Alien Tech"}
          text2={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis minus provident vitae, aspernatur praesentium voluptate perspiciatis fugit! Aliquam, tempora."
          }
        />
        <Cards
          text={"Alien Entertainment"}
          text2={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis minus provident vitae, aspernatur praesentium voluptate perspiciatis fugit! Aliquam, tempora."
          }
        />
      </div>
    </div>
  );
}

export default OurCompany;
