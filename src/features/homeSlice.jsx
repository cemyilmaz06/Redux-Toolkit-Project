import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getHomeData = createAsyncThunk("homeSlice/getHomeData", async () => {
  const response = await axios(
    'https://fakestoreapi.com/products'
  );

  return response.data;
 
});

export const homeSlice = createSlice({
  name: "homeSlice",

  initialState: {
    products: [],
    loading: true,
  },

  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getHomeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHomeData.fulfilled, (state, action) => {
        state.products = action.payload;// API'den gelen ürünler state.products içine kaydedilir

        state.loading = false;
      });
  },
});

export const { } = homeSlice.actions;

export default homeSlice.reducer;
