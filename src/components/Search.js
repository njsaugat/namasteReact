import React, { useState } from "react";

function Search({ searchText, setSearchText, setFilteredRestaurantList, allRestaurantList }) {
  return <div className="search-container">
    <input
      type="text"
      className="search-input"
      value={searchText}
      placeholder="Search"
      onChange={(e) => setSearchText(e.target.value)} />
    <button
      className="search-btn"
      onClick={() => {
        searchTxt = "hello";
        setFilteredRestaurantList((prevRestaurantData) => {
          return allRestaurantList.filter((restaurantData) => {
            return restaurantData.info.name
              .toLowerCase()
              .includes(searchText?.toLowerCase());
          });
        });
      } }
    >
      search
    </button>
  </div>;
}


export default Search;
