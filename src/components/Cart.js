import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { clearCart, removeItem } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveCartItem = (item) => {
    console.log("here");
    dispatch(removeItem(item));
  };

  console.log(cartItems);
  if (cartItems?.length === 0) {
    return <h1> No items in the cart.</h1>;
  }

  return (
    <div>
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      {cartItems.map((item, index) => {
        return (
          <div className="" key={item.id}>
            <h1>
              {item.name} --- {item.count} order{item.count > 1 && "s"}
            </h1>
            <img src={`${IMG_CDN_URL}${item.imageId}`} />
            <h5>Description: {item.description}</h5>
            <h2>Price: {item.price / 100}</h2>
            {item.count > 1 && (
              <h2>Total Price: {(item.price / 100) * item.count}</h2>
            )}
            <h3>Ratings: {item.ratings.aggregatedRating.rating}</h3>
            <button onClick={() => handleRemoveCartItem(item)}>
              Remove Item
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
