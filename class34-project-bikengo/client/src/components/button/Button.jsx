import React from "react";
import PropTypes from "prop-types";
import "./button.css";
const Button = ({ text, fullSize, onClick, classes }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${fullSize && "w-full"} ${classes}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fullSize: PropTypes.bool,
  onClick: PropTypes.func,
  classes: PropTypes.string,
  mail: PropTypes.string,
};

export default Button;
