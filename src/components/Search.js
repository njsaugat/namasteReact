import React, { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={searchText}
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-btn">search</button>
      <h1>{searchText}</h1>
    </div>
  );
};

export default Search;
