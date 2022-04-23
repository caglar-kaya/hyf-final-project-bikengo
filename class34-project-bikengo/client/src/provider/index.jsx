import React from "react";
import AppRouter from "../router";
import FilterOptionProvider from "./filter";
import SearchContext from "./search";
import UserProvider from "./user";
const AppProvider = () => {
  return (
    <UserProvider>
      <SearchContext>
        <FilterOptionProvider>
          <AppRouter />
        </FilterOptionProvider>
      </SearchContext>
    </UserProvider>
  );
};

export default AppProvider;
