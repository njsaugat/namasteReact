import { useState, useEffect } from "react";
import { swiggy_restaurant_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    try {
      const data = await fetch(swiggy_restaurant_URL + id);
      const json = await data.json();
      console.log(json);
      setRestaurant(json?.data);
    } catch (e) {
      console.log(e);
      setRestaurant(null);
    }
  }
  return restaurant;
};

export default useRestaurant;
