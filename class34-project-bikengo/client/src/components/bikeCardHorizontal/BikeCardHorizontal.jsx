import React from "react";
import PropTypes from "prop-types";
import FavIcon from "../favIcon/FavIcon";
import "./BikeCardHorizontal.css";
import { useNavigate } from "react-router-dom";

const BikeCardHorizontal = ({
  img,
  title,
  type,
  brand,
  price,
  id,
  sellFaster,
}) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/results/${id}`);
  };
  return (
    <div
      className="m-2   rounded-md w-full  min-w-96 md:w-[19rem] max-w-sm 2xl:w-96  border-[1px] border-tertiary cursor-pointer shadow-lg hover:shadow-md transform transition-all duration-200 ease-in-out"
      onClick={handleCardClick}
    >
      <div className="flex w-full  h-[20rem] ">
        {/* image container */}
        <div className="relative  w-full h-full bg-gray-300 border-[1px] border-tertiary cursor-pointer shadow-lg">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover over"
          />
          <div className="absolute top-1 right-1">
            <FavIcon sellFaster={sellFaster} />
          </div>
          <div className="absolute left-3 -bottom-5 bg-text px-4 py-2 rounded-md text-white font-semibold">
            € {price}
          </div>
        </div>
      </div>
      <div className="p-1  m-3 flex flex-col space-y-2 mb-3 mt-8">
        <p className="font-bold text-text text-xl mb-2">{title}</p>
        <p className="text-text_secondary font-semibold mt-1">Brand: {brand}</p>
        <p className="text-text_secondary font-semibold mb-1">Type: {type}</p>
      </div>
    </div>
  );
};

BikeCardHorizontal.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sellFaster: PropTypes.bool.isRequired,
};

export default BikeCardHorizontal;
