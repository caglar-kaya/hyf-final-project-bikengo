import { useState, useEffect } from "react";
import useFetch from "./useFetch";

import axios from "axios";
const useAllBikesAddresses = () => {
  const controller = new AbortController();
  const [fetchedBikes, setFetchedBikes] = useState([]);
  const [bikes, setBikes] = useState([]);
  const onSuccess = (data) => {
    setFetchedBikes(data.bikes);
  };
  const { performFetch, cancelFetch, isLoading, error } = useFetch(
    "/bike?limit=100",
    onSuccess
  );
  useEffect(() => {
    performFetch({
      method: "GET",
    });
    return () => {
      cancelFetch();
    };
  }, []);
  useEffect(() => {
    setBikeLatLong();
    return () => {
      controller.abort();
    };
  }, [fetchedBikes]);

  const setBikeLatLong = async () => {
    try {
      const results = await Promise.all(
        fetchedBikes
          .filter((bike) => bike.address)
          .map(async (bike) => {
            const latLong = await getLatLong(bike.address);
            return {
              ...bike,
              latLong: latLong,
            };
          })
      );
      setBikes(results);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getLatLong = async (address) => {
    const { street, city, houseNumber, postcode, suffix } = address;
    const searchKey = [street, city, houseNumber, postcode, suffix]
      .filter(Boolean)
      .join()
      .replaceAll(" ", "&");

    const { data } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchKey}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
      { signal: controller.signal }
    );

    return data.features[0].center;
  };

  return { bikes, isLoading, error };
};

export default useAllBikesAddresses;
