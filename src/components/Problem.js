import React from "react";

function Problem(props) {
  return (
    <div className="img-wrap">
      <div className="img-one">
        <div className="the-image">
          <img src={props.src} alt="" />
        </div>
        <div className="img-text">
          <p>{props.img1Text1}</p>
          <span> {props.img1Text2}</span>
        </div>
      </div>
      <div className="img-two">
        <div className="img-text2">
          <p>{props.img2Text1}</p>
          <span>{props.img2Text2}</span>
        </div>
        <div className="the-image2">
          <img src={props.src2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Problem;
