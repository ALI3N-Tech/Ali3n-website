import React from "react";

const Cards = (props) => {
  return (
    <div data-aos="fade-up" className="eachCompany">
      <h3>{props.text}</h3>
      <p>{props.text2}</p>
    </div>
  );
};

export default Cards;
