import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
 
// Created the Redux store here.
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
