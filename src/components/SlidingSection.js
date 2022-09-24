import React, { useEffect, useRef } from "react";
import "./SlidingSection.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Swiper } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
import EachSlider from "./EachSlider";
import cyber from "../images/cyber.jpg";
import dj from "../images/dj.jpg";
import fashionShow from "../images/fashionShow.jpg";
import webDesign from "../images/webDesign.jpg";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

function SlidingSection() {
  const ref = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // const slider = ref.current;
    // gsap.fromTo(
    //   slider,
    //   {
    //     x: 0,
    //   },
    //   {
    //     x: "100%",
    //     duration: 1.5,
    //     scrollTrigger: {
    //       trigger: slider,
    //       start: "top center",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   }
    // );

    Aos.init({ duration: 2000 });
  });

  return (
    <div className="ourServices" data-aos="fade-up">
      <div className="heading-services">
        <div className="heading-services-title">
          <span>Our Services</span>
          <h2>Businesses That Align With Our Goals</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident
          voluptates sunt quo dicta illum error corrupti nemo corporis nihil?
        </p>
      </div>

      <div id="main" className="scroll">
        <div className="first-item">
          <EachSlider
            src={cyber}
            h3={"WORLD OF TECH"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempore. Saepe non cumque unde tenetur possimus nobis quod incidunt earum obcaecati adipisci! Odio nisi autem distinctio fuga iste dignissimos ullam."
            }
          />
          <EachSlider
            src={dj}
            h3={"TOP NOTCH CREATIVES"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempore. Saepe non cumque unde tenetur possimus nobis quod incidunt earum obcaecati adipisci! Odio nisi autem distinctio fuga iste dignissimos ullam."
            }
          />
          <EachSlider
            src={fashionShow}
            h3={"WORLD CLASS MODELS"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempore. Saepe non cumque unde tenetur possimus nobis quod incidunt earum obcaecati adipisci! Odio nisi autem distinctio fuga iste dignissimos ullam."
            }
          />
          <EachSlider
            src={webDesign}
            h3={"CLASSIC WEB DESIGN"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempore. Saepe non cumque unde tenetur possimus nobis quod incidunt earum obcaecati adipisci! Odio nisi autem distinctio fuga iste dignissimos ullam."
            }
          />
        </div>
        <div className="second-item">
          <EachSlider
            src={cyber}
            h3={"WORLD OF TECH"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempore. Saepe non cumque unde tenetur possimus nobis quod incidunt earum obcaecati adipisci! Odio nisi autem distinctio fuga iste dignissimos ullam."
            }
          />
          <EachSlider
            src={dj}
            h3={"TOP NOTCH CREATIVES"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempore. Saepe non cumque unde tenetur possimus nobis quod incidunt earum obcaecati adipisci! Odio nisi autem distinctio fuga iste dignissimos ullam."
            }
          />
          <EachSlider
            src={fashionShow}
            h3={"WORLD CLASS MODELS"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempore. Saepe non cumque unde tenetur possimus nobis quod incidunt earum obcaecati adipisci! Odio nisi autem distinctio fuga iste dignissimos ullam."
            }
          />
          <EachSlider
            src={webDesign}
            h3={"CLASSIC WEB DESIGN"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, tempore. Saepe non cumque unde tenetur possimus nobis quod incidunt earum obcaecati adipisci! Odio nisi autem distinctio fuga iste dignissimos ullam."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SlidingSection;
