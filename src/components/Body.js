import RestaurantCard from "./RestaurantCard";
import { restaurantData, swiggy_api_URL } from "../constants";
import { useEffect, useState } from "react";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  console.log("renderBeforeReturn");

  async function getRestaurantData() {
    try {
      const data = await fetch(swiggy_api_URL);
      const restaurantData = await data.json();
      const restaurants =
        restaurantData?.data?.cards[2]?.card?.card.gridElements?.infoWithStyle
          ?.restaurants;
      setAllRestaurantList(restaurants);
      setFilteredRestaurantList(restaurants);
    } catch (e) {
      console.log(e);
      setAllRestaurantList([]);
      setFilteredRestaurantList([]);
    }
  }

  useEffect(() => {
    getRestaurantData();
  }, []);

  console.log("render");

  if (allRestaurantList.length === 0) {
    return <Shimmer />;
  }
  if (filteredRestaurantList.length === 0) {
    return (
      <>
        {/* <Search searchText={searchText} setSearchText={setSearchText}/> */}
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          setFilteredRestaurantList={setFilteredRestaurantList}
          allRestaurantList={allRestaurantList}
        />
        <h1>Oops!! No restaurant Found</h1>
      </>
    );
  }
  return (
    <>
      {console.log("renderAfterReturn")}
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        setFilteredRestaurantList={setFilteredRestaurantList}
        allRestaurantList={allRestaurantList}
      />
      <div className="restaurant-list">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              <RestaurantCard
                restaurant={restaurant.info}
                unique={restaurant.info.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
