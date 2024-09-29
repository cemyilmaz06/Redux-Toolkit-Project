import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getData = createAsyncThunk("categorySlice/getData", async()=> {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data

});

export const categorySlice= createSlice({
    name: "categorySlice",


    initialState: {
        items:[],// Kategorilerin tutulacağı bir dizi (başlangıçta boş).
        loading: true,// Uygulama başlangıcında verilerin yüklenip yüklenmediğini gösteren bir durum (başlangıçta 'true' çünkü veriler yüklenmemiş).

        currentCategory:"all"// Seçili kategoriyi temsil eden değer (başlangıçta 'all', yani tüm kategoriler gösteriliyor).


    },

    reducers: {
        setCategory: (state,action)=> {
            state.currentCategory=action.payload
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getData.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getData.fulfilled, (state, action) => {
            state.items = action.payload;
    
            state.loading = false;
          });
    }
})

export const { setCategory} = categorySlice.actions;

export default categorySlice.reducer;