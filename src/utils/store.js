import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice, // export reducers by default
  },
});

export default store;
