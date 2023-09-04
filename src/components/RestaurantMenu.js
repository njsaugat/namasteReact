import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, swiggy_restaurant_URL } from "../constants";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    try {
      const data = await fetch(swiggy_restaurant_URL + id);
      const json = await data.json();
      console.log(json);
      setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    } catch (e) {
      console.log(e);
      setRestaurant(null);
    }
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <ul>
        {/* {Object.values(restaurant?.menu?.items).map((item) => {
          <li key={item.id}>{item.name}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
