import React, { useEffect } from "react";
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
import creative from "../images/creative.jpeg";
import wireless1 from "../images/wireless1.jpeg";
// import wireless2 from "../images/wireless2.jpeg";
import music from "../images/music promotion.jpeg";
import artiste from "../images/artiste mgt.jpeg";
import event from "../images/event mgt.jpeg";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

function SlidingSection() {
  // const ref = useRef(null);

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
          Under ALI3N we operate a wide-range of businesses and services that
          matches your desired goal(s)<br></br>Take a look below.
        </p>
      </div>

      <div id="main" className="scroll">
        <div className="first-item">
          <EachSlider
            src={cyber}
            h3={"WORLD OF TECH"}
            paragraph={
              "Explore our diverse world of tech and pick the tech services you seem to be needing for yourself or your brand."
            }
          />
          <EachSlider
            src={dj}
            h3={"TOP NOTCH CREATIVES"}
            paragraph={
              "Come onboard and book our numerous creatives representing various department on the ALI3N brand."
            }
          />
          <EachSlider
            src={fashionShow}
            h3={"WORLD CLASS MODELS BOOKING"}
            paragraph={
              "Step into spotlight as you link up with our prestige Creative Directors to place bookings for our World-class models for your brand, your businesses, your fashion show and a lot more."
            }
          />
          <EachSlider
            src={webDesign}
            h3={"ARTISTE MANAGEMENT"}
            paragraph={
              "Send in your artiste(s) for premium management, upbringing, artistry teachings and a lot more so as to improve their craft and sound."
            }
          />
        </div>
        <div className="second-item">
          <EachSlider
            src={wireless1}
            h3={"WIRELESS GIG"}
            paragraph={
              "Book us today and let us get you those gigs related to your creativity and craft."
            }
          />
          <EachSlider
            src={music}
            h3={"MUSIC PROMOTION AND DISTRIBUTION"}
            paragraph={
              "Bring in your songs or your artiste's songs for distribution and standard effective promotion."
            }
          />
          <EachSlider
            src={event}
            h3={"EVENT MGT AND PLANNING"}
            paragraph={
              "Let's come in as the event management company for your event(s) as we bring the public to your square with exclusive event contents."
            }
          />
          <EachSlider
            src={fashionShow}
            h3={"FASHION HUB"}
            paragraph={
              "Take a look at our fashion hub for exclusive fashion news, updates and our fashion marketplace for our Classy fashion accessories."
            }
          />
          <EachSlider
            src={artiste}
            h3={"ENTERTAINERS BRANDING AND REBRANDING"}
            paragraph={
              "Are you an entertainer??....Why not hit us up for premium branding and let us market your craft to interested audiences."
            }
          />
          <EachSlider
            src={creative}
            h3={"CREATIVES BUILD-UP"}
            paragraph={
              "Do you feel you are creative and you just need directions and a little bit of push to show you are the missing piece of a greater cause,poke us for your build-up programme."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SlidingSection;
