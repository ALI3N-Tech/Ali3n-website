import React from "react";
import video from "../images/video-2.mp4";
import "./Hero1.css";
import { Button } from "./Button";

function Hero1() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <div className="scribbles">
        <h1>WELCOME TO ALI3N EMPIRE</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          debitis repellendus sint adipisci officiis pariatur<br></br> id eius
          error possimus exercitationem!
        </p>
        <div className="hero-btns">
          <Button buttonSize={"btn--large"} buttonStyle={"btn--primary"}>
            EXPLORE US
          </Button>
        </div>
      </div>
      {/* <section class="curved"></section> */}
    </div>
  );
}

export default Hero1;
