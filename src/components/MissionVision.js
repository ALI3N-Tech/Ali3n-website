import React, { useEffect } from "react";
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
      <div className="column" data-aos="fade-left">
        {/* <Problem
          src={job}
          img1Text1={"30+"}
          img1Text2={" CLIENTS"}
          img2Text1={"50+"}
          img2Text2={" MEMBERS"}
          src2={fashion}
          className="problem"
        /> */}
      </div>
      <div className="mission-heading" data-aos="fade-right">
        <div className="missionMainHeading">
          <span>Our Mission & Vision</span>
          <h2>We Build prosperity & self-sufficiency</h2>
        </div>
        <div className="mission-paragraph">
          <p>
            Prosperity and sel-sufficiency on company's job(s) and our client's
            jobs would always come in as first hand priority. Same goes to our
            world-class creatives in each factions.
            <br></br>Do you feel your brand,business, craft or creativity is not
            self-suffient enough?? Why not hit us up?
          </p>
        </div>

        <div className="productWrapper" data-aos="fade-left">
          <div className="products">
            <div className="productImg">
              <FaChartArea />
            </div>
            <div className="productBody">
              <h3>Entreprenureship</h3>
              <p>
                Giving GenZs and creatives the premium ability to be sound and
                verified entreprenures in their various field.
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
                Building the best leadership traits for our entrusted clients
                and creatives, as well as with-holding the leadership position
                among brands in Africa.
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
                Making excellence our watchword as well as making excellence the
                status of whatever we work on and our client's works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
