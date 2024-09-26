import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/homeSlice";
import categorySlice from "../features/categorySlice";


export const store = configureStore({
  reducer: {
    categorySlice: categorySlice,
    homeSlice: homeSlice,
   
  },
});