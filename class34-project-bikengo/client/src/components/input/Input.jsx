import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, placeHolder, onChange, ...rest }) => {
  return (
    <input
      {...rest}
      name={name}
      placeholder={placeHolder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
