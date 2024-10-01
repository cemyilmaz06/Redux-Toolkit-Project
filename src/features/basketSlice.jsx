import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItems: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState:{
    basketItems: [],
  }
   
  ,
  reducers: {
    addToBasket: (state, action) => {
      const productInBasket = state.basketItems.find(
        (item) => item.id === action.payload.id
      );

      if (productInBasket) {
        productInBasket.quantity += 1; // Eğer ürün zaten sepette varsa miktarını artır
      } else {
        state.basketItems.push({ ...action.payload, quantity: 1 }); // Ürünü sepete ekle ve miktarı 1 olarak ayarla
      }
    },
    clearBasket: (state) => {
        state.basketItems = []; // Sepeti boşaltıyoruz
      },
    
    incrementQuantity: (state, action) => {
      const productInBasket = state.basketItems.find(
        (item) => item.id === action.payload
      );
      if (productInBasket) {
        productInBasket.quantity += 1; // Miktarı artır
      }
    },
    // find state.basketItems içinde, action.payload ile aynı id'ye sahip ürünü bulmak için kullanılıyor.
    decrementQuantity: (state, action) => {
      const productInBasket = state.basketItems.find(
        (item) => item.id === action.payload
      );
      if (productInBasket.quantity > 1) {
        productInBasket.quantity -= 1; // Miktarı azalt
      }
    },
    removeFromBasket: (state, action) => {
      state.basketItems = state.basketItems.filter(
        (item) => item.id !== action.payload
      ); // Ürünü sepetten çıkar
    },
  },
});

export const { addToBasket, incrementQuantity, decrementQuantity, removeFromBasket ,clearBasket} =
  basketSlice.actions;

export default basketSlice.reducer;
