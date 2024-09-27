import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getData = createAsyncThunk("categorySlice/getData", async()=> {
    const response = await axios('https://fakestoreapi.com/products/categories');
    return response.data
});

export const categorySlice= createSlice({
    name: "categorySlice",


    initialState: {
        kategoriler:[],
        loading: "true",
    },

    reducers: {
        filterCategory: ()=> {},
    },
    extraReducers: (builder)=>{
        builder.addCase(getData.pending, (state)=>{
            state.loading = true;
        }).addCase(getData.fulfilled, (state, action) => {
            state.haberler = action.payload;
    
            state.loading = false;
          });
    }
})

export const { filterCategory} = categorySlice.actions;

export default categorySlice.reducer;