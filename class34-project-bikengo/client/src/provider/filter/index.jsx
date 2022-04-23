import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const FilterOptionContext = createContext();

const FilterOptionProvider = ({ children }) => {
  const [filterOption, setFilterOption] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [wheelSize, setWheelSize] = useState("");
  return (
    <FilterOptionContext.Provider
      value={{
        filterOption,
        setFilterOption,
        selectValue,
        setSelectValue,
        type,
        setType,
        category,
        setCategory,
        brand,
        setBrand,
        wheelSize,
        setWheelSize,
      }}
    >
      {children}
    </FilterOptionContext.Provider>
  );
};

FilterOptionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterOptionProvider;
