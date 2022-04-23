import React, { useContext, useEffect } from "react";
import Select from "../../components/select/Select";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import { FilterOptionContext } from "../../provider/filter";
import "./ResultPage.css";
import ResultPageWrapper from "../components/resultPageWrapper/ResultPageWrapper";
import { SearchContext } from "../../provider/search";
const Results = () => {
  const {
    setFilterOption,
    selectValue,
    setSelectValue,
    type,
    brand,
    wheelSize,
    category,
    setType,
    setWheelSize,
    setBrand,
    setCategory,
  } = useContext(FilterOptionContext);
  const { setSearchOption } = useContext(SearchContext);
  // handle Filtering
  const onFilterOptionsChanged = (e, filterName) => {
    e.preventDefault();
    setSearchOption("");
    const filter = {};
    if (e.target.value !== filterName) {
      const formattedFilter = filterName
        .toLowerCase()
        .replaceAll(" ", "-")
        .trim();
      filter[formattedFilter] = e.target.value;
      setSelectValue({
        ...selectValue,
        ...filter,
      });
    } else if (e.target.value === filterName) {
      const formattedFilter = filterName
        .toLowerCase()
        .replaceAll(" ", "-")
        .trim();
      delete selectValue[formattedFilter];
      setSelectValue({ ...selectValue });
    }
  };

  useEffect(() => {
    setFilterOption(selectValue);
  }, [selectValue]);

  return (
    <PageWrapper>
      {/* filters and sort container */}
      <div className="flex">
        {/* filters container */}
        <div className="flex flex-wrap justify-between">
          <div className="mb-3 mr-2">
            <Select
              value={brand !== "" ? brand : "Brand"}
              filterName="Brand"
              path="/brand"
              onChange={onFilterOptionsChanged}
              onClick={(e) => setBrand(e.target.options.value)}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              value={type !== "" ? type : "Type"}
              filterName="Type"
              path="/type"
              onChange={onFilterOptionsChanged}
              onClick={(e) => setType(e.target.options.value)}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              value={category !== "" ? category : "Category"}
              filterName="Category"
              path="/category"
              onChange={onFilterOptionsChanged}
              onClick={(e) => setCategory(e.target.options.value)}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              value={wheelSize !== "" ? wheelSize : "Wheels size"}
              filterName="Wheels size"
              path="/wheelSize"
              onChange={onFilterOptionsChanged}
              onClick={(e) => setWheelSize(e.target.options.value)}
            />
          </div>
          <div className="mb-3 mr-2">
            <Select
              filterName="Frame Height"
              path="/frameHeight"
              onChange={onFilterOptionsChanged}
            />
          </div>
        </div>
      </div>
      <ResultPageWrapper />
    </PageWrapper>
  );
};

export default Results;
