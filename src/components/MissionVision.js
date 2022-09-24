import React, { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Problem from "./Problem";
import job from "../images/hands.jpg";
import fashion from "../images/teamwork.jpg";
import "./MissionVision.css";
import { FaChartArea, FaSortAmountUpAlt, FaMountain } from "react-icons/fa";

function MissionVision() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="missionVision">
      <div className="mission-heading" data-aos="fade-right">
        <div className="missionMainHeading">
          <span>Our Mission & Vision</span>
          <h2>We Build prosperity & self-sufficiency</h2>
        </div>
        <div className="mission-paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dolorum animi reiciendis suscipit quis inventore tempora sed
            deleniti quibusdam modi, perferendis iste temporibus, veniam eos
            natus repellat incidunt tenetur quos!
          </p>
        </div>

        <div className="productWrapper" data-aos="fade-left">
          <div className="products">
            <div className="productImg">
              <FaChartArea />
            </div>
            <div className="productBody">
              <h3>Entreprenuship</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                fuga quidem possimus earum, laboriosam placeat!
              </p>
            </div>
          </div>
          <div className="products">
            <div className="productImg">
              <FaMountain />
            </div>
            <div className="productBody">
              <h3>Leadership</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                fuga quidem possimus earum, laboriosam placeat!
              </p>
            </div>
          </div>
          <div className="products">
            <div className="productImg">
              <FaSortAmountUpAlt />
            </div>
            <div className="productBody">
              <h3>Excellence</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                fuga quidem possimus earum, laboriosam placeat!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="column" data-aos="fade-left">
        <Problem
          src={job}
          img1Text1={"30+"}
          img1Text2={" CLIENTS"}
          img2Text1={"50+"}
          img2Text2={" MEMBERS"}
          src2={fashion}
          className="problem"
        />
      </div>
    </div>
  );
}

export default MissionVision;
