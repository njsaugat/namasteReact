export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_320,c_fill/";

  
export const swiggy_api_URL ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

export const swiggy_restaurant_URL="https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.63448069999999&menuId=" 
// export const swiggy_api_URL =
//   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";  
export const restaurantData = [
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
