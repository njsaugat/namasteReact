import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, swiggy_restaurant_URL } from "../constants";
import useRestaurant from "../hooks/useRestaurant";
import useOnline from "../hooks/useOnline";
import Offline from "./Offline";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Cart from "./Cart";

const RestaurantMenu = () => {
  const { id } = useParams();
  const entireRestaurant = useRestaurant(id);
  const restaurant = entireRestaurant?.cards[0]?.card?.card?.info;
  const menu =
    entireRestaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;
  console.log(menu);
  const isOnline = useOnline();
  const dispatch = useDispatch();
  // const getValue=useDispatch()
  console.log(restaurant);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  if (!isOnline) {
    return <Offline />;
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <div>
          <h1>Restaurant id: {id}</h1>
          <h2>{restaurant.name}</h2>
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
          <h3>{restaurant.area}</h3>
          <h3>{restaurant.city}</h3>
          <h4>Cusines:</h4>
          {restaurant.cuisines.map((cuisine) => {
            return (
              <div key={cuisine}>
                <span>{cuisine}</span>
                {/* <button onClick={() => handleAddItem(cuisine)}>
                  Add item{" "}
                </button> */}
              </div>
            );
          })}

          {menu?.map((item) => {
            return (
              <div key={item.card.info.id}>
                <h3>{item.card.info.name}</h3>
                <img width={150} src={`${IMG_CDN_URL}${item.card.info.imageId}`}/>
                <button onClick={() => handleAddItem(item.card.info)}>
                  Add item{" "}
                </button>
              </div>
            );
          })}
          <h3>{restaurant.avgRating}</h3>
          <h3>{restaurant.costForTwoMsg}</h3>
        </div>
      </div>
      {/* <Cart /> */}
    </>
  );
};

export default RestaurantMenu;
