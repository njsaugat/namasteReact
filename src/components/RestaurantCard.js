import MenuCard from "./MenuCard"
const RestaurantCard = ({ restaurant, unique }) => {
  console.log(restaurant,unique)
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h2>{restaurant.cuisine}</h2>
      <h3>{restaurant.address}</h3>
      <h4>{restaurant.phone}</h4>
      <h4>
        Menu:
        {restaurant.menu.map(menu => {
          return < MenuCard menu={ menu} key={menu.id} />
        })}
      </h4>
    </div>
  )
}
export default RestaurantCard;