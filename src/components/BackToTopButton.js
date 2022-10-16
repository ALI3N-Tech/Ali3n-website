import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./BackToTopButton.css";
function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="toTop">
      {backToTopButton && (
        <button className="thisBtn" onClick={scrollUp}>
          <FaArrowAltCircleUp />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
