import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    cart: cartSlice,
  },
});
export default store;
