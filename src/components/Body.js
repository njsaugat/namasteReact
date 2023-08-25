import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../constants";
import { useState } from "react";
import Search from "./Search";
const Body = () => {
  const searchTxt = "MPC";

  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantData] = useState(restaurantData);
  return (
    <>
      {/* <Search/> */}
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
            setRestaurantData((prevRestaurantData) => {
              return restaurantData.filter((restaurantData) => {
                console.log(restaurantData.name.toLowerCase().includes(searchText.toLowerCase()))
                return restaurantData.name.toLowerCase().includes(searchText?.toLowerCase());
              });
            });
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard
              restaurant={restaurant}
              key={restaurant.id}
              unique={restaurant.id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Body;
