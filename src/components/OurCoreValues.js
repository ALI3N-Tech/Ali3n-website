import React from "react";
import { useRef, useEffect } from "react";
import Problem from "./Problem";
import job from "../images/people.jpg";
import fashion from "../images/catwalk.jpg";
import "./OurCoreValues.css";
import { gsap } from "gsap";
import Aos from "aos";
import "aos/dist/aos.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function OurCoreValues() {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // const count = { value: 0 };
  // const newValue = 100;

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
          percentage.forEach((item, index) => {
            item.innerHTML =
              Math.round(gsap.getProperty(".progessing-bar", "scaleX") * 100) +
              "%";
          });
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

    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-right" className="values" ref={ref}>
      <Problem
        src={job}
        img1Text1={"15+"}
        img1Text2={" EXPERT"}
        img2Text1={"30+"}
        img2Text2={" CLIENTS"}
        src2={fashion}
      />
      <div data-aos="fade-left" className="values-content">
        <div className="values-content-heading">
          <span>About Us</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="values-content-body">
          <p>
            The ALI3N Brand is a tri-dimensional brand focusing on FASHION,
            ENTERTAINMENT and TECH and the creatives sectioned in each
            department. Ali3n is coupled with the responsibility of harboring
            these creatives and connecting them with bigger individuals as well
            as working on standard projects with them. WE also take it as a
            mantra to provide the best of services to our clients, be it private
            individuals or companies<br></br>
            <br></br> We make all of these possible by utilizing our 21st
            century available resources in areas which they are needed the most,
            and not to forget our skilled and creative employees who are skilled
            in each faction they occupy and manage.
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
