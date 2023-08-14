import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <h1>Restaurant Hills</h1>
    <ul className="header_nav">
      <li>Home 🏠</li>
      <li>Contact Us 👋</li>
    </ul>
  </div>
);


const restaurantData=[
  {
    "id": 1,
    "name": "Tasty Bites",
    "cuisine": "Italian",
    "address": "123 Main Street, Cityville",
    "phone": "555-123-4567",
    "menu": [
      {
        "id": 101,
        "name": "Margherita Pizza",
        "price": 12.99
      },
      {
        "id": 102,
        "name": "Pasta Carbonara",
        "price": 10.99
      }
    ]
  },
  {
    "id": 2,
    "name": "Spice Kingdom",
    "cuisine": "Indian",
    "address": "456 First Avenue, Townburg",
    "phone": "555-987-6543",
    "menu": [
      {
        "id": 201,
        "name": "Butter Chicken",
        "price": 14.99
      },
      {
        "id": 202,
        "name": "Vegetable Biryani",
        "price": 9.99
      }
    ]
  }
]

const MenuCard = ({menu}) => {
  return (
    <div className="menu-card">
      <h5>{ menu.name }  &nbsp; </h5>
      <h5> { menu.price}</h5>
    </div>
  )
}

const RestaurantCard = ({ restaurant ,unique} ) => {
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

const RestaurantList = () => {
  
  return  restaurantData.map(restaurant => {
    return <RestaurantCard restaurant={restaurant} key={restaurant.id} unique={ restaurant.id} />
    })
  
}

const styleObj = {
  backgroundColor: "red",
};


const links={ a: "hell", b: "nice" }
const linkB={ a: "hell", b: "nice" }
const App = () => (
  <>
    <Header/>
    <RestaurantList/>
  </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
