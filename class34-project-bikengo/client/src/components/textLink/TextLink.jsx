import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TextLink = ({ text, path }) => {
  return (
    <Link
      className="text-lg capitalize text-text font-semibold px-4 py-1 rounded-md hover:bg-tertiary transform transition-colors delay-75"
      to={path}
    >
      {text}
    </Link>
  );
};

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default TextLink;
