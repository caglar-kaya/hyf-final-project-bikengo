import React from "react";
import BikeLogo from "../../assets/logo/Logo.png";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div classNameName="w-full h-max bg-gray-100">
      <div className="container mx-auto flex flex-col px-5 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={BikeLogo}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 tracking-widest">
            Bike
            <span className="text-primary bg-tertiary px-1 rounded-md">NG</span>
            o
          </h1>
          <p className="mb-8 leading-relaxed">
            BikeNGo is an App to help people selling their bikes and people who
            are looking to buy bikes. It shows bikes locations so they can
            choose the nearest suitable bike to them in the Netherlands.
          </p>
          <div className="flex">
            <Button text="Browse Bikes" onClick={() => navigate("/results")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
