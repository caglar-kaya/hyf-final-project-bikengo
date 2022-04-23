import React, { useState, useEffect } from "react";
import useAllBikesAddresses from "../../../hooks/useAllBikesAddresses";
import MapGl from "../../../components/mapGl/MapGl";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import "./HomeMapContainer.css";
const HomeMapContainer = () => {
  const { bikes, isLoading, error } = useAllBikesAddresses();
  const [bikesOnMap, setBikesOnMap] = useState([]);
  useEffect(() => setBikesOnMap(bikes), [bikes]);
  const [viewport, setViewport] = useState({
    latitude: 52.379189,
    longitude: 4.899431,
    width: "100%",
    height: "100%",
    zoom: 6,
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div>
      <div className="flex flex-wrap justify-between my-2 ">
        <h2 className="not-prose my-2 text-2xl text-text  tracking-widest">
          Bikes near your location{" "}
        </h2>
      </div>
      <MapGl
        bikes={bikesOnMap}
        boolean={true}
        viewport={viewport}
        setViewport={setViewport}
      />
    </div>
  );
};

export default HomeMapContainer;
