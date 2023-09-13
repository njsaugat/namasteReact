import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const particularItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (particularItem) {
        particularItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.count++;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        if (item.id === action.payload.id) {
          if (item.count > 1) {
            state.count = state.count - item.count;
          } else {
            state.count--;
          }
        }
        return item.id !== action.payload.id;
      });
    },
    removeLastItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
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
