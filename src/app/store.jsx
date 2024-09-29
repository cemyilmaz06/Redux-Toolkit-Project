import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../features/homeSlice";
import categorySlice from "../features/categorySlice";
import basketSlice from "../features/basketSlice";


export const store = configureStore({
  reducer: {
    categorySlice: categorySlice,
    homeSlice: homeSlice,
    basketSlice: basketSlice,
  },
});