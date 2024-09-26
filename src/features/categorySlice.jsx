import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getData = createAsyncThunk("categorySlice/getData", async () => {
  const response = await axios('https://fakestoreapi.com/products/categories');
  return response.data;
});


export const categorySlice = createSlice({


    name: "categorySlice",

    initialState:{
        kategoriler: [],
    },
    reducers:{
        filterKategori: ()=>{},
    }
})

export const { filterKategori } = categorySlice.actions;

export default categorySlice.reducer;
