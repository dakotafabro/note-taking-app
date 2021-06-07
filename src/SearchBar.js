import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearchNote }) => {
  return (
    <div className="SearchBar mt-4">
      <div className="container">
        <MdSearch className="search-icons" size="1.3em" />
        <input
          onChange={(event) => handleSearchNote(event.target.value)}
          type="text"
          placeholder="Search Notes..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
