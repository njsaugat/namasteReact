import MenuCard from "./MenuCard"
import { useContext } from 'react';
import UserContext from '../utils/UserContext'
import { IMG_CDN_URL } from "../constants"
const RestaurantCard = ({ restaurant, unique }) => {
  const { user } = useContext(UserContext);
  const image_URL=IMG_CDN_URL+restaurant.cloudinaryImageId
  return (
    <div className="restaurant">
      <img src={image_URL} />
      <h1>{restaurant.name}</h1>
      <div className="menu-card">
        
        {restaurant.cuisines.map((menu,index) => {
          return < MenuCard menu={ menu} key={index} />
        })}
      </div>
      <h3>{ restaurant?.sla?.lastMileTravelString} Far</h3>
      <h3>Delivery in { restaurant?.sla?.slaString}</h3>
      <h5>{user.name }</h5>
    </div>
  )
}
export default RestaurantCard;