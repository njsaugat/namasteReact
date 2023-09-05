import React, { useState } from "react";
import {filterData} from '../utils/helper'


function Search({
  searchText,
  setSearchText,
  setFilteredRestaurantList,
  allRestaurantList,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={searchText}
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="search-btn"
        onClick={() => {
          searchTxt = "hello";
          const filteredRestaurants = filterData(allRestaurantList, searchText);
          setFilteredRestaurantList(filteredRestaurants);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
