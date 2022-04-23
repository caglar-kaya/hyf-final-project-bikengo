import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchOption, setSearchOption] = useState("");
  return (
    <SearchContext.Provider value={{ searchOption, setSearchOption }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;
