import React, { useState, useEffect, useContext } from "react";
import useFetch from "../../../hooks/useFetch";
import { FilterOptionContext } from "../../../provider/filter";
import { SearchContext } from "../../../provider/search";
import ResultPageMap from "../resultPageMap/ResultPageMap";
import ResultBikeCardHorizontalWrapper from "../resultBikeCardHorizontalWrapper/ResultBikeCardHorizontalWrapper";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
const ResultPageWrapper = () => {
  const { filterOption } = useContext(FilterOptionContext);
  const { searchOption } = useContext(SearchContext);
  const [bikeResult, setBikeResult] = useState([]);

  let path = "/bike";
  if (Object.keys(filterOption).length > 0) {
    const newPath = `/bike?${JSON.stringify(filterOption)}`;
    path = newPath
      // eslint-disable-next-line quotes
      .replaceAll('":"', "=")
      .replaceAll(",", "&")
      // eslint-disable-next-line quotes
      .replaceAll('"', "")
      .replaceAll("{", "")
      .replaceAll("}", "");
  }

  if (searchOption !== "") {
    path = `/bike/search?search-value=${searchOption}`;
  }

  const onSuccess = (data) => {
    setBikeResult(data.bikes);
  };
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    path,
    onSuccess
  );

  useEffect(() => {
    performFetch({
      method: "GET",
    });

    return () => {
      cancelFetch();
    };
  }, [filterOption, searchOption]);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div className="">
        <div className="w-full md:mx-auto md:w-1/2">
          <Error
            message="We can not find any bike with the given options, please try later or
            refresh the page..."
          />
        </div>
      </div>
    );
  }
  return (
    <div className="md:flex mt-10 ">
      <div className="w-full md:w-[55%] mx-auto">
        <ResultBikeCardHorizontalWrapper bikeResult={bikeResult} />
      </div>
      {/* map container */}
      <div className="flex-1 relative">
        <div className="sticky top-5 left-0">
          <ResultPageMap bikeResult={bikeResult} />
        </div>
      </div>
    </div>
  );
};
export default ResultPageWrapper;
