import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const bikeContext = createContext();

const BikeProvider = ({ children }) => {
  const [addBike, setAddBike] = useState();

  return (
    <bikeContext.Provider value={{ addBike, setAddBike }}>
      {children}
    </bikeContext.Provider>
  );
};

BikeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BikeProvider;
