import React, { useState, useEffect } from "react";
import getCenter from "geolib/es/getCenter";
import MapGl from "../../../components/mapGl/MapGl";
import PropTypes from "prop-types";

import useAllBikesAddresses from "../../../hooks/useAllBikesAddresses";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
const ResultPageMap = ({ bikeResult }) => {
  const { loading, error, bikes } = useAllBikesAddresses(bikeResult);
  const [bikesOnMap, setBikesOnMap] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 52.379189,
    longitude: 4.899431,
    width: "100%",
    height: "100%",
    zoom: 6,
  });
  function filterBikes(bikesWithAddresses, resultBikes) {
    return bikesWithAddresses.filter((object1) => {
      return resultBikes.some((object2) => {
        return object1._id === object2._id;
      });
    });
  }
  function centerBikes(bikes) {
    const bikesCoordinates = bikes.map((bike) => ({
      longitude: bike.latLong[0],
      latitude: bike.latLong[1],
    }));
    return getCenter(bikesCoordinates);
  }
  useEffect(() => {
    const filteredBikes = [...filterBikes(bikes, bikeResult)];
    setBikesOnMap([...filteredBikes]);
  }, [bikes]);
  useEffect(() => {
    const centeredBikes = centerBikes(bikesOnMap);
    if (centeredBikes) {
      setViewport({
        ...viewport,
        width: "100%",
        height: "100%",
        zoom: 6,
        latitude: centeredBikes.latitude,
        longitude: centeredBikes.longitude,
      });
    }
  }, [bikesOnMap]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message="Something went wrong" />;
  }

  return (
    <MapGl
      bikes={bikesOnMap}
      boolean={false}
      viewport={viewport}
      setViewport={setViewport}
    />
  );
};
ResultPageMap.propTypes = {
  bikeResult: PropTypes.array.isRequired,
};
export default ResultPageMap;
