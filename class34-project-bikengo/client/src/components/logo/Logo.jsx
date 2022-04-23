import React, { useContext } from "react";
import { FilterOptionContext } from "../../provider/filter";
import { SearchContext } from "../../provider/search";
import { useNavigate } from "react-router-dom";
import bikeMarker from "../../assets/logo/Logo.png";

const Logo = () => {
  const {
    setFilterOption,
    setSelectValue,
    setType,
    setCategory,
    setBrand,
    setWheelSize,
  } = useContext(FilterOptionContext);
  const { setSearchOption } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    setFilterOption([]);
    setSelectValue([]);
    setType("");
    setCategory("");
    setBrand("");
    setWheelSize("");
    setSearchOption("");
    navigate("/");
  };
  return (
    <div
      onClick={handleNavigate}
      className="flex items-start justify-center cursor-pointer"
    >
      <img className="h-14 w-15 rotate-12" src={bikeMarker} alt="logo" />
      <h1 className="relative -left-5 text-xl font-bold text-text italic m-0 mt-3">
        Bike
        <span className="text-primary">NG</span>o
      </h1>
    </div>
  );
};

export default Logo;
