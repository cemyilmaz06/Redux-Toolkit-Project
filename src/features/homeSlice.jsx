import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getData = createAsyncThunk("homeSlice/getData", async () => {
  const response = await axios(
    'https://fakestoreapi.com/products'
  );

  return response.data.articles;
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
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.haberler = action.payload;

        state.loading = false;
      });
  },
});

export const { } = homeSlice.actions;

export default homeSlice.reducer;
