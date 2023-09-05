import { useState, useEffect } from "react";

import { swiggy_api_URL } from "../constants";
const useRestaurantList = () => {
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

  return [
    { allRestaurantList, setAllRestaurantList },
    { filteredRestaurantList, setFilteredRestaurantList },
  ];
};

export default useRestaurantList;
