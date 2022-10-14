import React from "react";
import { FaStar, FaRegStar, FaQuoteRight } from "react-icons/fa";

function IndividualTestimony(props) {
  return (
    <div className="myTestimony">
      <div className="testimonyTop">
        <div className="testimonyFace">
          <img src={props.src} alt="" />
        </div>
        <div className="testimonyHeading">
          <h3>{props.h3}</h3>
          <span>{props.span}</span>
        </div>
      </div>
      <div className="testimonyBody">
        <p>
          ALI3N is the future, which will definitely be among the leading brands
          in Africa and the world at large.
        </p>
      </div>
      <div className="testimonyBottom">
        <div className="star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
        <div className="commentImage">
          <FaQuoteRight />
        </div>
      </div>
    </div>
  );
}

export default IndividualTestimony;
