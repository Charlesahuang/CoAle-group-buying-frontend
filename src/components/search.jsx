import React, { useState } from "react";
import { FiSearch } from 'react-icons/fi';

const Search = ({searchFun}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    searchFun(searchValue);
  };

  return (
    <>
      <div className="search-bar">
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button className="Search_Button" onClick={handleSearch}>Search</button>
      </div>
    </>
  );
};

export default Search;
