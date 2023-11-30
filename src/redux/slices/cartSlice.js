import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmout: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.totalAmout += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.totalAmout -= action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
