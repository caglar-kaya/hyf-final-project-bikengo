import React from "react";
import PropTypes from "prop-types";

const PageWrapper = ({ children }) => {
  return <div className="px-7 py-3">{children}</div>;
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
