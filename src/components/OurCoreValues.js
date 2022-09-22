import React from "react";
import { useRef, useEffect } from "react";
import Problem from "./Problem";
import job from "../images/people.jpg";
import fashion from "../images/catwalk.jpg";
import "./OurCoreValues.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function OurCoreValues() {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const progressBars = ref.current;
    gsap.fromTo(
      progressBars.querySelectorAll(".progessing-bar"),
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration: 2.5,
        onUpdate: () => {
          // const percentage = document.querySelectorAll("#percentage");
          // percentage.innerHTML =
          //   100 * progressBars.querySelectorAll(".progessing-bar").style.scaleX;

          const percentage = document.querySelectorAll("#percentage");
          percentage.forEach((item, index)=> {
            item.innerHTML = Math.round(gsap.getProperty(
              ".progessing-bar",
              "scaleX"
            ) * 100) + '%';
          })
          
        },

        ease: "bounce.out",
        transformOrigin: "left",
        scrollTrigger: {
          trigger: progressBars.querySelector(".values-content"),
          start: "top center",
          end: "bottom top",
          // scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="values" ref={ref}>
      <Problem
        src={job}
        img1Text1={"15+"}
        img1Text2={" EXPERT"}
        img2Text1={"30+"}
        img2Text2={" CLIENTS"}
        src2={fashion}
      />
      <div className="values-content">
        <div className="values-content-heading">
          <span>About Us</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="values-content-body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            perspiciatis exercitationem suscipit hic veritatis. Quam quos cumque
            eius perferendis maxime nemo, repudiandae aut officia qui sint
            voluptatum impedit, nam dolor. <br></br>
            <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, praesentium quas. Porro consequuntur reprehenderit nulla
            quos? Deleniti consequuntur laudantium optio, eveniet ut dignissimos
            aperiam similique voluptate, voluptatibus sint dolorem ipsum?
          </p>
        </div>
        <div className="animation-area">
          <div className="progessBar-heading">
            <p>SKILLED EMPLOYEE</p>
            <span id="percentage"></span>
          </div>
          <div className="progress-bar">
            <div className="progessing-bar" id="progressBar"></div>
          </div>
        </div>

        <div className="animation-area">
          <div className="progessBar-heading">
            <p>QUALITY SERVICES</p>
            <span id="percentage"></span>
          </div>
          <div className="progress-bar">
            <div className="progessing-bar" id="progressBar"></div>
          </div>
        </div>

        <div className="animation-area">
          <div className="progessBar-heading">
            <p>PROJECT COMPLETED</p>
            <span id="percentage"></span>
          </div>
          <div className="progress-bar">
            <div className="progessing-bar" id="progressBar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCoreValues;
