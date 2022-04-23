import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import PropTypes from "prop-types";
import "./Select.css";
const Select = ({ filterName, path, onChange, onClick, value }) => {
  const [options, setOptions] = useState([]);

  const onSuccess = (data) => {
    setOptions(data.result);
  };

  const { performFetch, cancelFetch } = useFetch(path, onSuccess);

  useEffect(() => {
    performFetch({
      method: "GET",
    });
    return cancelFetch;
  }, []);

  return (
    <>
      <div className="flex justify-center rounded-lg w-56 h-8 bg-green-200 shadow-md p-1">
        <select
          onChange={(e) => onChange(e, filterName)}
          className="w-3/4 category bg-green-200 rounded-xl  text-text font-bold focus:outline-none cursor-pointer"
          onClick={onClick}
          value={value}
        >
          <option value={filterName}>{filterName}</option>
          {options.map((option) => {
            return (
              <option onClick={onClick} value={option._id} key={option._id}>
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

Select.propTypes = {
  filterName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default Select;
