import React from "react";
import BikeCardHorizontal from "../../../components/bikeCardHorizontal/BikeCardHorizontal";
import PropTypes from "prop-types";
const ResultBikeCardHorizontalWrapper = ({ bikeResult }) => {
  return (
    <div className="my-10">
      <div className="w-full flex flex-wrap justify-center">
        {bikeResult.map((bike) => {
          return (
            <BikeCardHorizontal
              email={bike.email}
              img={bike.photos[0]}
              title={bike.title}
              brand={bike.brand.value}
              type={bike.type.value}
              price={bike.price}
              key={bike._id}
              id={bike._id}
              sellFaster={bike.sellFaster}
            />
          );
        })}
      </div>
    </div>
  );
};
ResultBikeCardHorizontalWrapper.propTypes = {
  bikeResult: PropTypes.array.isRequired,
};
export default ResultBikeCardHorizontalWrapper;
