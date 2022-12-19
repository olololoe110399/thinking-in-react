import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    carts: [],
  },
  reducers: {
    add: (state, action) => {
      const productsCart = state.carts.find(
        (P) => P.name === action.payload.name
      );

      if (!productsCart) {
        state.carts.push(action.payload);
      } else {
        let newCart = state.carts;
        const slCart = newCart.findIndex(
          (indexCart) => indexCart.name === action.payload.name
        );
        if (newCart[slCart].quality === undefined) {
          newCart[slCart].quality = 2;
        } else {
          newCart[slCart].quality = newCart[slCart].quality + 1;
        }
      }
    },
    reset: (state) => {
      state.carts = [];
    },
  },
});

export const { add, reset } = productsSlice.actions;
export default productsSlice.reducer;
