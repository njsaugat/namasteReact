import {  createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Momo","pizza"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.filter((item) => item !== action.payload);
    },
    removeLastItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeLastItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

// export const theme = createSlice({
//   name: "theme",
//   initialState: {
//     theme: "dark",
//   },
//   reducers: {
//     changeTheme: (state, action) => {
//       state.theme === "dark" ? "light" : "dark";
//     },
//   },
// });
