import React from "react";
import video from "../images/video-2.mp4";
import "./Hero1.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Hero1() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <div className="scribbles">
        <h1>WELCOME TO ALI3N EMPIRE</h1>
        <p>
          Africa's First Tri-dimensional Brand Aimed At TECH, ENTERTAINMENT and
          FASHION. The newest home for creatives. <br></br> Welcome Onboard!
        </p>
        <div className="hero-btns">
          <Link>
            <Button buttonSize={"btn--large"} buttonStyle={"btn--primary"}>
              EXPLORE US
            </Button>
          </Link>
        </div>
      </div>
      {/* <section class="curved"></section> */}
    </div>
  );
}

export default Hero1;
