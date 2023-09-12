import RestaurantCard from "./RestaurantCard";
import { restaurantData, swiggy_api_URL } from "../constants";
import { useEffect, useState, useContext } from "react";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../hooks/useRestaurantList";
import Offline from "./Offline";
import useOnline from "../hooks/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [
    { allRestaurantList, setAllRestaurantList },
    { filteredRestaurantList, setFilteredRestaurantList },
  ] = useRestaurantList();
  console.log("render");

  const { user, setUser } = useContext(UserContext);
  const isOnline = useOnline();
  console.log("isOffline", isOnline);

  if (!isOnline) {
    return <Offline />;
  }

  if (allRestaurantList?.length === 0) {
    return <Shimmer />;
  }
  if (filteredRestaurantList?.length === 0) {
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
      <input
        value={user.name}
        onChange={(e) => {
          setUser((prevUser) => {
            return { ...prevUser, name: e.target.value };
          });
        }}
      />
      <div className="restaurant-list">
        {filteredRestaurantList?.map((restaurant) => {
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
