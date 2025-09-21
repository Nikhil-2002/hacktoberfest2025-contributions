import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice";
//import productReducer from "./Slice";
import productReducer from "./productSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});
