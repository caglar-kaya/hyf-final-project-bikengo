import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import BikeCard from "../../../components/bikeCard/BikeCard";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";

const HomeBikeCardWrapper = () => {
  const path = "/bike?featured=true";
  const [featuredBike, setFeaturedBike] = useState([]);

  const onSuccess = (data) => {
    setFeaturedBike(data.bikes);
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    path,
    onSuccess
  );

  useEffect(() => {
    performFetch({
      method: "GET",
    });
    return cancelFetch;
  }, []);

  return (
    <div className="my-10 ">
      <h1 className="mx-4 my-6  not-prose my-2 text-2xl text-text  tracking-widest">
        Featured Bikes
      </h1>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-4 w-full">
        {/* foreach */}
        {error ? <Error message={error} /> : null}
        {isLoading ? (
          <Loading />
        ) : (
          featuredBike.map((bike) => (
            <BikeCard
              key={bike._id}
              id={bike._id}
              img={bike.photos[0]}
              title={bike.title}
              type={bike.type.value}
              price={bike.price}
              sellFaster={bike.sellFaster}
              brand={bike.brand.value}
              email={bike.user.email}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeBikeCardWrapper;
