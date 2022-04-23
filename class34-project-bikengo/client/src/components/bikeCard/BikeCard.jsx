import React from "react";
import PropTypes from "prop-types";
import FavIcon from "../favIcon/FavIcon";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
const BikeCard = ({
  img,
  title,
  brand,
  type,
  price,
  id,
  sellFaster,
  email,
}) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/results/${id}`);
  };
  return (
    <div className="w-80 h-[27rem] rounded-md overflow-hidden border-[1px] border-tertiary cursor-pointer shadow-lg hover:shadow-md transform transition-all duration-200 ease-in-out">
      {/* picture container */}
      <div
        onClick={handleCardClick}
        className="relative w-full h-60 mb-5 bg-gray-200"
      >
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-2">
          <FavIcon sellFaster={sellFaster} />
        </div>
        <div className="absolute left-3 -bottom-5 bg-text px-4 py-2 rounded-md text-white font-semibold">
          € {price}
        </div>
      </div>
      <div
        onClick={handleCardClick}
        className="m-3 flex flex-col space-y-2 mb-3 mt-8"
      >
        <p className="font-semibold text-text  text-lg">{title}</p>
        <p className="text-text_secondary font-semibold">Type : {type}</p>
        <p className="text-text_secondary font-semibold">Brand : {brand}</p>
      </div>
      {/* button */}
      <div className="flex justify-center items-center">
        {/* button wrapper */}
        <div className="w-5/6">
          <a href={`mailto:${email}`}>
            <Button text="Mail Seller" fullSize={true} />
          </a>
        </div>
      </div>
    </div>
  );
};

BikeCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  sellFaster: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

export default BikeCard;
