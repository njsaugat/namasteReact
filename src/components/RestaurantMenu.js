import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, swiggy_restaurant_URL } from "../constants";
import useRestaurant from "../hooks/useRestaurant";
import useOnline from "../hooks/useOnline";
import Offline from "./Offline";
const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const isOnline = useOnline();

  if (!isOnline) {
    return <Offline />;
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
    </div>
  );
};

export default RestaurantMenu;
