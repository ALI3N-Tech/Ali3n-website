import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--secondary"];

const TRICKS = ["btn--float"];

const SIZES = ["btn--normal", "btn--medium", "btn--large"];
export const Button = ({
  children,
  onClick,
  buttonSize,
  buttonStyle,
  buttonTricks,
  type,
  to,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonTricks = TRICKS.includes(buttonTricks)
    ? buttonTricks
    : TRICKS[0];

  return (
    <Link to="/about-us" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonTricks}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
