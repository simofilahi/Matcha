import React from "react";
import { SearchPage } from "src/components/pages";
import SideBar from "src/components/sideBar";

const SearchContainer = (props) => {
  return (
    <SearchPage>
      <SideBar />
    </SearchPage>
  );
};

export default SearchContainer;
