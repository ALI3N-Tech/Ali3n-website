import React from "react";
// import { Link } from "react-router-dom";
// import { SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import "./swiper/swiper-bundle.css";
// import "swiper/css";

// import { Button } from "./Button";

function EachSlider(props) {
  // const slides = [];
  // const readMore={
  //     fontStyle:'20px',
  //     color:
  // }

  return (
    <div className="scroll-item">
      <div className="each-slider">
        <div className="slider-img">
          <img src={props.src} alt="" />
        </div>
        <div className="slider-text">
          <h3> {props.h3}</h3>
          <p>{props.paragraph}</p>
          <div className="read-more">{/* <Button>Read More</Button> */}</div>
        </div>
      </div>
    </div>
  );
}

export default EachSlider;
