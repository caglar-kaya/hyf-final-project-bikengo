import React from "react";
import "./infoCard.css";

import PropTypes from "prop-types";

function InfoCard({ icon, title, text }) {
  return (
    <div className="infoCard">
      <span className="icon">
        <img className="iconImage" src={icon} alt="icon" />
      </span>
      <h4 className="title">{title}</h4>
      <p className="text">{text}</p>
    </div>
  );
}
InfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default InfoCard;
