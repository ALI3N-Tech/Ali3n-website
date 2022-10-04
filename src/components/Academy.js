import React, { useEffect } from "react";
import "./Academy.css";
import Aos from "aos";
import "aos/dist/aos.css";
import alien from "../images/Alien-pic.jpg";

function Academy() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="academySection">
      <div className="academyHeading" data-aos="fade-up">
        <span>Our Upcoming Events</span>
        <h2>Stay Tuned For Our Upcoming Events</h2>
      </div>
      <div className="academyImg">
        <div className="academyImage" data-aos="fade-left">
          <div className="academyImgOne">
            <img src={alien} alt="" />
          </div>
          <div className="academyHover">
            <span>soon</span>
            <p>Coming Soon</p>
          </div>
        </div>
        <div className="academyImage" data-aos="fade-right">
          <div className="academyImgOne">
            <img src={alien} alt="" />
          </div>
          <div className="academyHover">
            <span>soon</span>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
